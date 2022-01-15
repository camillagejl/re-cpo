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
      calories
    </p>

  </v-container>
</template>

<script>
export default {
  name: "NutritionInput",
  // data: () => ({
  //   value: 1001
  // }),
  props:
    {
      value: String
  },
  methods: {
    oninput(e) {
      console.log(e)
      // $emit('input', $event.target.value)
    }
  }
};
</script>