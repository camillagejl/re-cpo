<template>

  <h5 class="subtitle-1 d-flex align-center mt-6 mb-2">
    <v-icon
      class="pr-2"
    >
      {{ icon }}
    </v-icon>
    {{ text }}
  </h5>

</template>

<script>

export default {
  name: "IconHeader",
  props: {
    icon: String,
    text: String
  }
};
</script>

<style lang="scss">

</style>
