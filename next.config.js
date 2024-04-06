const path = require("path")

module.exports = {
  output: 'export',
  webpack: (config, options) => {
    config.resolve.alias.components = path.resolve("./src/components")
    return config
  },
}
