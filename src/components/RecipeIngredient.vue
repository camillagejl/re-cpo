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

      <v-btn
        icon
        @click="decreaseAmount"
      >
        -
      </v-btn>

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

      <v-btn
        icon
        @click="increaseAmount"
      >
        +
      </v-btn>

    </v-col>

  </v-row>

</template>

<script>

export default {
  name: "RecipeIngredient",
  props: {
    ingredient: Object,
    measuringUnit: String
  },
  methods: {
    decreaseAmount() {
      // Gets the amount as number, as writing in the field saves it as string
      const amount = parseInt(this.ingredient.amount);

      // Gets the last digit, so we can decrease depending on this
      const lastDigit = parseInt(amount.toString().split("").slice(-1)[0]);

      // Decreases the amount with:
      // 10, if amount is over 100 and ends with 0.
      // 5, if the amount is over 100 and ends with 5.
      // 5, if the amount is between 20 and 100 and ends with 0 or 5.
      // 1, if the amount is under 20 or doesn't end with 0 or 5.
      if (amount > 100 && lastDigit === 0) {
        this.ingredient.amount = amount - 10;
      } else if (amount > 20 && (lastDigit === 0 || lastDigit === 5)) {
        this.ingredient.amount = amount - 5;
      } else this.ingredient.amount--;

      // const amount = this.ingredient.amount;
      //
      // console.log(amount);
      //
      // if (amount < 21) this.ingredient.amount--;
      // if (amount > 20 && amount < 101) this.ingredient.amount = amount - 5;
      // if (amount > 100) this.ingredient.amount = amount - 10;
    },
    increaseAmount() {
      // Gets the amount as number, as writing in the field saves it as string
      const amount = parseInt(this.ingredient.amount);

      // Gets the last digit, so we can increase depending on this
      const lastDigit = parseInt(amount.toString().split("").slice(-1)[0]);

      // Increases the amount with:
      // 10, if amount is over 100 and ends with 0.
      // 5, if the amount is over 100 and ends with 5.
      // 5, if the amount is between 20 and 100 and ends with 0 or 5.
      // 1, if the amount is under 20 or doesn't end with 0 or 5.
      if (amount > 99 && lastDigit === 0) {
        this.ingredient.amount = amount + 10;
      } else if (amount > 19 && (lastDigit === 0 || lastDigit === 5)) {
        this.ingredient.amount = amount + 5;
      } else this.ingredient.amount++;
    }
  }
};
</script>