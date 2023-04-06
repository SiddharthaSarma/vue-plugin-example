export default {
  install(app, options) {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        if (o[i]) {
          return o[i];
        }
      }, options);
    };
    app.provide('i18n', options);
  }
}