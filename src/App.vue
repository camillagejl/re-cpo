<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
    color="primary lighten-1"
    class="d-flex justify-center"
    >
      <v-toolbar-title
      class="white--text"
      >
        RE-CPO
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="main">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Footer },
};
</script>

<style lang="scss">
:root {
  // Colors are named as the colors in the Materal color schemes.
  // https://vuetifyjs.com/en/styles/colors/#material-colors

  --primary-color: #699A7A;

  --secondary-color: #9A7F6B;
  --secondary-color-lighten-3: #EECFB9;
  --secondary-color-lighten-4: #FFEBD5;
}

.main {
  max-width: 1250px !important;
}
</style>
