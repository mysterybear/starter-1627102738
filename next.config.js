module.exports = {
  i18n: require("./i18n.json"),
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    })
    return config
  },
  images: {
    domains: ["images.unsplash.com"],
  },
}
