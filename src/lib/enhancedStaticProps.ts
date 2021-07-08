import { staticPropsWithSdk } from './graphqlClient';

export const enhancedStaticProps: typeof staticPropsWithSdk = (
  getStaticProps,
) =>
  staticPropsWithSdk(async (context) => {
    const { sdk } = context;
    let footer;
    let navigation;

    try {
      footer = (await sdk.footerItem({ slug: 'settings/footer' })).FooterItem;
      navigation = (await sdk.navigationItem({ slug: 'settings/navigation' }))
        .NavigationItem;
    } catch (e) {}

    if (
      typeof window !== 'undefined' &&
      typeof window.IntersectionObserver === 'undefined'
    ) {
      await import('intersection-observer');
    }

    const staticProps = await getStaticProps(context);

    return {
      ...staticProps,
      props: {
        ...(staticProps as any).props,
        footer,
        navigation,
      },
    };
  });
