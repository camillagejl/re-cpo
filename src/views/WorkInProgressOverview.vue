<template>
  <v-container>
    <v-breadcrumbs
      divider=">"
    ></v-breadcrumbs>
    <h1 class="display-1">
      Work in progress loaded!
    </h1>

      <v-container>
        <v-row dense>
              <RecipeThumbnail/>
              <RecipeThumbnail/>

          <!--        <v-col-->
          <!--          v-for="(item, i) in items"-->
          <!--          :key="i"-->
          <!--          cols="12"-->
          <!--        >-->

        </v-row>
      </v-container>

  </v-container>
</template>

<script>

import RecipeThumbnail from "../components/RecipeThumbnail";
export default {
  name: "WorkInProgressOverview",
  components: {
    RecipeThumbnail
  },
};
</script>
