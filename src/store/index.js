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
            title: "Veggie lasagna",
            date: "2022/01/13",
            comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: "Dinner",
            tags: ["Danish", "Vegan"],
            serving_type: "Main course",
            work_time: 20,
            idle_time: 90,
            shelf_time: 5,
            calories: "320",
            protein: "15",
            carbohydrates: "17",
            fat: "3",
            salt: "0.8",
            nutrition_unit: "Per 100 g",
            servings: 4,
            description: "I'm a lasagna",
            serving_suggestions: "Eat me",
            storage: "In the fridge, please",
            ingredients: {
              no_header: {
                order: 1,
                ingredients: [
                  {
                    id: 1,
                    order_number: 1,
                    name: "Carrots",
                    amount: 300,
                    unit_id: 2
                  },
                  {
                    id: 2,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              }
            },
            steps: [
              {
                id: 1,
                order_number: 1,
                description: "Peel the carrots.",
                images: [
                  {
                    id: 1,
                    image_url: "url1"
                  },
                  {
                    id: 2,
                    image_url: "url2"
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
          },
          {
            id: 2,
            title: "Veggie lasagnette",
            date: "2022/01/15",
            image: 'veggie_lasagna.jpg',
            comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: "Dinner",
            servingtype: "Main course",
            worktime: 20,
            downtime: 90,
            shelftime: 5,
            calories: "320",
            protein: "320",
            carbohydrates: "320",
            fat: "320",
            salt: "320",
            nutrition_unit: "serving",
            servings: 4,
            description: "I'm a lasagna",
            servingsuggestion: "Eat me",
            storage: "In the fridge, please",
            ingredients: {
              no_header: {
                order: 1,
                ingredients: [
                  {
                    id: 1,
                    order_number: 1,
                    name: "Carrots",
                    amount: 300,
                    unit_id: 2
                  },
                  {
                    id: 2,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              }
            },
            steps: [
              {
                id: 1,
                order_number: 1,
                description: "Peel the carrots.",
                images: [
                  {
                    id: 1,
                    image_url: "url1"
                  },
                  {
                    id: 2,
                    image_url: "url2"
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
        unit: null
      },
      {
        id: 2,
        unit: "g"
      }
    ],
    categories: [
      {
        id: 1,
        user_id: null,
        name: "Dinner"
      },
      {
        id: 2,
        user_id: null,
        name: "Lunch"
      },
      {
        id: 3,
        user_id: null,
        name: "Breakfast"
      }
    ],
    recipeTags: [
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
    servingTypes: [
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
    nutritionUnits: [
      {
        id: 1,
        user_id: null,
        name: "Per 100 g"
      },
      {
        id: 2,
        user_id: null,
        name: "Per serving"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
