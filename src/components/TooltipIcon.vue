<template>
  <v-tooltip top>
    <template
      v-slot:activator="{ on, attrs }">
      <p
        :class="['mb-0', icon === 'drag' ? 'mx-3' : '']"
        v-bind="attrs"
        v-on="on"
        @click="clicked = true"
      >
        <slot></slot>
      </p>
    </template>
    <span
      v-if="!clicked"
    >
          {{ unclickedTooltip }}
        </span>
    <span
      v-if="clicked"
    >
          {{ clickedTooltip }}
        </span>
  </v-tooltip>
</template>

<script>

export default {
  name: "TooltipIcon",
  data: () => ({
    clicked: false
  }),
  props: {
    unclickedTooltip: String,
    clickedTooltip: String,
    icon: String
  }
};
</script>