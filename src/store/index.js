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
            images: [
              {
                id: 10,
                image_url: "veggie_lasagna.jpg",
                order_number: 1
              },
              {
                id: 4,
                image_url: "placeholder_add.png",
                order_number: 10
              },
              {
                id: 1,
                image_url: "veggie_lasagna.jpg",
                order_number: 3
              },
              {
                id: 2,
                image_url: "tapas.jpg",
                order_number: 2
              },
              {
                id: 3,
                image_url: "re-cpo-full.png",
                order_number: 4
              },
              {
                id: 5,
                image_url: "veggie_lasagna.jpg",
                order_number: 5
              },
              {
                id: 6,
                image_url: "veggie_lasagna.jpg",
                order_number: 6
              },
              {
                id: 7,
                image_url: "veggie_lasagna.jpg",
                order_number: 7
              },
              {
                id: 8,
                image_url: "veggie_lasagna.jpg",
                order_number: 8
              },
              {
                id: 9,
                image_url: "veggie_lasagna.jpg",
                order_number: 9
              }
            ],
            version_comment: `Removed the courgette because it got too soft
            compared to the other ingredients. Also tested on Mona.`,
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
              protein: "11",
              carbohydrates: "5",
              fat: "21",
              salt: "0.6"
            },
            nutrition_unit: 2,
            servings: 4,
            description: "I'm a lasagna",
            serving_suggestions: "Eat me",
            storage: "In the fridge, please",
            ingredients: [
              {
                id: 3,
                order_number: 1,
                name: null,
                ingredients: [
                  {
                    id: 1,
                    order_number: 1,
                    name: "Carrots",
                    amount: 300,
                    measuring_unit: 2
                  },
                  {
                    id: 4,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    measuring_unit: 1
                  }
                ]
              },
              {
                id: 2,
                order_number: 2,
                name: "Sauce",
                ingredients: [
                  {
                    id: 3,
                    order_number: 1,
                    name: "Cauliflower",
                    amount: 300,
                    measuring_unit: 2
                  },
                  {
                    id: 4,
                    order_number: 2,
                    name: "Water",
                    amount: 2,
                    measuring_unit: 1
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
                    image_url: "veggie_lasagna.jpg",
                    order_number: 1
                  },
                  {
                    id: 2,
                    image_url: "veggie_lasagna.jpg",
                    order_number: 2
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
    measuring_units: [
      {
        id: 1,
        unit: "pcs"
      },
      {
        id: 2,
        unit: "g"
      },
      {
        id: 3,
        unit: "kg"
      },
      {
        id: 4,
        unit: "ml"
      },
      {
        id: 5,
        unit: "dl"
      },
      {
        id: 6,
        unit: "l"
      }
    ],
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
      return state.categories.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
    },
    sorted_serving_types: (state) => {
      // Sort function: https://stackoverflow.com/a/1129270;
      return state.serving_types.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
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
  },
  mutations: {
    addNewCategory(state, payload) {
      state.categories.push(payload.category);
    },
    addNewTag(state, payload) {
      state.recipe_tags.push(payload.tag);
    },
    addNewServingType(state, payload) {
      state.serving_types.push(payload.servingType);
    },
    addNewRecipeVersion(state, payload) {
      console.log("adding");

      let added = false;

      state.recipes.forEach(recipe => {
        if (recipe.id === payload.recipeId) {
          recipe.versions.push(payload.recipeVersion);
          added = true;
        }
      })

      if (!added) {
        state.recipes.push({
          id: payload.recipeId,
          user_id: payload.userId,
          created: payload.recipeVersion.date,
          versions: [
            payload.recipeVersion
          ]
        })
      }
    }
  },
  actions: {},
  modules: {}
});
