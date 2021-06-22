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
