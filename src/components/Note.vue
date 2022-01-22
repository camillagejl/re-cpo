<template>
  <v-textarea
    v-model="note.note"
    :label="note.date"
    placeholder="Write a private note..."
    outlined
    hide-details
    rows="3"
    auto-grow
    class="pb-3"
  >
  </v-textarea>
</template>

<script>

export default {
  name: "Note",
  props: {
    note: Object
  },
};
</script>