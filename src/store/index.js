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
            category: "dinner",
            servingtype: "Main course",
            worktime: 20,
            downtime: 90,
            shelftime: 5,
            calories: 320,
            protein: 320,
            carbohydrates: 320,
            fat: 320,
            salt: 320,
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
            calories: 320,
            protein: 320,
            carbohydrates: 320,
            fat: 320,
            salt: 320,
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
    tags: [
      {
        id: 1,
        user_id: null,
        tag: "Danish"
      },
      {
        id: 2,
        user_id: null,
        tag: "Vegan"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
