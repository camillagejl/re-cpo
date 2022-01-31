<template>
  <v-row
    class="fill-height pa-0 ma-0"
  >
    <v-col
      cols="6"
      style="
      color: var(--primary-color-darken-4);
      background-color: var(--primary-color);
      background-image: url('../assets/placeholders/tapas.jpg');
"
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
      class="d-flex flex-column align-center justify-center"
    >
      <v-form
        ref="login"
        style="max-width: 350px"
      >
        <h1 class="text-h4 mb-8">
          Log in
        </h1>
        <v-text-field
          filled
          label="Email"
          type="email"
          prepend-inner-icon="mdi-chef-hat"
          hide-details
          class="my-3"
          :rules="[v => !!v || 'Email is required']"
        ></v-text-field>
        <v-text-field
          filled
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          hide-details
          class="mb-3"
        ></v-text-field>
        <IconButton
          color="primary"
          :text="'Log in'"
          :block="true"
          @clickEvent="validate"
        ></IconButton>
        <p class="d-flex justify-end align-center">
          Not a member yet?
          <IconButton
            :color="'primary'"
            :text="!signUpClicked ? 'Sign up' : 'Coming soon!'"
            :plain="true"
            :dense="true"
            class="ma-0 pl-2"
            @clickEvent="signUpClicked = !signUpClicked"
          ></IconButton>
        </p>
      </v-form>

    </v-col>
  </v-row>
</template>

<script>

import IconButton from "../components/IconButton";

export default {
  name: "Login",
  components: { IconButton },
  data: () => ({
    showPassword: false,
    user: {
      email: 'camilla@dilling.co',
      password: 'pass'
    },
    signUpClicked: false
  }),
  methods: {
    validate() {
      console.log(this.$refs.login.$el);
    }
  }
};
</script>