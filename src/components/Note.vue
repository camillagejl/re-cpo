<template>
  <v-container class="pa-0 mb-3">
    <v-textarea
      v-model="note.note"
      :label="note.date"
      placeholder="Write a private note..."
      outlined
      :readonly="readOnly"
      hide-details
      rows="3"
      auto-grow
      :class="readOnly ? 'disabled' : ''"
    >
    </v-textarea>

    <v-btn
    @click="readOnly = !readOnly"
    >
      Enable!
    </v-btn>

  </v-container>
</template>

<script>

export default {
  name: "Note",
  data: () => ({
    readOnly: true
  }),
  props: {
    note: Object
  }
};
</script>

<style lang="scss">

.disabled {
  opacity: 70%;
}

</style>