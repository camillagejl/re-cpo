<template>
  <v-row
    class="fill-height pa-0 ma-0"
  >
    <v-col
      cols="6"
      style="background-color: var(--primary-color); color: var(--primary-color-darken-4)"
      class="d-flex align-center justify-center pa-12"
    >
      <v-row>
        <v-col
          cols="6"
        >
          <v-img
            :src="require('../assets/placeholders/re-cpo-full.png')"
          ></v-img>
        </v-col>
        <v-col
          cols="6"
          class="d-flex flex-column justify-space-between py-12"
        >
          <p>Welcome back to...</p>
          <v-container
          class="pa-0"
          >
          <h2
            class="text-h4 font-weight-medium"
          >
            RE-CPO
          </h2>
          <h3 class="text-h5">
            Your recipe companion
          </h3>
          </v-container>
          <v-container></v-container>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="6"
      class="d-flex align-center justify-center"
    >
      Hi there yo hi
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "Login"
};
</script>