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
            v-text="recipeTitle"
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
                      <td class="font-weight-bold">{{ created }}</td>
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
                      <td class="font-weight-bold">{{lastEdit }}</td>
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
                      <td class="font-weight-bold">{{ versions }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              </v-container>

              <v-container class="d-flex justify-end pt-0">
              <v-btn
                color="primary"
                plain
              >
                <v-icon left>
                  mdi-chevron-down
                </v-icon>
                View iterations
              </v-btn>
              </v-container>
            </v-col>

            <v-col cols="6"
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
                v-text="comment"
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
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: "RecipeThumbnail",
  props: {
    recipeTitle: String,
    created: String,
    lastEdit: String,
    versions: Number,
    comment: String
  }
};
</script>

<style lang="scss">
td {
  padding: 0;
}
</style>
