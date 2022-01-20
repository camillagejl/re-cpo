<template>
  <v-btn
    color="primary"
    elevation="2"
    class="pr-4"
    :to="to"
    @click="$emit('clickEvent')"
  >
    <v-icon>
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>

export default {
  name: "IconButton",
  props: {
    icon: String,
    text: String,
    to: String
  }
};
</script>