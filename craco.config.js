const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#336699","@link-color": "#9DB7D1" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
