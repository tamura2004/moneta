module.exports = {
  mode: 'spa',
  devModules:[
    '@nuxtjs/vuetify',
  ],
  router: {
    middleware: ["firebase"],
  },
};
