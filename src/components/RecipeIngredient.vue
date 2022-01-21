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

    <AdjustNumberField
    v-model="ingredient.amount"
    :unit="unit"
    :cols="5"
    ></AdjustNumberField>

  </v-row>

</template>

<script>

import AdjustNumberField from "./AdjustNumberField";
export default {
  name: "RecipeIngredient",
  components: { AdjustNumberField },
  props: {
    ingredient: Object,
    unit: String
  }
};
</script>