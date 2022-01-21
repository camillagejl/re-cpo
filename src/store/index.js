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
            category: 3,
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
              protein: "15",
              carbohydrates: "17",
              fat: "3",
              salt: "0.8",
              nutrition_unit: 1
            },
            servings: 4,
            description: "I'm a lasagna",
            serving_suggestions: "Eat me",
            storage: "In the fridge, please",
            ingredients: {
              no_header: {
                id: 1,
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
                    id: 2,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              },
              sauce: {
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
            },
            steps: [
              {
                id: 1,
                order_number: 1,
                description: "Peel the carrots.",
                images: []
              },
              {
                id: 2,
                order_number: 2,
                description: "boop.",
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
              },
              {
                id: 2,
                date: "2021/11/04",
                note: `This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a long, long, long note.`
              }
            ]
          },
          {
            id: 2,
            title: "Veggie lasagnette",
            date: "2022/01/15",
            image: "veggie_lasagna.jpg",
            comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: 2,
            servingtype: "Main course",
            worktime: 20,
            downtime: 90,
            shelftime: 5,
            calories: "320",
            protein: "320",
            carbohydrates: "320",
            fat: "320",
            salt: "320",
            nutrition_unit: 2,
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
      },
      {
        id: 2,
        user_id: 1,
        created: "2022/01/13",
        versions: [
          {
            id: 3,
            title: "Veggie lasagna",
            date: "2022/01/13",
            comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: 2,
            tags: [1, 2],
            serving_type: 2,
            work_time: 20,
            idle_time: 90,
            shelf_time: 5,
            shelf_time_unit: 3,
            calories: "320",
            protein: "15",
            carbohydrates: "17",
            fat: "3",
            salt: "0.8",
            nutrition_unit: 2,
            servings: 4,
            description: "I'm a lasagna",
            serving_suggestions: "Eat me",
            storage: "In the fridge, please",
            ingredients: {
              no_header: {
                id: 1,
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
                    id: 2,
                    order_number: 2,
                    name: "Tomatoes",
                    amount: 2,
                    unit_id: 1
                  }
                ]
              },
              sauce: {
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
            },
            steps: [
              {
                id: 1,
                order_number: 1,
                description: "Peel the carrots.",
                images: []
              },
              {
                id: 2,
                order_number: 2,
                description: "boop.",
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
              },
              {
                id: 2,
                date: "2021/11/04",
                note: `This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a note. This is a note. This is a note.
                This is a long, long, long note.`
              }
            ]
          },
          {
            id: 4,
            title: "Veggie lasagnette",
            date: "2022/01/15",
            image: "veggie_lasagna.jpg",
            comment: `Removed the courgette because it got too soft
            compared to the other ...`,
            category: 1,
            servingtype: "Main course",
            worktime: 20,
            downtime: 90,
            shelftime: 5,
            calories: "320",
            protein: "320",
            carbohydrates: "320",
            fat: "320",
            salt: "320",
            nutrition_unit: 1,
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
  mutations: {},
  actions: {},
  modules: {}
});
