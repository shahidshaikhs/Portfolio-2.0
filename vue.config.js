module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
      config.plugin("html").tap((args) => {
        args[0].title = "Shahid Shaikh - UI Developer";
        return args;
      });
    },
  };
