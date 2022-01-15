<template>
  <v-container>
    <v-form v-model="valid">

      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"
      ></v-breadcrumbs>

      <h1 class="text-h4">
        Veggie lasagna
      </h1>

      <v-container>

        <v-expansion-panels
          v-model="panel"
          multiple
        >

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Recipe information
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>

                <v-col cols="4">
                  <v-combobox
                    v-model="category"
                    label="Category"
                    :items="categoryNames"
                    outlined
                  ></v-combobox>
                </v-col>

                <v-col cols="4">
                  <v-combobox
                    v-model="tags"
                    label="Tags"
                    :items="tagNames"
                    outlined
                    chips
                    multiple
                    small-chips
                  ></v-combobox>
                </v-col>

                <v-col cols="4">
                  <v-combobox
                    v-model="servingType"
                    label="Serving type"
                    :items="servingTypeNames"
                    outlined
                  ></v-combobox>
                </v-col>

              </v-row>

              <v-row>
                <v-col cols="5">

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Work time'"
                    ></IconHeader>

                    <v-container class="d-flex align-center">
                      <p class="mx-3 mb-0">
                        -
                      </p>

                      <v-text-field
                        v-model="workHours"
                        style="width: 10%"
                        outlined
                        dense
                        type="number"
                        min="0"
                        hide-details
                      >
                      </v-text-field>

                      <p class="mx-3 mb-0">
                        + hours
                      </p>

                      <p class="mx-3 mb-0">
                        -
                      </p>

                      <v-text-field
                        v-model="workMinutes"
                        style="width: 10%"
                        outlined
                        dense
                        type="number"
                        min="0"
                        oninput="if (this.value < 0) this.value = 0"
                        hide-details
                      >
                      </v-text-field>

                      <p class="mx-3 mb-0">
                        + minutes
                      </p>

                    </v-container>
                  </v-container>

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Idle time'"
                    ></IconHeader>

                    <v-container class="d-flex align-center">
                      <p class="mx-3 mb-0">
                        -
                      </p>

                      <v-text-field
                        v-model="idleHours"
                        style="width: 10%"
                        outlined
                        dense
                        type="number"
                        min="0"
                        hide-details
                      >
                      </v-text-field>

                      <p class="mx-3 mb-0">
                        + hours
                      </p>

                      <p class="mx-3 mb-0">
                        -
                      </p>

                      <v-text-field
                        v-model="idleMinutes"
                        style="width: 10%"
                        outlined
                        dense
                        type="number"
                        min="0"
                        oninput="if (this.value < 0) this.value = 0"
                        hide-details
                      >
                      </v-text-field>

                      <p class="mx-3 mb-0">
                        + minutes
                      </p>

                    </v-container>
                  </v-container>

                  <v-container class="pa-0">
                    <IconHeader
                      :icon="'mdi-clock-outline'"
                      :text="'Overall time'"
                    ></IconHeader>

                    {{ overallTime }} timetime

                  </v-container>


                </v-col>
              </v-row>

            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Recipe
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-h5">
                Private notes
              </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-container>

    </v-form>
  </v-container>
</template>

<script>

import { mapState } from "vuex";
import IconHeader from "../components/IconHeader";

export default {
  name: "EditRecipe",
  components: { IconHeader },
  data: () => ({
    panel: [0],

    valid: false,
    category: null,
    tags: [],
    servingType: null,

    workHours: 0,
    workMinutes: 20,
    idleHours: 1,
    idleMinutes: 30,

    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Work in progress",
        disabled: false,
        href: "/wip-overview"
      },
      {
        text: "",
        disabled: true,
        href: ""
      }
    ]
  }),
  computed: {
    ...mapState([
      "categories",
      "recipeTags",
      "servingTypes"
    ]),
    categoryNames() {
      let categories = [];

      this.categories.forEach(category => {
        categories.push(category.name);
      });

      return categories;
    },
    tagNames() {
      let tags = [];

      this.recipeTags.forEach(tag => {
        tags.push(tag.name);
      });

      return tags;
    },
    servingTypeNames() {
      let servingTypes = [];

      this.servingTypes.forEach(servingType => {
        servingTypes.push(servingType.name);
      });

      return servingTypes;
    },
    overallTime() {
      const totalWorkMinutes = parseInt(this.workHours) * 60 + parseInt(this.workMinutes);
      const totalIdleMinutes = parseInt(this.idleHours) * 60 + parseInt(this.idleMinutes);

      const totalMinutes = (totalWorkMinutes + totalIdleMinutes) / 60;
      const actualHours = Math.floor(totalMinutes);
      const actualMinutes = Math.round(60 * (((totalWorkMinutes + totalIdleMinutes) / 60) - actualHours));

      return `${actualHours} hours ${actualMinutes} minutes`;
    }
  }
};
</script>