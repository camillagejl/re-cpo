<template>
  <v-container>

    <v-breadcrumbs
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>

    <h1 class="text-h4 mb-8">
      Work in progress
    </h1>

    <v-container v-if="!recipes">
      Loading
    </v-container>

    <v-container v-else>
      <v-row dense>
        <RecipeThumbnail
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </v-row>
    </v-container>

    <!--  Add recip button in bottom corner  -->
    <v-speed-dial
      v-model="fab"
      :direction="'left'"
      :transition="'slide-x-reverse-transition'"
      open-on-hover
      bottom
      right
      fixed
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="secondary darken-1"
          dark
          fab
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        dark
        small
        color="secondary"
      >
        <v-icon left>mdi-pencil</v-icon>
        New from template
      </v-btn>

      <v-btn
        dark
        small
        color="secondary"
        to="/edit-recipe"
      >
        <v-icon left>mdi-plus</v-icon>
        New from scratch
      </v-btn>
    </v-speed-dial>

  </v-container>
</template>

<script>

import RecipeThumbnail from "../components/RecipeThumbnail";
import { mapState } from "vuex";

export default {
  name: "WorkInProgressOverview",
  components: {
    RecipeThumbnail
  },
  computed: {
    ...mapState([
      "recipes"
    ])
  },
  data: () => ({
    fab: false,

    breadcrumbs: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: '',
        disabled: true,
        href: '',
      },
    ],
  }),


};
</script>