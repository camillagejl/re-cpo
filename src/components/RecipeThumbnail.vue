<template>
  <v-col cols="12">
    <v-card class="pa-6">
      <v-container class="d-flex flex-nowrap">
        <v-avatar
          class="ma-3"
          size="230"
          tile
        >
          <v-img
            v-if="latest.images.length > 0"
            :src="require('../assets/recipe_images/' + latest.images[0].image_url)"
          ></v-img>
          <v-img
            v-else
            :src="require('../assets/placeholder.png')"
          ></v-img>
        </v-avatar>

        <v-container class="pt-3 pl-0">
          <v-card-title
            class="text-h5 pa-0"
            v-text="latest.title"
          ></v-card-title>

          <v-row class="fill-height justify-end">
            <v-col
              cols="6"
              class="d-flex flex-column justify-space-between"
            >
              <v-container class="d-flex align-start pa-0">
                <v-simple-table dense class="pt-3">
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td class="pl-0">
                          <v-icon
                            color="black"
                          >
                            mdi-plus
                          </v-icon>
                        </td>
                        <td>Created:</td>
                        <td class="font-weight-bold">{{ recipe.created }}</td>
                      </tr>
                      <tr>
                        <td class="pl-0">
                          <v-icon
                            color="black"
                          >
                            mdi-pencil
                          </v-icon>
                        </td>
                        <td>Last edited:</td>
                        <td class="font-weight-bold">{{ latest.date }}</td>
                      </tr>
                      <tr>
                        <td class="pl-0">
                          <v-icon
                            color="black"
                          >
                            mdi-content-copy
                          </v-icon>
                        </td>
                        <td>Versions:</td>
                        <td class="font-weight-bold">{{ recipe.versions.length }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-container>
            </v-col>

            <v-col
              cols="6"
              class="d-flex flex-column align-end"
            >
              <v-card-text
                class="font-italic"
                v-text="`
              Last changes: will be automatically calculated later
              `"
              ></v-card-text>

              <v-card-text
                v-if="latest.version_comment"
                class="pt-0"
                v-text="'Comment: ' + latest.version_comment"
              ></v-card-text>

              <v-card-text
                v-else
                class="pt-0"
                v-text="'Comment: none'"
              ></v-card-text>
            </v-col>

            <v-card-actions
              class="d-flex justify-end d-block"
            >
              <IconButton
                :icon="showIterations ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                :text="'View iterations'"
                :color="'primary'"
                :plain="true"
                @clickEvent="showIterations = !showIterations"
              ></IconButton>

              <IconButton
                :icon="'mdi-chevron-right'"
                :text="'Go to recipe'"
                :color="'primary'"
                :to="{name: 'EditRecipe', params: {recipe: recipe.id, version: latest.id}}"
              ></IconButton>
            </v-card-actions>

          </v-row>
        </v-container>
      </v-container>

      <v-expand-transition>
        <v-container v-show="showIterations">
          <v-simple-table dense class="iteration_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-uppercase">
                    Recipe name
                  </th>
                  <th class="text-uppercase">
                    Iteration date
                  </th>
                  <th class="text-uppercase">
                    Changes
                  </th>
                  <th class="text-uppercase">
                    Iteration comment
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="version in recipe.versions"
                  :key="version.id"
                >
                  <td>{{ version.title }}</td>
                  <td>{{ version.date }}</td>
                  <td
                  class="font-italic"
                  >
                    {{ shorten('changes', 'Will be automatically calculated later') }}
                  </td>
                  <td>{{ shorten('comment', version.version_comment) }}</td>
                  <td>
                    <v-btn
                      color="primary"
                      plain
                      :to="{name: 'EditRecipe', params: {recipe: recipe.id, version: version.id}}"
                    >
                      <v-icon left>
                        mdi-chevron-right
                      </v-icon>
                      Open iteration
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

        </v-container>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>

import IconButton from "./IconButton";

export default {
  name: "RecipeThumbnail",
  components: { IconButton },
  props: {
    recipe: Object
  },
  data: () => ({
    showIterations: false
  }),
  computed: {
    latest() {
      return this.recipe.versions.slice(-1)[0];
    }
  },
  methods: {
    shorten(type, string) {
      if (string) {
        if (type === 'comment') return string.slice(0, 100) + '...'
        if (type === 'changes') return string.slice(0, 50) + '...'
      }
      else return '';
    },
    shortenTest() {
      return 'Works!'
    }
  }
};
</script>

<style lang="scss">

table {
  border: none;
}

table, th, td {
  border: none !important;
}

thead {
  background-color: var(--secondary-color);
}

th {
  color: white !important;
}

.iteration_table tr:nth-child(even) {
  background-color: var(--secondary-color-lighten-3)
}

</style>
