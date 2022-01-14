<template>
  <v-col cols="12">
    <v-card>
      <div class="d-flex flex-nowrap">
        <v-avatar
          class="ma-3"
          size="230"
          tile
        >
          <v-img :src="'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Vegetable-Lasagna_exps21267_TH143191D11__12_5b_RMS.jpg'"></v-img>
        </v-avatar>

        <div>
          <v-card-title
            class="text-h5"
            v-text="recipe.versions[1].title"
          ></v-card-title>

          <v-row>
            <v-col
              cols="6"
              class="d-flex flex-column justify-space-between"
            >
              <v-container class="d-flex align-start pt-0">
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>
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
                        <td>
                          <v-icon
                            color="black"
                          >
                            mdi-pencil
                          </v-icon>
                        </td>
                        <td>Last edited:</td>
                        <td class="font-weight-bold">{{ recipe.versions[1].date }}</td>
                      </tr>
                      <tr>
                        <td>

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

              <v-container class="d-flex justify-end pt-0">
                <v-btn
                  color="primary"
                  plain
                  @click="showIterations = !showIterations"
                >
                  <v-icon left>
                    {{ showIterations ? "mdi-chevron-up" : "mdi-chevron-down" }}
                  </v-icon>
                  View iterations
                </v-btn>
              </v-container>
            </v-col>

            <v-spacer></v-spacer>

            <v-col
              cols="6"
              class="d-flex flex-column justify-space-between align-end"
            >
              <v-card-text
                class="pt-0"
                v-text="`
              Last changes: +200 g carrots, +250 ml water, -100 tomatoes,
              -1 courgette
              `"
              ></v-card-text>

              <v-card-text
                class="pt-0"
                v-text="recipe.versions[1].comment"
              ></v-card-text>

              <v-btn
                color="primary"
                elevation="2"
              >
                <v-icon left>
                  mdi-chevron-right
                </v-icon>
                Go to recipe
              </v-btn>

            </v-col>

          </v-row>
        </div>
      </div>

      <v-expand-transition>
        <div v-show="showIterations">
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
                    Change comment
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="version in recipe.versions"
                  :key="version.id"
                >
                  <td>{{ version.title }}</td>
                  <td>{{ version.date }}</td>
                  <td>Changes...</td>
                  <td>{{ version.comment }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: "RecipeThumbnail",
  props: {
    recipe: Object
  },
  data: () => ({
    showIterations: false
  })
};
</script>

<style lang="scss">

thead {
  background-color: #9A7F6B;
}

.iteration_table tr:nth-child(even) {
  background-color: #EFE5DE;
}

</style>
