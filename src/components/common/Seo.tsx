import { NextSeo, NextSeoProps } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getDescription } from '~lib';

const getLocalizedUrl = (router) => {
  let path = router.asPath?.replace(/(\?|#).*/, '');
  let url = `https://productfinder.app${router.basePath}${path}`;

  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }

  return url;
};

interface SeoProps extends NextSeoProps {
  story?: any;
  image?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export const Seo = ({
  story: storyProp,
  title: titleProp,
  description: descriptionProp,
  image: imageProp,
  ogType,
  noIndex,
  ...props
}: SeoProps) => {
  const router = useRouter();
  const { pathname } = router;

  let title = titleProp;
  let description = descriptionProp;
  let image = { url: imageProp, width: 1200, height: 627 };

  const story = storyProp?.content || storyProp;

  if (story) {
    if (!title) {
      title = story.seo?.title || story.title;
    }
    if (!description) {
      description = getDescription(story);
    }
    if (!imageProp) {
      image = {
        url: story?.seo?.og_image || story?.image?.filename,
        width: 1200,
        height: 627,
      };
    }
  }

  const isHome = ['/'].includes(pathname);

  if (title && isHome) {
    title = `Perfect Product Finder - ${title}`;
  } else {
    title =
      title ?? 'Perfect Product Finder - Create the perfect guided sales flow';
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={getLocalizedUrl(router)}
        noindex={story?.noIndex === true || noIndex}
        openGraph={{
          images: [image],
          type: ogType || 'website',
          site_name: 'Perfect Product Finder',
        }}
        {...props}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@id': 'https://productfinder.app/#website',
              '@type': 'WebSite',
              url: 'https://productfinder.app/',
              name: 'Perfect Product Finder',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@id': 'https://productfinder.app/#webpage',
              '@type': 'WebPage',
              url: 'https://productfinder.app/',
              name: 'Perfect Product Finder',
            }),
          }}
        />
      </Head>
    </>
  );
};
