import {
  createHandler,
  Get,
  Header,
  SetHeader,
} from '@storyofams/next-api-decorators';
import { flatten } from 'lodash';
import { SitemapStream } from 'sitemap';

import { sdk } from '~lib/graphqlClient';

const hardcodedPaths = ['/blog'];

export class Sitemap {
  private localizeLink(url) {
    let link = url;

    if (url === '/home') {
      link = '/';
    }

    if (link.endsWith('/')) {
      link = link.slice(0, -1);
    }

    return link;
  }

  private localizeLinks(links) {
    return flatten(
      links
        .map(({ url, translated_slugs, translated, ...rest }) => {
          if (translated === false) {
            return null;
          }

          return {
            url: this.localizeLink(url),
            ...rest,
          };
        })
        .filter((u) => !!u),
    );
  }

  private formatStorylokItems(data) {
    return data?.map(({ published_at, full_slug }) => ({
      url: `/${full_slug}`,
      ...(published_at
        ? { lastmod: new Date(published_at).toISOString() }
        : {}),
    }));
  }

  private async fetchStoryblokData() {
    const pages = (await sdk.pageItems()).PageItems?.items;
    const blogs = (await sdk.blogPostItems()).BlogpostItems?.items;

    return this.formatStorylokItems([...pages, ...blogs]);
  }

  @Get()
  @SetHeader('Content-Type', 'text/xml')
  @SetHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  public async sitemap(@Header('host') host: string) {
    const data = this.localizeLinks([
      ...hardcodedPaths.map((url) => ({ url })),
      ...(await this.fetchStoryblokData()),
    ]);

    const smStream = new SitemapStream({
      hostname: 'https://' + host,
    });

    for (const smItem of data) {
      smStream.write(smItem);
    }

    smStream.end();

    return smStream;
  }
}

export default createHandler(Sitemap);
