<template>
  <v-row>
    <v-col cols="7" class="d-flex align-center">
      <p class="mx-3 mb-0">
        <v-icon>
          mdi-menu
        </v-icon>
      </p>

      <v-text-field
        v-model="ingredient.name"
        style="width: 10%"
        outlined
        dense
        hide-details
      >
      </v-text-field>

    </v-col>

    <v-col cols="5" class="d-flex align-center">

      <p class="mx-3 mb-0">
        -
      </p>

      <v-text-field
        v-model="ingredient.amount"
        style="width: 10%"
        outlined
        dense
        type="number"
        min="0"
        oninput="if (this.value < 0) this.value = 0"
        hide-details
      >
        <p
          class="pt-1 ma-0"
          slot="append"
        >
          {{ measuringUnit }}
        </p>
      </v-text-field>

      <p class="mx-3 mb-0">
        +
      </p>

    </v-col>

  </v-row>

</template>

<script>

export default {
  name: "RecipeIngredient",
  props: {
    ingredient: Object,
    measuringUnit: String
  }
};
</script>