var htmlWebpackTemplateConfig = {
  // Required
  inject: false,
  template: require('html-webpack-template'),
  // template: 'node_modules/html-webpack-template/index.ejs',

  // Optional
  // appMountId: 'app',
  // baseHref: 'http://example.com/awesome',
  // devServer: 'http://localhost:3001',
  // googleAnalytics: {
  //   trackingId: 'UA-XXXX-XX',
  //   pageViewOnLoad: true
  // },
  meta: [
    {
      name: 'description',
      content: 'A better default template for html-webpack-plugin.'
    }
  ],
  mobile: true,
  lang: 'en-US',
  // links: [
  //   'https://fonts.googleapis.com/css?family=Roboto',
  //   {
  //     href: '/apple-touch-icon.png',
  //     rel: 'apple-touch-icon',
  //     sizes: '180x180'
  //   },
  //   {
  //     href: '/favicon-32x32.png',
  //     rel: 'icon',
  //     sizes: '32x32',
  //     type: 'image/png'
  //   }
  // ],
  inlineManifestWebpackName: 'webpackManifest',
  // scripts: [
  //   'http://example.com/somescript.js',
  //   {
  //     src: '/myModule.js',
  //     type: 'module'
  //   }
  // ],
  title: 'My App',
  // window: {
  //   env: {
  //     apiHost: 'http://myapi.com/api/v1'
  //   }
  // }

  // And any other config options from html-webpack-plugin:
  // https://github.com/ampedandwired/html-webpack-plugin#configuration
}

module.exports = {
  htmlWebpackTemplateConfig: htmlWebpackTemplateConfig,
}