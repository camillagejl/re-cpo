<template>
    <v-col cols="cols" class="d-flex align-center">
      <v-btn
        icon
        @click="updateAmount('decrease')"
      >
        -
      </v-btn>

      <v-text-field
        style="width: 10%"
        outlined
        dense
        type="number"
        min="0"
        oninput="if (this.value < 0) this.value = 0"
        hide-details
        :value="value"
        @input="$emit('input', parseInt($event))"
      >
        <p
          class="pt-1 ma-0"
          slot="append"
        >
          {{ unit }}
        </p>
      </v-text-field>

      <v-btn
        icon
        @click="updateAmount('increase')"
      >
        +
      </v-btn>
    </v-col>
</template>

<script>

export default {
  name: "AdjustNumberField",
  props: {
    value: Number,
    unit: String,
    cols: Number
  },
  methods: {
    updateAmount(variation) {
      // Gets the amount as number, as writing in the field saves it as string
      let amount = parseInt(this.value);

      // Gets the last digit, so we can increase depending on this
      const lastDigit = parseInt(amount.toString().split("").slice(-1)[0]);

      // Increases(decreases the amount with:
      // 10, if amount is over 100 and ends with 0.
      // 5, if the amount is over 100 and ends with 5.
      // 5, if the amount is between 20 and 100 and ends with 0 or 5.
      // 1, if the amount is under 20 or doesn't end with 0 or 5.

      if (variation === "increase") {
        if (amount > 99 && lastDigit === 0) {
          amount = amount + 10;
        } else if (amount > 19 && (lastDigit === 0 || lastDigit === 5)) {
          amount = amount + 5;
        } else amount++;
      }

      if (variation === "decrease" && amount > 0) {
        if (amount > 100 && lastDigit === 0) {
          amount = amount - 10;
        } else if (amount > 20 && (lastDigit === 0 || lastDigit === 5)) {
          amount = amount - 5;
        } else amount--;
      }

    this.$emit('input', amount);

    }
  }
};
</script>