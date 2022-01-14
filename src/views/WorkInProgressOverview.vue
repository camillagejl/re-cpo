<template>
  <v-container>
    <v-breadcrumbs
      divider=">"
    ></v-breadcrumbs>
    <h1 class="display-1">
      Work in progress loaded!
    </h1>

    <v-contanier v-if="!recipes">
      Loading
    </v-contanier>

    <v-container v-else>
      <v-row dense>
        <RecipeThumbnail
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </v-row>
    </v-container>

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
      'recipes'
    ]),
    recipeVersion() {
      return this.recipes[0].versions[0].name;
    }
  }
};
</script>
