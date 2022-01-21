<template>
  <v-container>
    <v-form v-model="valid">

      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>

      <h1
        class="text-h4 mb-8"
      >
        {{ recipeVersion.title }}
      </h1>

      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel class="pb-6">
          <v-expansion-panel-header>
            <h2 class="text-h5">
              Recipe information
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>

              <v-col cols="4">
                <v-combobox
                  v-model="recipeVersion.category"
                  label="Category"
                  :items="categories"
                  item-text="name"
                  outlined
                ></v-combobox>
              </v-col>

              <v-col cols="4">
                <v-combobox
                  v-model="recipeVersion.tags"
                  label="Tags"
                  :items="recipe_tags"
                  item-text="name"
                  item-value="id"
                  outlined
                  chips
                  multiple
                  small-chips
                  deletable-chips
                ></v-combobox>
              </v-col>

              <v-col cols="4">
                <v-combobox
                  v-model="recipeVersion.serving_type"
                  label="Serving type"
                  :items="servingTypeNames"
                  item-text="name"
                  item-value="id"
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

                    <AdjustNumberField
                      v-model="workHours"
                      :appendText="'hours'"
                    ></AdjustNumberField>

                    <AdjustNumberField
                      v-model="workMinutes"
                      :appendText="'minutes'"
                    ></AdjustNumberField>

                  </v-row>
                </v-container>

                <v-container class="pa-0">
                  <IconHeader
                    :icon="'mdi-clock-outline'"
                    :text="'Idle time'"
                  ></IconHeader>

                  <v-row>

                    <AdjustNumberField
                      v-model="idleHours"
                      :appendText="'hours'"
                    ></AdjustNumberField>

                    <AdjustNumberField
                      v-model="idleMinutes"
                      :appendText="'minutes'"
                    ></AdjustNumberField>

                  </v-row>
                </v-container>

                <v-container class="pa-0">
                  <IconHeader
                    :icon="'mdi-clock-outline'"
                    :text="'Overall time'"
                  ></IconHeader>

                  <p>
                    <b>{{ overallTime.hours }}</b> hours
                    <b>{{ overallTime.minutes }}</b> minutes
                  </p>

                </v-container>

              </v-col>

              <v-spacer></v-spacer>

              <v-col cols="5">
                <IconHeader
                  :icon="'mdi-silverware-fork-knife'"
                  :text="'Nutrition facts'"
                ></IconHeader>

                <v-select
                  :items="nutrition_units"
                  item-text="name"
                  item-value="id"
                  filled
                  dense
                  v-model="recipeVersion.nutrition_unit"
                ></v-select>

                <NutritionInput
                  v-for="(value, name) in recipeVersion.nutrition"
                  :key="name"
                  v-model="recipeVersion.nutrition[name]"
                  :name="name"
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
                  <AdjustNumberField
                    v-model="recipeVersion.time.shelf_time"
                  ></AdjustNumberField>
                  <v-col cols="4">
                    <v-select
                      :items="shelf_time_units"
                      item-text="name"
                      item-value="id"
                      filled
                      v-model="recipeVersion.time.shelf_time_unit"
                      hide-details
                      dense
                      class="my-3"
                    ></v-select>
                  </v-col>
                  <v-col cols="3"></v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">

                <v-textarea
                  v-model="recipeVersion.description"
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
                  v-model="recipeVersion.serving_suggestions"
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
                  v-model="recipeVersion.storage"
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
        <v-expansion-panel class="pb-6">
          <v-expansion-panel-header>
            <h2 class="text-h5">
              Recipe
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="5">

                <v-row
                  class="d-flex justify-center"
                >
                  <v-col
                    cols="7"
                    class="d-flex align-center mb-3"
                  >
                    <v-btn
                      icon
                      @click="recipeVersion.servings--"
                    >
                      -
                    </v-btn>
                    <v-text-field
                      v-model="recipeVersion.servings"
                      filled
                      type="number"
                      dense
                      append="servings"
                      prepend-inner-icon="mdi-food"
                      prefix=" "
                      hide-details
                    >
                      <p
                        class="pt-1 ma-0"
                        slot="append"
                      >
                        servings
                      </p>
                    </v-text-field>
                    <v-btn
                      icon
                      @click="recipeVersion.servings++"
                    >
                      +
                    </v-btn>
                  </v-col>
                </v-row>

                <v-container
                  v-for="header in recipeVersion.ingredients"
                  :key="header.id"
                  class="pa-0"
                >

                  <h5
                    v-if="header.name !== null"
                    class="subtitle-1 d-flex align-center pt-6 pb-3"
                  >
                    {{ header.name }}
                  </h5>

                  <!-- Make it properly draggable!
                  https://betterprogramming.pub/create-a-sortable-list-with-draggable-items-
                  using-javascript-9ef38f96b258 -->
                  <RecipeIngredient
                    v-for="ingredient in header.ingredients"
                    :key="ingredient.id"
                    :ingredient="ingredient"
                    :unit="measuring_units[ingredient.unit_id].unit"
                  >
                  </RecipeIngredient>

                </v-container>

              </v-col>

              <v-spacer></v-spacer>

              <v-col cols="6">

                <RecipeStep
                  v-for="step in recipeVersion.steps"
                  :key="step.id"
                  :step="step"
                ></RecipeStep>

              </v-col>

            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="pb-6">
          <v-expansion-panel-header>
            <h2 class="text-h5">
              Private notes
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="6">

                <v-textarea
                  v-for="(note, i) in recipeVersion.notes"
                  :key="note.id"
                  v-model="recipeVersion.notes[i].note"
                  :label="note.date"
                  outlined
                  dense
                  hide-details
                  rows="3"
                  auto-grow
                  class="pb-3"
                >
                </v-textarea>

              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-container
        class="d-flex justify-end mt-12 pr-0"
      >

        <IconButton
          :icon="'mdi-close'"
          :text="'Discard changes'"
          :color="'error'"
          :plain="true"
          @clickEvent="logme"
        ></IconButton>

        <IconButton
          :icon="'mdi-content-save'"
          :text="'Save recipe'"
          :color="'primary'"
          @clickEvent="logme"
        ></IconButton>

      </v-container>

    </v-form>
  </v-container>
</template>

<script>

import { mapState } from "vuex";
import IconHeader from "../components/IconHeader";
import NutritionInput from "../components/NutritionInput";
import RecipeStep from "../components/RecipeStep";
import RecipeIngredient from "../components/RecipeIngredient";
import IconButton from "../components/IconButton";
import AdjustNumberField from "../components/AdjustNumberField";

export default {
  name: "EditRecipe",
  components: { AdjustNumberField, IconButton, RecipeIngredient, RecipeStep, NutritionInput, IconHeader },
  data: () => ({
    aData: null,

    // Form validation
    valid: false,

    // Keeps index of which panels are displayed.
    panel: [0, 1, 2],

    // Finds all occupied ids, so we can assign this version a new one.
    occupiedRecipeIds: [],
    occupiedVersionIds: [],

    // Those times are separate from the rest of the recipeVersion, because
    // they are displayed in hours/minutes, but not saved that way.
    workHours: null,
    workMinutes: null,
    idleHours: null,
    idleMinutes: null,

    // The information of the recipe that will be saved in Store
    recipeVersion: {
      id: null,
      title: null,
      date: null,
      comment: null,
      category: null,
      tags: [],
      serving_type: null,
      time: {
        work_time: null,
        idle_time: null,
        shelf_time: null,
        shelf_time_unit: null
      },
      nutrition: {
        calories: null,
        protein: null,
        carbohydrates: null,
        fat: null,
        salt: null,
        nutrition_unit: null
      },
      servings: null,
      description: null,
      serving_suggestions: null,
      storage: null,
      ingredients: {},
      steps: [],
      notes: []
    },

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
      "recipe_tags",
      "serving_types",
      "nutrition_units",
      "recipes",
      "measuring_units",
      "shelf_time_units"
    ]),
    servingTypeNames() {
      let servingTypes = [];

      this.serving_types.forEach(servingType => {
        servingTypes.push(servingType.name);
      });

      return servingTypes;
    },
    overallTime() {
      const totalWorkMinutes = parseInt(this.workHours) * 60 + parseInt(this.workMinutes);
      const totalIdleMinutes = parseInt(this.idleHours) * 60 + parseInt(this.idleMinutes);

      return this.getHoursAndMinutes(totalWorkMinutes + totalIdleMinutes);
    }
  },
  watch: {
    idleMinutes(newValue) {
      if (parseInt(newValue) > 59) {
        this.idleMinutes = this.idleMinutes - 60;
        this.idleHours = this.idleHours + 1;
      }
    },
    workMinutes(newValue) {
      if (parseInt(newValue) > 59) {
        this.workMinutes = this.workMinutes - 60;
        this.workHours = this.workHours + 1;
      }
    }
  },
  methods: {
    logme() {
      console.log("hi there");
    },
    getHoursAndMinutes(totalMinutes) {
      const actualHours = Math.floor(totalMinutes / 60);
      const actualMinutes = Math.round(totalMinutes - actualHours * 60);

      return { hours: actualHours, minutes: actualMinutes };
    },
    pushToStore() {
      if (typeof this.recipeVersion.category !== "object"
        && this.recipeVersion.category !== null) {
        // Do stuff to create new category
      }

      if (this.recipeVersion.tags.length > 0) {
        const newTags = [];
        this.recipeVersion.tags.forEach(tag => {
          if (typeof tag !== "object") {
            newTags.push(tag);
          }
        });

        if (newTags.length > 0) {
          //  Do stuff to create new tags
        }
      }
    }
  },
  mounted() {
    // ----- Populating data() with data from store -----

    const recipeVersionFromStore = this.recipes[0].versions[0];

    this.recipeVersion.title = recipeVersionFromStore.title;

    // --- The below fields need to have the object added specifically to
    // the data, as the comboboxes can't work with id only, since it will
    // interpret is as text.

    // Finds category object from recipe's category
    this.categories.forEach(categoryObject => {
      if (recipeVersionFromStore.category === categoryObject.id) {
        this.recipeVersion.category = categoryObject;
      }
    });

    // Finds serving type object from recipe's serving type
    this.serving_types.forEach(servingTypeObject => {
      if (recipeVersionFromStore.serving_type === servingTypeObject.id) {
        this.recipeVersion.serving_type = servingTypeObject;
      }
    });

    // Finds tag objects from recipe's tag id
    recipeVersionFromStore.tags.forEach(tag => {
      this.recipe_tags.forEach(tagObject => {
        if (tag === tagObject.id) this.recipeVersion.tags.push(tagObject);
      });
    });

    // ---

    this.recipeVersion.nutrition = recipeVersionFromStore.nutrition;

    this.recipeVersion.time = recipeVersionFromStore.time;
    this.recipeVersion.description = recipeVersionFromStore.description;
    this.recipeVersion.serving_suggestions = recipeVersionFromStore.serving_suggestions;
    this.recipeVersion.storage = recipeVersionFromStore.storage;

    const actualWorkTime = this.getHoursAndMinutes(recipeVersionFromStore.time.work_time);
    this.workHours = actualWorkTime.hours;
    this.workMinutes = actualWorkTime.minutes;

    const actualIdleTime = this.getHoursAndMinutes(recipeVersionFromStore.time.idle_time);
    this.idleHours = actualIdleTime.hours;
    this.idleMinutes = actualIdleTime.minutes;

    this.recipeVersion.servings = recipeVersionFromStore.servings;
    this.recipeVersion.ingredients = recipeVersionFromStore.ingredients;
    this.recipeVersion.steps = recipeVersionFromStore.steps;
    this.recipeVersion.notes = recipeVersionFromStore.notes;

    // Removes extra spaces in notes. Might need to be deleted.
    this.recipeVersion.notes.forEach(note => {
      note.note = note.note.replace(/\s+/g, " ").trim();
    });

    // Finds all occupied version ids.
    const recipeIds = [];
    const versionIds = [];
    this.recipes.forEach(recipe => {
      recipeIds.push(recipe.id);

      recipe.versions.forEach(version => {
        versionIds.push(version.id);
      });

    });
    this.occupiedRecipeIds = recipeIds.sort();
    this.occupiedVersionIds = versionIds.sort();

    this.recipeVersion.id = this.occupiedVersionIds.slice(-1)[0] + 1;

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();

    this.recipeVersion.date = year + "/" + month + "/" + date;
  }
};
</script>