<template>
  <v-btn
    :color="color"
    :plain="plain"
    :elevation="elevation"
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
    color: String,
  plain: Boolean,
    elevation: Number,
    to: String
  }
};
</script>