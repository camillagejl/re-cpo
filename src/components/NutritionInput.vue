<template>
  <v-container class="d-flex align-center pa-0">
    <v-text-field
      style="max-width: 100px"
      outlined
      dense
      type="number"
      min="0"
      hide-details

      :value="value"
      @input="$emit('input', $event)"
    >
      <p
        class="pt-1 ma-0"
        slot="append"
      >
        g
      </p>
    </v-text-field>

    <p class="mx-3 mb-0">
      {{ name }}
    </p>

  </v-container>
</template>

<script>
export default {
  name: "NutritionInput",
  props:
    {
      value: String,
      name: String
  },
};
</script>