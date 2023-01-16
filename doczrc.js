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
}
