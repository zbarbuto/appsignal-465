const { AppsignalPlugin } = require("@appsignal/webpack");

module.exports = {
  plugins: [
    new AppsignalPlugin({
      apiKey: "snip", // your Push API key (NOT your frontend key)
      release: "abcdefg",
      appName: "snip",
      environment: "development",
      urlRoot: ["https://example.com/"],
      deleteAfterCompile: true, // Important that we don't actually publish the source maps in production
      timeout: 20000, // OPTIONAL: increase max timeout of http client
    }),
  ],
};
