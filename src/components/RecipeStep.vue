<template>
  <v-row>
    <v-col cols="12" class="d-flex align-center">
      <p class="mx-3 mb-0">
        <v-icon>
          mdi-menu
        </v-icon>
      </p>

      <v-text-field
        v-model="step.description"
        style="width: 10%"
        outlined
        dense
        hide-details
      >
      </v-text-field>

      <p class="mx-3 mb-0">
        <v-img
          v-if="step.images.length > 0"
          :src="require('../assets/placeholders/' + step.images[0].image_url)"
          height="40"
          width="40"
          @click="showImages = !showImages"
        ></v-img>

        <v-img
          v-else
          :src="require('../assets/placeholders/placeholder_add.png')"
          height="40"
          width="40"
        ></v-img>

      </p>
    </v-col>

    <v-expand-transition>
      <v-row v-show="showImages">

        <v-col
          class="ml-15 d-flex"
        >
          <v-img
            v-for="image in step.images" :key="image.id"
            :src="require('../assets/placeholders/' + image.image_url)"
            height="60"
            max-width="60"
            contain
          ></v-img>
        </v-col>

      </v-row>
    </v-expand-transition>

  </v-row>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "RecipeStep",
  data: () => ({
    showImages: false
  }),
  props: {
    step: Object
  },
  computed: {
    ...mapState([
      "categories",
      "recipe_tags",
      "serving_types",
      "nutrition_units",
      "recipes",
      "measuring_units"
    ])
  }
};
</script>