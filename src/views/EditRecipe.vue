<template>
  <v-container>
    <v-form>

      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>

      <v-container
        v-if="!editTitle"
        class="ma-0 pa-0 d-flex align-center mb-9"
      >
        <h1
          v-if="recipeVersion.title && recipeVersion.title !== 'New recipe'"
          class="text-h4"
        >
          {{ recipeVersion.title }}
        </h1>
        <h1
          v-if="!recipeVersion.title || recipeVersion.title === 'New recipe'"
          class="text-h4 font-italic"
        >
          Your recipe title
        </h1>

        <v-btn
          icon
          class="ml-1"
          @click="editTitle = true"
        >
          <v-icon
            color="secondary"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
      </v-container>

      <v-row
        v-if="editTitle"
      >
        <v-col cols="6">
          <v-text-field
            class="text-h5 mb-3"
            v-model="recipeVersion.title"
            background-color="white"
            label="Recipe title"
            placeholder="Name your recipe..."
            outlined
            hide-details
            @focusout="editTitle = false"
          >

            <v-btn
              icon
              color="primary"
              slot="append"
              class="mb-3"
              @click="editTitle = false"
            >
              <v-icon>
                mdi-check
              </v-icon>
            </v-btn>
          </v-text-field>
        </v-col>
      </v-row>

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
          <v-expansion-panel-content class="pb-6">
            <v-row>

              <v-col cols="4">
                <v-combobox
                  v-model="recipeVersion.category"
                  label="Category"
                  :items="sorted_categories"
                  item-text="name"
                  outlined
                ></v-combobox>
              </v-col>

              <v-col cols="4">
                <v-combobox
                  v-model="recipeVersion.tags"
                  label="Tags"
                  :items="sorted_tags"
                  item-text="name"
                  outlined
                  small-chips
                  deletable-chips
                  multiple
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

                    <AdjustPlainNumber
                      v-model="workHours"
                      :appendText="'hours'"
                      :outlined="true"
                      :minValue="0"
                    ></AdjustPlainNumber>

                    <AdjustPlainNumber
                      v-model="workMinutes"
                      :appendText="'minutes'"
                      :outlined="true"
                      :minValue="0"
                    ></AdjustPlainNumber>

                  </v-row>
                </v-container>

                <v-container class="pa-0">
                  <IconHeader
                    :icon="'mdi-clock-outline'"
                    :text="'Idle time'"
                  ></IconHeader>

                  <v-row>

                    <AdjustPlainNumber
                      v-model="idleHours"
                      :appendText="'hours'"
                      :outlined="true"
                      :minValue="0"
                    ></AdjustPlainNumber>

                    <AdjustPlainNumber
                      v-model="idleMinutes"
                      :appendText="'minutes'"
                      :outlined="true"
                      :minValue="0"
                    ></AdjustPlainNumber>

                  </v-row>
                </v-container>

                <v-container class="pa-0">
                  <IconHeader
                    :icon="'mdi-clock-outline'"
                    :text="'Overall time'"
                  ></IconHeader>

                  <p>
                    <b>{{ getHoursAndMinutes(overallTime([
                      { hours: workHours, minutes: workMinutes },
                      { hours: idleHours, minutes: idleMinutes }
                    ])).hours }}</b> hours
                    <b>{{ getHoursAndMinutes(overallTime([
                      { hours: workHours, minutes: workMinutes },
                      { hours: idleHours, minutes: idleMinutes }
                    ])).minutes }} minutes</b> minutes
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
                  <AdjustPlainNumber
                    v-model="recipeVersion.time.shelf_time"
                    :outlined="true"
                  ></AdjustPlainNumber>
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
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h2 class="text-h5">
              Recipe
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pb-6">
            <v-row>
              <v-col cols="5">
                <h3 class="text-h6 font-weight-regular mb-6">
                  Ingredients
                </h3>

                <v-row
                  class="d-flex justify-center"
                >

                  <v-col
                    cols="7"
                    class="d-flex align-center mb-3 pt-0"
                  >
                    <AdjustPlainNumber
                      v-model="recipeVersion.servings"
                      :minValue="3"
                      :filled="true"
                      :innerIcon="'mdi-food'"
                      :prefix="' '"
                      :unit="'servings'"
                    ></AdjustPlainNumber>
                  </v-col>
                </v-row>

                <v-container
                  v-for="header in recipeVersion.ingredients"
                  :key="header.id"
                  class="pa-0"
                >

                  <IngredientHeader
                    v-model="header.name"
                    v-if="header.name"
                  >
                  </IngredientHeader>

                  <!-- Make it properly draggable!
                  https://betterprogramming.pub/create-a-sortable-list-with-draggable-items-
                  using-javascript-9ef38f96b258 -->
                  <RecipeIngredient
                    v-for="ingredient in header.ingredients"
                    :key="ingredient.id"
                    :ingredient="ingredient"
                  >
                  </RecipeIngredient>
                </v-container>

                <v-row
                >
                  <v-col>
                    <IconButton
                      :icon="'mdi-plus'"
                      :text="'Header'"
                      :plain="true"
                      :classProp="'pl-0'"
                      @clickEvent="newHeader"
                    ></IconButton>
                  </v-col>
                </v-row>

              </v-col>

              <v-spacer></v-spacer>

              <v-col cols="6">
                <h3 class="text-h6 font-weight-regular mb-6">
                  Steps
                </h3>

                <RecipeStep
                  v-for="step in recipeVersion.steps"
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
              Notes
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pb-6">
            <v-row>
              <v-col cols="6">
                <Note
                  v-for="note in recipeVersion.notes"
                  :key="note.id"
                  :note="note"
                ></Note>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <h2 class="text-h5">
              Images
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pb-6">
            <v-row
              class="d-flex justify-center"
            >
              <v-col
                cols="6"
              >
                <v-row
                  v-if="recipeVersion.images[selectedImage]"
                  class="mb-4 d-flex flex-column align-center"
                >
                  <v-img
                    :src="require('../assets/recipe_images/' + recipeVersion.images[selectedImage].image_url)"
                    height="400"
                    contain
                  ></v-img>
                  <v-btn
                    plain
                    color="primary"
                    class="mt-2"
                    @click="setMainImage(selectedImage)"
                  >
                    Select as main image
                  </v-btn>
                </v-row>
                <v-row
                  class="d-flex flex-row flex-wrap justify-center"
                >
                  <v-img
                    v-for="(image, i) in recipeVersion.images" :key="image.id"
                    :src="require('../assets/recipe_images/' + image.image_url)"
                    max-width="75"
                    @click="selectedImage = i"
                  ></v-img>

                  <v-tooltip top>
                    <template
                      v-slot:activator="{ on, attrs }"
                    >
                      <v-img
                        :src="require('../assets/placeholder_add.png')"
                        max-width="75"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <span>
                    Add image coming soon...
                    </span>
                  </v-tooltip>


                </v-row>
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
          @clickEvent="discardChangesOverlay = true"
        ></IconButton>

        <IconButton
          :icon="'mdi-content-save'"
          :text="'Save recipe'"
          :color="'primary'"
          @clickEvent="saveChangesOverlay = true"
        ></IconButton>
      </v-container>

      <!-- Discard recipe overlay -->
      <v-overlay
        :value="discardChangesOverlay"
      >
        <v-card
          class="mx-auto"
          width="344"
          outlined
          light
        >
          <v-card-title>
            Discard recipe?
          </v-card-title>
          <v-card-subtitle>
            Are you sure you want to discard this recipe version?
            Any edits will not be saved!
          </v-card-subtitle>
          <v-card-actions
            class="d-flex justify-end"
          >
            <IconButton
              :text="'Cancel'"
              :icon="'mdi-close'"
              :plain="true"
              :color="'secondary'"
              @clickEvent="discardChangesOverlay = !discardChangesOverlay"
            ></IconButton>
            <IconButton
              :text="'Discard'"
              :icon="'mdi-delete'"
              :color="'error'"
              @clickEvent="updateRecipe('discard')"
            ></IconButton>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="discardedChanges"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="d-flex flex-column align-center">
                <p class="text-h5 text--primary">
                  Your changes have been discarded!
                </p>
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-card-text>
            </v-card>
          </v-expand-transition>

        </v-card>
      </v-overlay>

      <!-- Save recipe overlay -->
      <v-overlay
        :value="saveChangesOverlay"
      >
        <v-card
          class="mx-auto"
          width="344"
          outlined
          light
        >
          <v-card-title>
            Save recipe?
          </v-card-title>
          <v-textarea
            v-model="recipeVersion.version_comment"
            class="px-4 pt-0 pb-4"
            outlined
            hide-details
            placeholder="Write a comment so you can remember this version."
          >
          </v-textarea>
          <v-card-actions
            class="d-flex justify-end"
          >
            <IconButton
              :text="'Cancel'"
              :icon="'mdi-close'"
              :plain="true"
              :color="'secondary'"
              @clickEvent="saveChangesOverlay = !saveChangesOverlay"
            ></IconButton>
            <IconButton
              :text="'Save'"
              :icon="'mdi-content-save'"
              :color="'primary'"
              @clickEvent="pushToStore"
            ></IconButton>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="savedChanges"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="d-flex flex-column align-center">
                <p class="text-h5 text--primary">
                  Your recipe has been saved!
                </p>
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-overlay>
    </v-form>
  </v-container>
</template>

<script>

import { mapState, mapGetters, mapMutations } from "vuex";
import IconHeader from "../components/IconHeader";
import NutritionInput from "../components/NutritionInput";
import RecipeStep from "../components/RecipeStep";
import RecipeIngredient from "../components/RecipeIngredient";
import IconButton from "../components/IconButton";
import Note from "../components/Note";
import AdjustPlainNumber from "../components/AdjustPlainNumber";
import router from "../router";
import IngredientHeader from "../components/IngredientHeader";

export default {
  name: "EditRecipe",
  components: {
    IngredientHeader,
    AdjustPlainNumber,
    Note,
    IconButton,
    RecipeIngredient,
    RecipeStep,
    NutritionInput,
    IconHeader
  },
  data: () => ({
    // Keeps index of which panels are displayed.
    panel: [],
    selectedImage: 0,

    editTitle: false,

    discardChangesOverlay: false,
    discardedChanges: false,

    saveChangesOverlay: false,
    savedChanges: false,

    userId: 1,
    editingVersionId: null,
    recipeId: null,

    // Those times are separate from the rest of the recipeVersion, because
    // they are displayed in hours/minutes, but not saved that way.
    workHours: 0,
    workMinutes: 0,
    idleHours: 0,
    idleMinutes: 0,

    // The information of the recipe that will be saved in Store
    recipeVersion: {
      recipeId: null,
      id: null,
      title: "New recipe",
      date: null,
      images: [],
      version_comment: null,
      category: null,
      tags: [],
      serving_type: null,
      time: {
        work_time: null,
        idle_time: null,
        shelf_time: 0,
        shelf_time_unit: 1
      },
      nutrition: {
        calories: "0",
        protein: "0",
        carbohydrates: "0",
        fat: "0",
        salt: "0"
      },
      nutrition_unit: 1,
      servings: 1,
      description: null,
      serving_suggestions: null,
      storage: null,
      ingredients: [
        {
          name: null,
          ingredients: [
            {
              amount: null,
              id: null,
              measuring_unit: 1,
              name: null,
            }
          ]
        }
      ],
      steps: [
        {
          id: null,
          description: null,
          images: []
        }
      ],
      notes: [
        {
          id: null,
          date: null,
          note: null
        }
      ]
    },

    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        to: { name: "Home" }


      },
      {
        text: "Work in progress",
        disabled: false,
        to: { name: "WorkInProgressOverview" }
      },
      {
        text: "",
        disabled: true,
        to: ""
      }
    ]

  }),
  computed: {
    ...mapState([
      "tags",
      "serving_types",
      "nutrition_units",
      "recipes",
      "shelf_time_units"
    ]),
    ...mapGetters([
      "sorted_categories",
      "sorted_serving_types",
      "sorted_tags",
      "recipe_ids",
      "version_ids",
      "category_ids",
      "tag_ids",
      "serving_type_ids"
    ]),
    servingTypeNames() {
      let servingTypes = [];

      this.serving_types.forEach(servingType => {
        servingTypes.push(servingType.name);
      });

      return servingTypes;
    },
    thisDate() {
      const newDate = new Date();
      const year = newDate.getFullYear();
      const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
      const date = ("0" + newDate.getDate()).slice(-2);

      return `${year}/${month}/${date}`;
    }
  },
  watch: {
    idleMinutes(newValue) {
      if (parseInt(newValue) > 59) {
        this.idleMinutes = this.idleMinutes - 60;
        this.idleHours = this.idleHours + 1;
      }
      if (isNaN(newValue)) this.idleMinutes = 0;
    },
    idleHours(newValue) {
      if (isNaN(newValue)) this.idleHours = 0;
    },
    workMinutes(newValue) {
      if (parseInt(newValue) > 59) {
        this.workMinutes = this.workMinutes - 60;
        this.workHours = this.workHours + 1;
      }
      if (isNaN(newValue)) this.workMinutes = 0;
    },
    workHours(newValue) {
      if (isNaN(newValue)) this.workHours = 0;
    },
    "recipeVersion.ingredients": {
      deep: true,
      handler(headers) {

        Object.entries(headers).forEach(header => {
          const ingredients = header[1].ingredients;

          // Finds the last ingredient, and if the ingredient is not empty,
          // a new empty ingredient will be added at the end.
          {
            const newIngredient = {
              id: null,
              name: null,
              amount: null,
              measuring_unit: 1
            };

            if (ingredients.length === 0) ingredients.push(newIngredient);

            const lastIngredient = ingredients.slice(-1)[0];
            if (
              lastIngredient.name !== null ||
              lastIngredient.amount !== null
            )
              ingredients.push(newIngredient);
          }

          // Deletes ingredient if it is not empty, except if it's the last one.
          ingredients.forEach((ingredient, i) => {
            if (
              (ingredient.name === null || ingredient.name === "") &&
              (ingredient.amount === 0 || ingredient.amount === "" ||
                ingredient.amount === null || isNaN(ingredient.amount)) &&
              ingredients.length - 1 !== i
            ) {
              ingredients.splice(i, 1);
            }
          });
        });
      }
    },

    "recipeVersion.steps": {
      deep: true,
      handler(steps) {
        // Finds the last step, and if the step is not empty,
        // a new empty step will be added at the end.

        const newStep = {
          description: null,
          id: null,
          images: [],
        };

        if (steps.length === 0) steps.push(newStep);

        const lastStep = steps.slice(-1)[0];
        if (
          lastStep.description !== null ||
          lastStep.images.length !== 0
        ) {
          steps.push(newStep);
        }

        // Deletes step if it is not empty, except if it's the last one.
        steps.forEach((step, i) => {
          if (
            (step.description === null || step.description === "") &&
            step.images.length === 0 &&
            steps.length - 1 !== i
          ) {
            steps.splice(i, 1);
          }
        });
      }
    },

    "recipeVersion.notes": {
      deep: true,
      handler(notes) {
        // Finds the last note  , and if the note  is not empty,
        // a new empty note  will be added at the end.

        const newNote = {
          id: null,
          date: this.thisDate,
          note: null
        };

        if (notes.length === 0) notes.push(newNote);

        const lastNote = notes.slice(-1)[0];
        if (
          lastNote.note !== null
        ) {
          notes.push(newNote);
        }

        // Deletes note  if it is not empty, except if it's the last one.
        notes.forEach((note, i) => {
          if (
            (note.note === null || note.note === "") &&
            notes.length - 1 !== i
          ) {
            notes.splice(i, 1);
          }
        });
      }
    }
  },
  methods: {
    ...mapMutations([
      "addNewCategory",
      "addNewTag",
      "addNewServingType",
      "addNewRecipeVersion"
    ]),
    overallTime(times) {
      let totalMinutes = 0;

      times.forEach(time => {
        totalMinutes = totalMinutes + parseInt(time.hours) * 60 + parseInt(time.minutes);
      });
      return totalMinutes;
    },
    newHeader() {
      this.recipeVersion.ingredients.push({
        name: "New header",
        ingredients: [
          {
            id: null,
            name: null,
            amount: null,
            measuring_unit: 1
          }
        ]
      });
    },
    setMainImage(index) {
      const images = this.recipeVersion.images;

      images[0].order_number = images[index].order_number;
      images[index].order_number = 1;

      this.recipeVersion.images = this.sortByOrder(images);
      this.selectedImage = 0;
    },
    sortByOrder(array) {
      return array.sort((a, b) => (a.order_number > b.order_number) ? 1 : -1);
    },
    updateRecipe(prop) {
      if (prop === "save") this.savedChanges = true;
      if (prop === "discard") this.discardedChanges = true;
      setTimeout(function() {
        router.push({ name: "WorkInProgressOverview" });
      }, 3000);
    },
    getHoursAndMinutes(totalMinutes) {
      let actualHours = Math.floor(totalMinutes / 60);
      let actualMinutes = Math.round(totalMinutes - actualHours * 60);

      return { hours: actualHours, minutes: actualMinutes };
    },
    pushToStore() {
      // Checks if the category is not an object, i.e. it is written manually
      if (typeof this.recipeVersion.category !== "object") {
        let categoryExists = false;

        // Checks if a category with that name already exists, and assigns this
        // id to the recipe if it does.
        this.sorted_categories.forEach(category => {
          if (category.name === this.recipeVersion.category) {
            categoryExists = true;
            this.recipeVersion.category = category.id;
          }
        });

        // If the category doesn't exist, creates a new one and assigns this id
        // to the recipe.
        if (!categoryExists) {
          const newCategory = {
            id: this.category_ids.slice(-1)[0] + 1,
            user_id: this.userId,
            name: this.recipeVersion.category[0].toUpperCase() + this.recipeVersion.category.slice(1)
          };

          this.addNewCategory({ category: newCategory });
          this.recipeVersion.category = newCategory.id;
        }
      }

      // If the category is an object, we will only save the id
      else if (typeof this.recipeVersion.category === "object"
        && this.recipeVersion.category !== null) {
        this.recipeVersion.category = this.recipeVersion.category.id;
      }

      // Checks if the serving type is not an object, i.e. is written manually
      if (typeof this.recipeVersion.serving_type !== "object") {
        let servingTypeExists = false;

        // Checks if a serving type with that name already exists, and assigns
        // this id to the recipe if it does.
        this.sorted_serving_types.forEach(servingType => {
          if (servingType.name === this.recipeVersion.serving_type) {
            servingTypeExists = true;
            this.recipeVersion.serving_type = servingType.id;
          }
        });

        // If the serving type doesn't exist, creates a new one and assigns this
        // id to the recipe.
        if (!servingTypeExists) {
          const newServingType = {
            id: this.serving_type_ids.slice(-1)[0] + 1,
            user_id: this.userId,
            name: this.recipeVersion.serving_type[0].toUpperCase() + this.recipeVersion.serving_type.slice(1)
          };

          this.addNewServingType({ servingType: newServingType });
          this.recipeVersion.serving_type = newServingType.id;
        }
      }

      // If the serving type is an object, we will only save the id
      else if (typeof this.recipeVersion.serving_type === "object"
        && this.recipeVersion.serving_type !== null) {
        this.recipeVersion.serving_type = this.recipeVersion.serving_type.id;
      }

      // If the recipe has tags, saves them properly
      if (this.recipeVersion.tags.length > 0) {

        this.recipeVersion.tags.forEach((tag, i) => {
          // Checks if any of the tags are not objects, and if so, creates a
          // new tag in store and adds this object to recipe tags.
          if (typeof tag !== "object") {

            let tagExists = false;

            // Checks if a category with that name already exists, and assigns
            // this id to the recipe if it does.
            this.tags.forEach(recipe_tag => {
              if (recipe_tag.name === tag) {
                tagExists = true;
                this.recipeVersion.tags[i] = recipe_tag;
              }
            });

            if (!tagExists) {
              const newTag = {
                id: this.tag_ids.slice(-1)[0] + 1,
                user_id: this.userId,
                name: tag[0].toUpperCase() + tag.slice(1)
              };
              this.addNewTag({ tag: newTag });
              this.recipeVersion.tags[i] = newTag;
            }
          }

          // ... and then, replaces tag objects with tag ids
          this.recipeVersion.tags[i] = this.recipeVersion.tags[i].id;

        });
      }

      // Removes the last empty ingredient, step and note
      this.recipeVersion.ingredients.forEach(header => {
        header.ingredients.pop();
      });
      this.recipeVersion.steps.pop();
      this.recipeVersion.notes.pop();

      this.recipeVersion.time.idle_time = this.overallTime([
        { hours: this.idleHours, minutes: this.idleMinutes }
      ]);
      this.recipeVersion.time.work_time = this.overallTime([
        { hours: this.workHours, minutes: this.workMinutes }
      ]);

      if (this.recipeId === 0) this.recipeId = this.recipe_ids.slice(-1)[0] + 1;

      this.addNewRecipeVersion({
        recipeId: this.recipeId,
        recipeVersion: this.recipeVersion,
        userId: this.userId
      });

      this.updateRecipe("save");
    }
  },
  mounted() {
    this.editingVersionId = parseInt(this.$route.params.version);
    this.recipeId = parseInt(this.$route.params.recipe);

    // ----- Populating data() with data from store -----
    if (this.editingVersionId) {
      this.recipes.forEach(recipe => {
        recipe.versions.forEach(version => {
          if (version.id === this.editingVersionId) {
            this.recipeVersion.recipeId = recipe.id;
            this.recipeVersion.title = version.title;

            // --- The below fields need to have the object added specifically to
            // the data, as the comboboxes can't work with id only, since it will
            // interpret is as text.

            // Finds category object from recipe's category
            this.sorted_categories.forEach(categoryObject => {
              if (version.category === categoryObject.id) {
                this.recipeVersion.category = categoryObject;
              }
            });

            // Finds serving type object from recipe's serving type
            this.sorted_serving_types.forEach(servingTypeObject => {
              if (version.serving_type === servingTypeObject.id) {
                this.recipeVersion.serving_type = servingTypeObject;
              }
            });

            // Finds tag objects from recipe's tag id
            version.tags.forEach(tag => {
              this.sorted_tags.forEach(tagObject => {
                if (tag === tagObject.id) this.recipeVersion.tags.push(tagObject);
              });
            });

            // ---

            this.recipeVersion.nutrition = version.nutrition;
            this.recipeVersion.nutrition_unit = version.nutrition_unit;

            this.recipeVersion.time = version.time;
            this.recipeVersion.description = version.description;
            this.recipeVersion.images = this.sortByOrder(version.images);
            this.recipeVersion.serving_suggestions = version.serving_suggestions;
            this.recipeVersion.storage = version.storage;

            const actualWorkTime = this.getHoursAndMinutes(version.time.work_time);
            this.workHours = actualWorkTime.hours;
            this.workMinutes = actualWorkTime.minutes;

            const actualIdleTime = this.getHoursAndMinutes(version.time.idle_time);
            this.idleHours = actualIdleTime.hours;
            this.idleMinutes = actualIdleTime.minutes;

            this.recipeVersion.servings = version.servings;
            this.recipeVersion.ingredients = version.ingredients;
            this.recipeVersion.steps = version.steps;
            this.recipeVersion.notes = version.notes;
          }
        });
      });
    }

    if (this.recipeVersion.notes[0].date === null) {
      this.recipeVersion.notes[0].date = this.thisDate;
    }

    if (this.recipeId === null) this.recipeId = this.recipe_ids.slice(-1)[0] + 1;
    this.recipeVersion.id = this.version_ids.slice(-1)[0] + 1;
    this.recipeVersion.date = this.thisDate;
  }
};
</script>

<style lang="scss">

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

</style>