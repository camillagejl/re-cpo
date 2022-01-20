<template>
  <v-btn
    :color="color"
    :plain="plain"
    :elevation="plain ? 0 : 2"
    :class="!dense ? 'pr-4' : 'pa-0'"
    :block="block"
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
    block: Boolean,
    dense: Boolean,
    to: String
  }
};
</script>