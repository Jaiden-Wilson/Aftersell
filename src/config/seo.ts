const siteTitle = 'Perfect Product Finder';

const defaultSeo = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    site_name: siteTitle,
  },
  twitter: {
    handle: '@perfectproductfinder',
    cardType: 'summary_large_image',
  },
  titleTemplate: `%s`,
};

if (process.env.NODE_ENV === 'development') {
  defaultSeo.titleTemplate = `DEV: %s`;
}

export default defaultSeo;
