<template>
    <v-textarea
      v-model="note.note"
      :label="note.date"
      placeholder="Write a private note..."
      outlined
      :readonly="readOnly"
      hide-details
      rows="3"
      auto-grow
      class="mb-6"
      :class="readOnly ? 'disabled' : ''"
      ref="noteInput"
      @focusout="focusOut"
    >
      <v-btn
        icon
        color="primary"
        slot="append"
        @click="toggle"
      >
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>

      <v-btn
        icon
        color="secondary"
        slot="append"
        @click="deleteNote"
      >
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-textarea>
</template>

<script>

export default {
  name: "Note",
  data: () => ({
    readOnly: true
  }),
  props: {
    note: Object
  },
  methods: {
    toggle() {
      this.readOnly = !this.readOnly;
      this.$refs.noteInput.focus();
    },
    focusOut() {
      if (this.note.note !== null) this.readOnly = true
    },
    deleteNote() {
      this.note.note = null;
    }
  },
  mounted() {
    if (this.note.note === null) {
      this.readOnly = false;
    }
  }
};
</script>

<style lang="scss">

.disabled {
  opacity: 70%;
}

</style>