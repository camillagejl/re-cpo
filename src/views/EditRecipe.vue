<template>
  <v-container>
    <v-form v-model="valid">

      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>

      <h1 class="text-h4">
        Veggie lasagna
      </h1>

      <v-container>

        <v-expansion-panels
          v-model="panel"
          multiple
        >

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Recipe information
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>

                <v-col cols="4">
                  <v-combobox
                    v-model="category"
                    label="Category"
                    :items="categoryNames"
                    outlined
                  ></v-combobox>
                </v-col>

                <v-col cols="4">
                  <v-combobox
                    v-model="tags"
                    label="Tags"
                    :items="tagNames"
                    outlined
                    chips
                    multiple
                    small-chips
                    deletable-chips
                  ></v-combobox>
                </v-col>

                <v-col cols="4">
                  <v-combobox
                    v-model="servingType"
                    label="Serving type"
                    :items="servingTypeNames"
                    outlined
                  ></v-combobox>
                </v-col>

              </v-row>

              <v-row>
                <v-col cols="5">

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Work time'"
                    ></IconHeader>

                    <v-row>
                      <v-col cols="6" class="d-flex align-center">
                        <p class="mx-3 mb-0">
                          -
                        </p>

                        <v-text-field
                          v-model="workHours"
                          style="width: 10%"
                          outlined
                          dense
                          type="number"
                          min="0"
                          hide-details
                        >
                        </v-text-field>

                        <p class="mx-3 mb-0">
                          + hours
                        </p>

                      </v-col>

                      <v-col cols="6" class="d-flex align-center">

                        <p class="mx-3 mb-0">
                          -
                        </p>

                        <v-text-field
                          v-model="workMinutes"
                          style="width: 10%"
                          outlined
                          dense
                          type="number"
                          min="0"
                          oninput="if (this.value < 0) this.value = 0"
                          hide-details
                        >
                        </v-text-field>

                        <p class="mx-3 mb-0">
                          + minutes
                        </p>

                      </v-col>

                    </v-row>
                  </v-container>

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Idle time'"
                    ></IconHeader>

                    <v-row>
                      <v-col cols="6" class="d-flex align-center">
                        <p class="mx-3 mb-0">
                          -
                        </p>

                        <v-text-field
                          v-model="idleHours"
                          style="width: 10%"
                          outlined
                          dense
                          type="number"
                          min="0"
                          hide-details
                        >
                        </v-text-field>

                        <p class="mx-3 mb-0">
                          + hours
                        </p>
                      </v-col>

                      <v-col cols="6" class="d-flex align-center">
                        <p class="mx-3 mb-0">
                          -
                        </p>

                        <v-text-field
                          v-model="idleMinutes"
                          style="width: 10%"
                          outlined
                          dense
                          type="number"
                          min="0"
                          oninput="if (this.value < 0) this.value = 0"
                          hide-details
                        >
                        </v-text-field>

                        <p class="mx-3 mb-0">
                          + minutes
                        </p>

                      </v-col>
                    </v-row>
                  </v-container>

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Overall time'"
                    ></IconHeader>

                    {{ overallTime }}

                  </v-container>

                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="5">
                  <IconHeader
                    :icon="'mdi-silverware-fork-knife'"
                    :text="'Nutrition facts'"
                  ></IconHeader>

                  <v-select
                    :items="nutritionUnitNames"
                    filled
                    v-model="nutritionUnit"
                  ></v-select>

                  <NutritionInput
                    v-model="calories"
                    :name="'calories'"
                  ></NutritionInput>
                  <NutritionInput
                    v-model="protein"
                    :name="'protein'"
                  ></NutritionInput>
                  <NutritionInput
                    v-model="carbohydrates"
                    :name="'carbohydrates'"
                  ></NutritionInput>
                  <NutritionInput
                    v-model="fat"
                    :name="'fat'"
                  ></NutritionInput>
                  <NutritionInput
                    v-model="salt"
                    :name="'salt'"
                  ></NutritionInput>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5">
                  <IconHeader
                    :icon="'mdi-flower'"
                    :text="'Shelf time'"
                  ></IconHeader>

                  <v-row>
                    <v-col cols="6" class="d-flex align-center">
                      <p class="mx-3 mb-0">
                        -
                      </p>

                      <v-text-field
                        v-model="shelfTime"
                        style="width: 10%"
                        outlined
                        dense
                        type="number"
                        min="0"
                        hide-details
                      >
                      </v-text-field>

                      <p class="mx-3 mb-0">
                        + days
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">

                    <v-textarea
                      v-model="description"
                      label="Description"
                      outlined
                      dense
                      hide-details
                      rows="3"
                      auto-grow
                      class="pb-3"
                    >
                    </v-textarea>

                    <v-textarea
                      v-model="servingSuggestions"
                      label="Serving suggestions"
                      outlined
                      dense
                      hide-details
                      rows="3"
                      auto-grow
                      class="pb-3"
                    >
                    </v-textarea>

                    <v-textarea
                      v-model="storage"
                      label="Storage"
                      outlined
                      dense
                      hide-details
                      rows="3"
                      auto-grow
                    >
                    </v-textarea>

                </v-col>
              </v-row>


            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Recipe
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="5">

                  <RecipeIngredient
                    v-for="ingredient in ingredients.no_header.ingredients"
                    :key="ingredient.id"
                    :ingredient="ingredient"
                    :measurinUnit="measuring_units[ingredient.unit_id].unit"
                  >
                  </RecipeIngredient>

                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="6">

                  <RecipeStep
                    v-for="step in steps"
                    :key="step.id"
                    :step="step"
                  ></RecipeStep>

                </v-col>

              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Private notes
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-container>

    </v-form>
  </v-container>
</template>

<script>

import { mapState } from "vuex";
import IconHeader from "../components/IconHeader";
import NutritionInput from "../components/NutritionInput";
import RecipeStep from "../components/recipeStep";
import RecipeIngredient from "../components/RecipeIngredient";

export default {
  name: "EditRecipe",
  components: { RecipeIngredient, RecipeStep, NutritionInput, IconHeader },
  data: () => ({
    panel: [1],

    showImages: false,

    valid: false,
    category: null,
    tags: [],
    servingType: null,

    workHours: 7,
    workMinutes: 27,
    idleHours: 5,
    idleMinutes: 35,
    shelfTime: 57,

    description: null,
    servingSuggestions: null,
    storage: null,

    nutritionUnit: "Per 100 g",
    calories: "320",
    protein: "320",
    carbohydrates: "320",
    fat: "320",
    salt: "320",

    ingredients: [],
    steps: [],

    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Work in progress",
        disabled: false,
        href: "/wip-overview"
      },
      {
        text: "",
        disabled: true,
        href: ""
      }
    ]
  }),
  computed: {
    ...mapState([
      "categories",
      "recipeTags",
      "servingTypes",
      "nutritionUnits",
      "recipes",
      "measuring_units"
    ]),
    categoryNames() {
      let categories = [];

      this.categories.forEach(category => {
        categories.push(category.name);
      });

      return categories;
    },
    tagNames() {
      let tags = [];

      this.recipeTags.forEach(tag => {
        tags.push(tag.name);
      });

      return tags;
    },
    servingTypeNames() {
      let servingTypes = [];

      this.servingTypes.forEach(servingType => {
        servingTypes.push(servingType.name);
      });

      return servingTypes;
    },
    nutritionUnitNames() {
      let nutritionUnits = [];

      this.nutritionUnits.forEach(unit => {
        nutritionUnits.push(unit.name);
      });

      return nutritionUnits;
    },
    overallTime() {
      const totalWorkMinutes = parseInt(this.workHours) * 60 + parseInt(this.workMinutes);
      const totalIdleMinutes = parseInt(this.idleHours) * 60 + parseInt(this.idleMinutes);

      const actualTime = this.getHoursAndMinutes(totalWorkMinutes + totalIdleMinutes);

      return `${actualTime.hours} hours ${actualTime.minutes} minutes`;
    },
  },
  methods: {
    getHoursAndMinutes(totalMinutes) {

      const actualHours = Math.floor(totalMinutes / 60);
      const actualMinutes = Math.round(totalMinutes - actualHours * 60);

      return {hours: actualHours, minutes: actualMinutes}

    }
  },
  mounted() {
    // ----- Populating data() with data from store -----

    const recipeVersion = this.recipes[0].versions[0];

    this.category = recipeVersion.category;
    this.tags = recipeVersion.tags;
    this.servingType = recipeVersion.serving_type;

    this.nutritionUnit = recipeVersion.nutrition_unit;
    this.calories = recipeVersion.calories;
    this.protein = recipeVersion.protein;
    this.carbohydrates = recipeVersion.carbohydrates;
    this.fat = recipeVersion.fat;
    this.salt = recipeVersion.salt;

    this.shelfTime = recipeVersion.shelf_time;
    this.description = recipeVersion.description;
    this.servingSuggestions = recipeVersion.serving_suggestions;
    this.storage = recipeVersion.storage;

    const actualWorkTime = this.getHoursAndMinutes(recipeVersion.work_time)
    this.workHours = actualWorkTime.hours;
    this.workMinutes = actualWorkTime.minutes;

    const actualIdleTime = this.getHoursAndMinutes(recipeVersion.idle_time)
    this.idleHours = actualIdleTime.hours;
    this.idleMinutes = actualIdleTime.minutes;

    this.ingredients = recipeVersion.ingredients;
    this.steps = recipeVersion.steps;


  }
};
</script>