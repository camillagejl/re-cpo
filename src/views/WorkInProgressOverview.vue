<template>
  <v-container>

    <v-breadcrumbs
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>

    <h1 class="text-h4 mb-8">
      Work in progress
    </h1>

    <v-container v-if="!recipes_by_date">
      Loading
    </v-container>

    <v-container v-else>
      <v-row dense>
        <RecipeThumbnail
          v-for="recipe in recipes_by_date"
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
        :to="{name: 'EditRecipe', params: {recipe: '0', version: '0'}}"
      >
        <v-icon left>mdi-plus</v-icon>
        New from scratch
      </v-btn>
    </v-speed-dial>

  </v-container>
</template>

<script>

import RecipeThumbnail from "../components/RecipeThumbnail";
import { mapGetters } from "vuex";

export default {
  name: "WorkInProgressOverview",
  components: {
    RecipeThumbnail
  },
  computed: {
    ...mapGetters([
      "recipes_by_date"
    ])
  },
  data: () => ({
    fab: false,
    template_clicked: false,

    breadcrumbs: [
      {
        text: 'Home',
        disabled: false,
        to: {name: 'Home'}
      },
      {
        text: '',
        disabled: true,
        to: '',
      },
    ],
  }),


};
</script>