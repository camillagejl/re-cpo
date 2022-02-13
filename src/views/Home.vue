<template>
  <v-container>
    <v-breadcrumbs
    :items="breadcrumbs"
    ></v-breadcrumbs>
    <h1 class="text-h4 mb-8">
      Welcome, John!
    </h1>
    <router-link
      :to="{name: 'WorkInProgressOverview'}"
    >
    Go to your Work in progress
    </router-link>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: 'Home',
        disabled: true,
        to: '',
      },
    ],
  })
};
</script>
