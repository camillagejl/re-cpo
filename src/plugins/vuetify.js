import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#699A7A',
        secondary: '#9A7F6B',
        error: '#AD4040'
        // accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})