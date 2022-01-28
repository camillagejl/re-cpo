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
          v-if="recipeVersion.title"
          class="text-h4"
        >
          {{ recipeVersion.title }}
        </h1>
        <h1
          v-if="!recipeVersion.title"
          class="text-h4 font-italic"
        >
          Your recipe title
        </h1>

        <v-btn
          icon
          class="ml-1"
          @click="editTitle = !editTitle"
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
                    class="d-flex align-center mb-3"
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
                  >
                  </RecipeIngredient>
                </v-container>
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
                  class="mb-4 d-flex flex-column align-center"
                >
                  <v-img
                    :src="require('../assets/placeholders/' + recipeVersion.images[selectedImage].image_url)"
                    height="400"
                    contain
                  ></v-img>
                  <p>
                    <v-btn
                      plain
                      color="primary"
                      class="mt-2"
                      @click="setMainImage(selectedImage)"
                    >
                      Select as main image
                    </v-btn>
                  </p>
                </v-row>
                <v-row
                  class="d-flex flex-row flex-wrap justify-center"
                >
                  <v-img
                    v-for="(image, i) in recipeVersion.images" :key="image.id"
                    :src="require('../assets/placeholders/' + image.image_url)"
                    max-width="75"
                    @click="selectedImage = i"
                  ></v-img>
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
                  Your recipe have been saved!
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

export default {
  name: "EditRecipe",
  components: { AdjustPlainNumber, Note, IconButton, RecipeIngredient, RecipeStep, NutritionInput, IconHeader },
  data: () => ({
    // Keeps index of which panels are displayed.
    panel: [0],
    imageCarouselNumber: null,
    selectedImage: 0,

    editTitle: false,

    discardChangesOverlay: false,
    discardedChanges: false,

    saveChangesOverlay: false,
    savedChanges: false,

    userId: 1,
    editingVersionId: 1,

    // Those times are separate from the rest of the recipeVersion, because
    // they are displayed in hours/minutes, but not saved that way.
    workHours: null,
    workMinutes: null,
    idleHours: null,
    idleMinutes: null,

    // The information of the recipe that will be saved in Store
    recipeVersion: {
      recipeId: null,
      id: null,
      title: null,
      date: null,
      images: [],
      version_comment: null,
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
        salt: null
      },
      nutrition_unit: null,
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
      "recipe_tags",
      "serving_types",
      "nutrition_units",
      "recipes",
      "shelf_time_units"
    ]),
    ...mapGetters([
      "sorted_categories",
      "recipe_ids",
      "version_ids",
      "category_ids",
      "tag_ids",
      "serving_type_ids",
      "header_ids",
      "ingredient_ids",
      "note_ids"
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
    },
    workMinutes(newValue) {
      if (parseInt(newValue) > 59) {
        this.workMinutes = this.workMinutes - 60;
        this.workHours = this.workHours + 1;
      }
    },
    "recipeVersion.ingredients": {
      deep: true,
      handler(headers) {


        Object.entries(headers).forEach(header => {
          const ingredients = header[1].ingredients;

          // Finds the last ingredient, and if the ingredient is not empty,
          // a new empty ingredient will be added at the end.
          const lastIngredient = ingredients.slice(-1)[0];
          if (
            lastIngredient.name !== null ||
            lastIngredient.amount !== null
          ) {
            const newIngredient = {
              id: null,
              order_number: null,
              name: null,
              amount: null,
              unit_id: 1
            };
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
        const lastStep = steps.slice(-1)[0];
        if (
          lastStep.description !== null ||
          lastStep.images.length !== 0
        ) {
          const newStep = {
            description: null,
            id: null,
            images: [],
            order_number: null
          };
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
        const lastNote = notes.slice(-1)[0];
        if (
          lastNote.note !== null
        ) {
          const newNote = {
            id: null,
            date: this.thisDate,
            note: null
          };
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
      "addNewTag"
    ]),
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
        router.push("/wip-overview");
      }, 3000);
    },
    getHoursAndMinutes(totalMinutes) {
      const actualHours = Math.floor(totalMinutes / 60);
      const actualMinutes = Math.round(totalMinutes - actualHours * 60);

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

      // If the category is an object, we will only save the id.
      else if (typeof this.recipeVersion.category === "object") {
        this.recipeVersion.category = this.recipeVersion.category.id;
      }

      // -----

      if (this.recipeVersion.tags.length > 0) {

        this.recipeVersion.tags.forEach((tag, i) => {
          // Checks if any of the tags are not objects, and if so, creates a new
          // tag in store and adds this object to recipe tags.
          if (typeof tag !== "object") {
            const newTag = {
              id: this.tag_ids.slice(-1)[0] + 1,
              user_id: this.userId,
              name: tag[0].toUpperCase() + tag.slice(1)
            };
            this.addNewTag({ tag: newTag });
            this.recipeVersion.tags[i] = newTag;
          }

          // ... and then, replaces tag objects with tag ids
          this.recipeVersion.tags[i] = this.recipeVersion.tags[i].id;

        });
      }






      // Headers, ingredients, steps and comments all need new ids

      // this.updateRecipe("save");
    }
  },
  mounted() {
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
            this.serving_types.forEach(servingTypeObject => {
              if (version.serving_type === servingTypeObject.id) {
                this.recipeVersion.serving_type = servingTypeObject;
              }
            });

            // Finds tag objects from recipe's tag id
            version.tags.forEach(tag => {
              this.recipe_tags.forEach(tagObject => {
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

            // Removes extra spaces in notes. Might need to be deleted.
            this.recipeVersion.notes.forEach(note => {
              note.note = note.note.replace(/\s+/g, " ").trim();
            });
          }
        });
      });
    }

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