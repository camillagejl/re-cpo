<template>
  <v-col class="d-flex align-center">
    <v-btn
      icon
      @click="updateAmountOnClick('decrease')"
    >
      -
    </v-btn>

    <v-text-field
      style="width: 10%"
      :outlined="outlined"
      dense
      :filled="filled"
      type="number"
      :min="minValue"
      :prepend-inner-icon="innerIcon"
      :prefix="prefix"
      oninput="if (this.value < this.minValue) this.value = this.minValue"
      hide-details
      :value="value.amount"
      @input="updateAmountInInput($event)"
    >
      <p
        class="pt-1 pl-4 ma-0 pointer"
        slot="append"
        @click="unitSelection = !unitSelection"
      >
        {{ measuringUnit }}
      </p>

    </v-text-field>

    <v-btn
      icon
      @click="updateAmountOnClick('increase')"
    >
      +
    </v-btn>

    <p class="ma-0">
      {{ appendText }}
    </p>

    <v-overlay
      :value="unitSelection"
    >
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        light
      >
        <v-card-title>
          Select unit
        </v-card-title>
        <v-card-text>
          <v-combobox
            :value="measuringUnit"
            :items="measuring_units"
            item-text="unit"
            dense
            hide-details
            slot="append"
            @change="changeUnit"
          ></v-combobox>
        </v-card-text>
        <v-card-actions
        class="d-flex justify-end"
        >
          <IconButton
          :text="'Cancel'"
          :icon="'mdi-close'"
          :plain="true"
          :color="'secondary'"
          @clickEvent="unitSelection = !unitSelection"
          ></IconButton>
        </v-card-actions>
      </v-card>
    </v-overlay>

  </v-col>
</template>

<script>

import { mapState } from "vuex";
import IconButton from "./IconButton";

export default {
  name: "AdjustNumberField",
  components: { IconButton },
  props: {
    value: Object,
    minValue: Number,
    appendText: String,
    filled: Boolean,
    outlined: Boolean,
    innerIcon: String,
    prefix: String
  },
  data: () => ({
    unitSelection: false
  }),
  computed: {
    ...mapState([
      "measuring_units"
    ]),
    measuringUnit() {
      let measuringUnit = "";
      this.measuring_units.forEach(unit => {
        if (unit.id === this.value.measuring_unit) {
          measuringUnit = unit.unit;
        }
      });
      return measuringUnit;
    }
  },
  methods: {
    changeUnit(unit) {
      const adjustObject = this.value;

      adjustObject.measuring_unit = unit.id;

      this.$emit("input", adjustObject);
      this.unitSelection = false;
    },
    updateAmountInInput(amount) {
      const adjustObject = this.value;

      adjustObject.amount = amount;

      this.$emit("input", adjustObject);
    },
    updateAmountOnClick(variation) {
      // Gets the amount as number, as writing in the field saves it as string
      let amount = parseInt(this.value.amount);

      // Gets the last digit, so we can increase depending on this
      const lastDigit = parseInt(amount.toString().split("").slice(-1)[0]);

      // Increases/decreases the amount with:
      // 10, if amount is over 100 and ends with 0.
      // 5, if the amount is over 100 and ends with 5.
      // 5, if the amount is between 20 and 100 and ends with 0 or 5.
      // 1, if the amount is under 20 or doesn't end with 0 or 5.

      if (variation === "increase") {
        if (amount > 99 && lastDigit === 0) {
          amount = amount + 10;
        } else if (amount > 19 && (lastDigit === 0 || lastDigit === 5)) {
          amount = amount + 5;
        } else if (isNaN(amount)) amount = 1;
        else amount++;
      }

      if (variation === "decrease" && amount > 0) {
        if (amount > 100 && lastDigit === 0) {
          amount = amount - 10;
        } else if (amount > 20 && (lastDigit === 0 || lastDigit === 5)) {
          amount = amount - 5;
        } else if (amount > this.minValue) amount--;
      }

      const adjustObject = this.value;
      adjustObject.amount = amount;

      this.$emit("input", adjustObject);
    },
  }
};
</script>