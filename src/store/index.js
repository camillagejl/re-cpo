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
      // Spaghetti carbonara
      {
        id: 1,
        user_id: 1,
        created: "2021/12/21",
        versions: [
          {
            id: 1,
            title: "Spaghetti carbonara",
            date: "2021/12/21",
            images: [
              {
                id: 5,
                image_url: "10406.jpg",
                order_number: 1
              },
              {
                id: 6,
                image_url: "850x478_Klassisk-carbonara-98003715.jpg",
                order_number: 2
              }
            ],
            version_comment: `Really good base, but needs tweaking with more flavours`,
            category: 3,
            tags: [4, 9, 11],
            serving_type: 1,
            time: {
              work_time: 10,
              idle_time: 0,
              shelf_time: 5,
              shelf_time_unit: 1
            },
            nutrition: {
              calories: "454",
              protein: "23",
              carbohydrates: "55.7",
              fat: "17.4",
              salt: "0.8"
            },
            nutrition_unit: 2,
            servings: 2,
            description: "This easy pasta sauce will cook in about the same time it takes to cook some dried pasta in boiling salted water – we’re talking about quick and easy options here. These amounts serve 2 but are easy to scale up or down. Remember you want about 75g of dried pasta per person – use whatever shape you’ve got. Or, check out my super-simple method for fresh pasta, using just flour and water.",
            serving_suggestions: `Eat as a main meal`,
            storage: "In the fridge, in a closed box.",
            ingredients: [
              {
                id: 2,
                order_number: 1,
                name: null,
                ingredients: [
                  {
                    id: 6,
                    name: "Dried spaghetti",
                    amount: 150,
                    measuring_unit: 2
                  },
                  {
                    id: 7,
                    name: "Rashers of smoked streaky bacon",
                    amount: 2,
                    measuring_unit: 1
                  },
                  {
                    id: 8,
                    name: "Olive oil",
                    amount: null,
                    measuring_unit: 9
                  },
                  {
                    id: 9,
                    name: "Eggs",
                    amount: 2,
                    measuring_unit: 1
                  },
                  {
                    id: 10,
                    name: "Parmesan cheese",
                    amount: 30,
                    measuring_unit: 2
                  }
                ]
              }
            ],
            steps: [
              {
                id: 8,
                description: `Cook the pasta in a pan of boiling salted water according to the packet instructions.`,
                images: [
                  {
                    id: 4,
                    image_url: "how-to-cook-pasta-6.jpg",
                  },
                  {
                    id: 5,
                    image_url: "instant-pot-spaghetti_4.jpg",
                  },
                ]
              },
              {
                id: 9,
                description: `Slice the bacon and place in a non-stick frying pan on a medium heat with half a tablespoon of olive oil and a really good pinch of black pepper. Leave it to get super-golden and crispy, tossing occasionally, then turn off the heat.`,
                images: [
                  {
                    id: 6,
                    image_url: "k_Photo_Series_2019-11-skills-battle-bacon_2019-10-14_Kitchn87588-nonstick-skillet_Skills-Battle_Bacon.jpg",
                  }
                ]
              },
              {
                id: 10,
                description: `Meanwhile, beat the eggs in a bowl, then finely grate in the Parmesan and mix well.`,
                images: []
              },
              {
                id: 11,
                description: `Use tongs to transfer your pasta straight into the pan and toss with the bacon.`,
                images: []
              },
              {
                id: 12,
                description: `Pour the Parmesan eggs into the pan, and keep everything moving, loosening with splashes of the pasta cooking water until you have a silky sauce. Make sure the pan isn’t too hot otherwise the eggs will scramble.`,
                images: [
                  {
                    id: 7,
                    image_url: "download.jpg",
                  }
                  ]
              },
              {
                id: 13,
                description: `Plate up the pasta, and finish with an extra grating of Parmesan.`,
                images: [
                  {
                    id: 8,
                    image_url: "depositphotos_218643838-stock-photo-delicious-carbonara-pasta-frying-pan.jpg",
                  }
                  ]
              }
            ],
            notes: [
              {
                id: 3,
                date: "2021/12/21",
                note: "Needs more flavours."
              },
              {
                id: 4,
                date: "2021/12/21",
                note: "Try cooking bacon for longer."
              }
            ]
          }
        ]
      },

      // Veggie lasagna
      {
        id: 2,
        user_id: 1,
        created: "2022/01/10",
        versions: [
          {
            id: 2,
            title: "Veggie lasagna",
            date: "2022/01/10",
            images: [
              {
                id: 1,
                image_url: "veggie_lasagna.jpg",
                order_number: 1
              },
              {
                id: 2,
                image_url: "Vegetable-Lasagna-2.jpg",
                order_number: 2
              },
              {
                id: 3,
                image_url: "Vegetable-Lasagna-3.jpg",
                order_number: 3
              },
              {
                id: 4,
                image_url: "Vegetable-Lasagna-4.jpg",
                order_number: 4
              }
            ],
            version_comment: `Started out with a simple recipe, but it needs
            more herbs.`,
            category: 3,
            tags: [4, 5, 11],
            serving_type: 1,
            time: {
              work_time: 20,
              idle_time: 55,
              shelf_time: 5,
              shelf_time_unit: 1
            },
            nutrition: {
              calories: "273",
              protein: "",
              carbohydrates: "",
              fat: "",
              salt: ""
            },
            nutrition_unit: 2,
            servings: 8,
            description: "Yummy lasagna that even meat lovers will like!",
            serving_suggestions: `With a fresh, green salad and bread on the side`,
            storage: "In the fridge, or 3 months in the freezer.",
            ingredients: [
              {
                id: 1,
                order_number: 1,
                name: null,
                ingredients: [
                  {
                    id: 1,
                    name: "Olive oil",
                    amount: 2,
                    measuring_unit: 7
                  },
                  {
                    id: 2,
                    name: "Mushrooms",
                    amount: 8,
                    measuring_unit: 8
                  },
                  {
                    id: 3,
                    name: "Zucchini",
                    amount: 1,
                    measuring_unit: 1
                  },
                  {
                    id: 4,
                    name: "Ricotta cheese",
                    amount: 15,
                    measuring_unit: 8
                  },
                  {
                    id: 5,
                    name: "Marinara sauce",
                    amount: 24,
                    measuring_unit: 8
                  }
                ]
              }
            ],
            steps: [
              {
                id: 1,
                description: `Preheat oven to 400 degrees F. Spray a 9 x 13-inch baking dish with cooking spray and set aside.`,
                images: [
                  {
                    id: 1,
                    image_url: "Vegetable-Lasagna-Horizontal-1.jpg",
                    order_number: 1
                  },
                  {
                    id: 2,
                    image_url: "Vegetable-Lasagna-Horizontal-2.jpg",
                    order_number: 1
                  }
                ]
              },
              {
                id: 2,
                description: `In a large skillet or Dutch oven, heat oil over medium-high heat. Add mushrooms, zucchini, bell pepper,onion, and garlic. Cook and stir the veggies just until tender (about 3-5 minutes).`,
                images: []
              },
              {
                id: 3,
                description: `While the veggies cook, use a separate bowl to stir together egg, parsley, basil, ricotta cheese, 1 ¼ cups mozzarella, and ¼ cup Parmesan.`,
                images: []
              },
              {
                id: 4,
                description: `When the vegetables are done cooking, stir the marinara sauce into the skillet.`,
                images: []
              },
              {
                id: 5,
                description: `Spread ¼ of the marinara-vegetable sauce mixture in a thin layer in the bottom of the prepared baking dish. Top with 3 no-boil lasagna noodles (or as many as you need to cover a single layer in the dish), ⅓ of the ricotta mixture, and another ¼ of the sauce mixture.`,
                images: []
              },
              {
                id: 6,
                description: `Repeat layers two more times. Finish with remaining 1 cup of mozzarella and ¼ cup of Parmesan cheese on top. Cover with a piece of greased foil.`,
                images: []
              },
              {
                id: 7,
                description: `Bake for 35 minutes. Remove foil, and bake for another 5-10 minutes (or until heated through and cheese on top is browned). Let stand for about 10 minutes before slicing and serving.`,
                images: [
                  {
                    id: 3,
                    image_url: "Vegetable-Lasagna-4.jpg",
                    order_number: 1
                  },]
              }
            ],
            notes: [
              {
                id: 1,
                date: "2022/01/10",
                note: "Anna loved this, but would like some more cheese."
              },
              {
                id: 2,
                date: "2022/01/10",
                note: "I should try giving it some more time in the oven."
              }
            ]
          },
          {
            id: 3,
            title: "Veggie lasagna",
            date: "2022/02/02",
            images: [
              {
                id: 1,
                image_url: "veggie_lasagna.jpg",
                order_number: 1
              },
              {
                id: 2,
                image_url: "Vegetable-Lasagna-2.jpg",
                order_number: 2
              },
              {
                id: 3,
                image_url: "Vegetable-Lasagna-3.jpg",
                order_number: 3
              },
              {
                id: 4,
                image_url: "Vegetable-Lasagna-4.jpg",
                order_number: 4
              }
            ],
            version_comment: `Added more cheese, which is much better! But might need more different vegetables.`,
            category: 3,
            tags: [4, 5, 11],
            serving_type: 1,
            time: {
              work_time: 20,
              idle_time: 55,
              shelf_time: 5,
              shelf_time_unit: 1
            },
            nutrition: {
              calories: "273",
              protein: "",
              carbohydrates: "",
              fat: "",
              salt: ""
            },
            nutrition_unit: 2,
            servings: 8,
            description: "Yummy lasagna that even meat lovers will like!",
            serving_suggestions: `With a fresh, green salad and bread on the side`,
            storage: "In the fridge, or 3 months in the freezer.",
            ingredients: [
              {
                id: 1,
                order_number: 1,
                name: null,
                ingredients: [
                  {
                    id: 1,
                    name: "Olive oil",
                    amount: 2,
                    measuring_unit: 7
                  },
                  {
                    id: 2,
                    name: "Mushrooms",
                    amount: 8,
                    measuring_unit: 8
                  },
                  {
                    id: 3,
                    name: "Zucchini",
                    amount: 1,
                    measuring_unit: 1
                  },
                  {
                    id: 4,
                    name: "Ricotta cheese",
                    amount: 15,
                    measuring_unit: 8
                  },
                  {
                    id: 5,
                    name: "Marinara sauce",
                    amount: 24,
                    measuring_unit: 8
                  },
                  {
                    id: 6,
                    name: "Parmesan cheese",
                    amount: 12,
                    measuring_unit: 8
                  }
                ]
              }
            ],
            steps: [
              {
                id: 1,
                description: `Preheat oven to 400 degrees F. Spray a 9 x 13-inch baking dish with cooking spray and set aside.`,
                images: [
                  {
                    id: 1,
                    image_url: "Vegetable-Lasagna-Horizontal-1.jpg",
                    order_number: 1
                  },
                  {
                    id: 2,
                    image_url: "Vegetable-Lasagna-Horizontal-2.jpg",
                    order_number: 1
                  }
                ]
              },
              {
                id: 2,
                description: `In a large skillet or Dutch oven, heat oil over medium-high heat. Add mushrooms, zucchini, bell pepper,onion, and garlic. Cook and stir the veggies just until tender (about 3-5 minutes).`,
                images: []
              },
              {
                id: 3,
                description: `While the veggies cook, use a separate bowl to stir together egg, parsley, basil, ricotta cheese, 1 ¼ cups mozzarella, and ¼ cup Parmesan.`,
                images: []
              },
              {
                id: 4,
                description: `When the vegetables are done cooking, stir the marinara sauce into the skillet.`,
                images: []
              },
              {
                id: 5,
                description: `Spread ¼ of the marinara-vegetable sauce mixture in a thin layer in the bottom of the prepared baking dish. Top with 3 no-boil lasagna noodles (or as many as you need to cover a single layer in the dish), ⅓ of the ricotta mixture, and another ¼ of the sauce mixture.`,
                images: []
              },
              {
                id: 6,
                description: `Repeat layers two more times. Finish with remaining 1 cup of mozzarella and ¼ cup of Parmesan cheese on top. Cover with a piece of greased foil.`,
                images: []
              },
              {
                id: 7,
                description: `Bake for 35 minutes. Remove foil, and bake for another 5-10 minutes (or until heated through and cheese on top is browned). Let stand for about 10 minutes before slicing and serving.`,
                images: [
                  {
                    id: 3,
                    image_url: "Vegetable-Lasagna-4.jpg",
                    order_number: 1
                  },]
              }
            ],
            notes: [
              {
                id: 1,
                date: "2022/01/10",
                note: "Anna loved this, but would like some more cheese."
              },
              {
                id: 2,
                date: "2022/01/10",
                note: "I should try giving it some more time in the oven."
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
      },
      {
        id: 7,
        unit: "tsp"
      },
      {
        id: 8,
        unit: 'oz'
      },
      {
        id: 9,
        unit: 'tbsp'
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
    tags: [
      {
        id: 1,
        user_id: null,
        name: "Danish"
      },
      {
        id: 2,
        user_id: null,
        name: "Vegan"
      },
      {
        id: 3,
        user_id: null,
        name: "Spanish"
      },
      {
        id: 4,
        user_id: null,
        name: "Italian"
      },
      {
        id: 5,
        user_id: null,
        name: "Vegetarian"
      },
      {
        id: 6,
        user_id: null,
        name: "Meat lover"
      },
      {
        id: 7,
        user_id: null,
        name: "Weight loss"
      },
      {
        id: 8,
        user_id: null,
        name: "Keto"
      },
      {
        id: 9,
        user_id: null,
        name: "Pasta"
      },
      {
        id: 10,
        user_id: null,
        name: "5:2"
      },
      {
        id: 11,
        user_id: null,
        name: "Family favourite"
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
    sorted_tags: (state) => {
      // Sort function: https://stackoverflow.com/a/1129270;
      return state.tags.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
    },
    recipes_by_date: (state) => {
      return state.recipes.sort((a, b) => (a.versions.slice(-1)[0].date.toLowerCase() > b.versions.slice(-1)[0].date.toLowerCase()) ? 1 : ((b.versions.slice(-1)[0].date.toLowerCase() > a.versions.slice(-1)[0].date.toLowerCase()) ? -1 : 0)).reverse();
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
      state.tags.forEach(tags => {
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
      state.tags.push(payload.tag);
    },
    addNewServingType(state, payload) {
      state.serving_types.push(payload.servingType);
    },
    addNewRecipeVersion(state, payload) {
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
