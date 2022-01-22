import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        firstname: "john",
        lastname: "doe",
        email: "john@doe.com",
        password: "1234"
      }
    ],
    recipes: [
      {
        id: 1,
        user_id: 1,
        created: "2022/01/13",
        versions: [
          {
            id: 1,
            title: "Veggie lasagnette",
            date: "2022/01/15",
            image: "veggie_lasagna.jpg",
            version_comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: 2,
            tags: [1, 2],
            serving_type: 2,
            time: {
              work_time: 20,
              idle_time: 90,
              shelf_time: 5,
              shelf_time_unit: 1
            },
            nutrition: {
              calories: "320",
              protein: "320",
              carbohydrates: "320",
              fat: "320",
              salt: "320"
            },
            nutrition_unit: 2,
            servings: 4,
            description: "I'm a lasagna",
            serving_suggestions: "Eat me",
            storage: "In the fridge, please",
            ingredients: [
              {
                id: 3,
                order: 1,
                name: null,
                ingredients: [
                  {
                    id: 1,
                    order_number: 1,
                    name: "Carrots",
                    amount: 300,
                    unit_id: 2
                  },
                  {
                    id: 4,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              },
              {
                id: 2,
                order: 2,
                name: "Sauce",
                ingredients: [
                  {
                    id: 3,
                    order_number: 1,
                    name: "Cauliflower",
                    amount: 300,
                    unit_id: 2
                  },
                  {
                    id: 4,
                    order_number: 2,
                    name: "Water",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              }
            ],
            steps: [
              {
                id: 1,
                order_number: 1,
                description: "Peel the carrots.",
                images: [
                  {
                    id: 1,
                    image_url: "veggie_lasagna.jpg"
                  },
                  {
                    id: 2,
                    image_url: "veggie_lasagna.jpg"
                  }
                ]
              }
            ],
            notes: [
              {
                id: 1,
                date: "2021/11/04",
                note: "This is a note"
              }
            ]
          }
        ]
      }
    ],
    measuring_units: {
      1: {
        unit: "pcs"
      },
      2: {
        unit: "g"
      }
    },
    categories: [
      {
        id: 1,
        user_id: null,
        name: "Breakfast"
      },
      {
        id: 2,
        user_id: null,
        name: "Lunch"
      },
      {
        id: 3,
        user_id: null,
        name: "Dinner"
      },
      {
        id: 4,
        user_id: null,
        name: "Desert"
      },
      {
        id: 5,
        user_id: null,
        name: "Appetizer"
      },
      {
        id: 6,
        user_id: null,
        name: "Bread"
      },
      {
        id: 7,
        user_id: null,
        name: "Brunch"
      },
      {
        id: 8,
        user_id: null,
        name: "Salad"
      }
    ],
    recipe_tags: [
      {
        id: 1,
        user_id: null,
        name: "Danish"
      },
      {
        id: 2,
        user_id: null,
        name: "Vegan"
      }
    ],
    serving_types: [
      {
        id: 1,
        user_id: null,
        name: "Main course"
      },
      {
        id: 2,
        user_id: null,
        name: "Side dish"
      }
    ],
    nutrition_units: [
      {
        id: 1,
        name: "Per 100 g"
      },
      {
        id: 2,
        name: "Per serving"
      }
    ],
    shelf_time_units: [
      {
        id: 1,
        name: "days"
      },
      {
        id: 2,
        name: "weeks"
      },
      {
        id: 3,
        name: "months"
      },
      {
        id: 4,
        name: "years"
      }
    ]
  },
  getters: {
    sorted_categories: (state) => {
      // Sort function: https://stackoverflow.com/a/1129270;
      return state.categories.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    },

    // Find all ids for attributes where new can be added through the app.
    // This is *NOT* supposed to happen in the front end, but in the database,
    // when that is connected.
    recipe_ids: (state) => {
      const recipeIds = [];
      state.recipes.forEach(recipe => {
        recipeIds.push(recipe.id);
      });
      return recipeIds.sort(function(a, b) {
        return a - b;
      });
    },

    version_ids: (state) => {
      const versionIds = [];
      state.recipes.forEach(recipe => {
        recipe.versions.forEach(version => {
          versionIds.push(version.id);
        });
      });
      return versionIds.sort(function(a, b) {
        return a - b;
      });
    },

    category_ids: (state) => {
      const categoryIds = [];
      state.categories.forEach(category => {
        categoryIds.push(category.id);
      });
      return categoryIds.sort(function(a, b) {
        return a - b;
      });
    },

    tag_ids: (state) => {
      const tagIds = [];
      state.recipe_tags.forEach(tags => {
        tagIds.push(tags.id);
      });
      return tagIds.sort(function(a, b) {
        return a - b;
      });
    },

    serving_type_ids: (state) => {
      const servingTypeIds = [];
      state.serving_types.forEach(servingTypes => {
        servingTypeIds.push(servingTypes.id);
      });
      return servingTypeIds.sort(function(a, b) {
        return a - b;
      });
    },

    header_ids: (state) => {
      const headerIds = [];

      state.recipes.forEach(recipe => {
        recipe.versions.forEach(version => {
          version.ingredients.forEach(header => {
            headerIds.push(header.id);
          });
        });
      });

      return headerIds.sort(function(a, b) {
        return a - b;
      });
    },

    ingredient_ids: (state) => {
      const ingredientIds = [];

      state.recipes.forEach(recipe => {
        recipe.versions.forEach(version => {
          version.ingredients.forEach(header => {
            header.ingredients.forEach(ingredient => {
              ingredientIds.push(ingredient.id);
            });
          });
        });
      });

      return ingredientIds.sort(function(a, b) {
        return a - b;
      });
    },

    note_ids: (state) => {
      const noteIds = [];

      state.recipes.forEach(recipe => {
        recipe.versions.forEach(version => {
          version.notes.forEach(note => {
            noteIds.push(note.id);
          });
        });
      });

      return noteIds.sort(function(a, b) {
        return a - b;
      });
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
