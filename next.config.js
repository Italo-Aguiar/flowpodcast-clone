const withCSS = require('@zeit/next-css');

module.exports = {
  ...withCSS({}),
  env: {
    flow_api: 'https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2'
  }
}