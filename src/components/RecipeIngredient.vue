<template>
  <v-row>
    <v-col cols="7" class="d-flex align-center">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
      <p
        class="mx-3 mb-0"
        v-bind="attrs"
        v-on="on"
        @click="clicked = true"
      >
        <v-icon>
          mdi-menu
        </v-icon>
      </p>
        </template>
        <span
          v-if="!clicked"
        >
          Drag ingredient
        </span>
        <span
          v-if="clicked"
        >
          Coming soon!
        </span>
      </v-tooltip>

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
    v-model="ingredient"
    :outlined="true"
    :minValue="0"
    ></AdjustNumberField>

  </v-row>

</template>

<script>

import AdjustNumberField from "./AdjustNumberField";

export default {
  name: "RecipeIngredient",
  components: { AdjustNumberField },
  data: () => ({
    clicked: false
  }),
  props: {
    ingredient: Object,
    unit: String
  }
};
</script>