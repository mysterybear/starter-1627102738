module.exports = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    })
    return config
  },
}
