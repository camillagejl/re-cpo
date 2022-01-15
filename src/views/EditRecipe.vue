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
                <v-col cols="4">
                  <IconHeader
                    :icon="'mdi-clock-outline'"
                    :text="'Work time'"
                    ></IconHeader>

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
    }
  }
};
</script>