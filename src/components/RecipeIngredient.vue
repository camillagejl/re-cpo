<template>
  <v-row>
    <v-col cols="7" class="d-flex align-center">
      <TooltipIcon
      :unclicked-tooltip="'Drag ingredient'"
      :clickedTooltip="'Coming soon!'"
      :icon="'drag'"
      >
        <v-icon>
          mdi-menu
        </v-icon>
      </TooltipIcon>
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
import TooltipIcon from "./TooltipIcon";

export default {
  name: "RecipeIngredient",
  components: { TooltipIcon, AdjustNumberField },
  data: () => ({
    clicked: false
  }),
  props: {
    ingredient: Object,
    unit: String
  }
};
</script>