module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
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
