const path = require("path")

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias.components = path.resolve("./src/components")
    return config
  },
}
