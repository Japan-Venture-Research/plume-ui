const path = require('path')

export default {
  codeSandbox: false,
  typescript: true,
  title: 'plume-ui 🐦',
  menu: [
    'Getting Started',
    'Development',
    'Components',
    'Layout',
    'Helpers',
    'Styles',
    'Internal',
  ],
  themeConfig: {
    colors: {
      primary: '#2a2a2a',
    },
    showPlaygroundEditor: true,
  },
  htmlContext: {
    head: {
      // Load web fonts etc
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.remixicon.com/releases/v2.0.0/remixicon.css'
        }
      ]
    }
  },
  modifyBundlerConfig: config => {
    config.resolve.alias['src'] = path.join(__dirname, './src')
    config.entry.app.push('./dist/index.css')
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    })

    return config
  },
}
