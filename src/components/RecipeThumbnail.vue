<template>
  <v-col cols="12">
    <v-card>
      <div class="d-flex flex-nowrap">
        <v-avatar
          class="ma-3"
          size="250"
          tile
        >
          <v-img :src="'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Vegetable-Lasagna_exps21267_TH143191D11__12_5b_RMS.jpg'"></v-img>
        </v-avatar>

        <div>
          <v-card-title
            class="text-h5"
            v-text="'This title'"
          ></v-card-title>

          <v-row>
            <v-col cols="6">
              <v-simple-table dense>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </td>
                      <td>Created:</td>
                      <td>21/11/04</td>
                    </tr>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                      </td>
                      <td>Last edited:</td>
                      <td>21/12/01</td>
                    </tr>
                    <tr>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                      </td>
                      <td>Versions:</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>

            <v-col cols="6">
                <v-card-text class="pt-0"
                  v-text="`
              Last changes: +200 g carrots, +250 ml water, -100 tomatoes,
              -1 courgette
              `"
                ></v-card-text>
                <v-card-text class="pt-0"
                  v-text="`
              Comment: Removed the courgette because it got too soft
              compared to the other ...
              `"
                ></v-card-text>
            </v-col>

          </v-row>

          <v-card-actions>
            <v-btn text>
              Go to recipe
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: "RecipeThumbnail"
};
</script>

<style lang="scss">
td {
  padding: 0;
}
</style>
