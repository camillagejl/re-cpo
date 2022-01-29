<template>
  <v-container
  class="pa-0 ma-0"
  >
  <v-container
    v-if="!editHeader"
    class="pl-0 pt-6 d-flex align-center"
  >
    <h5
      v-if="value !== null"
      class="subtitle-1"
    >
      {{ value }}
    </h5>

    <v-btn
      icon
      @click="editHeader = !editHeader"
    >
      <v-icon
        small
        color="secondary"
      >
        mdi-pencil
      </v-icon>
    </v-btn>
  </v-container>

    <v-row
      v-if="editHeader"
    >
      <v-col
        cols="6"
        class="pt-6"
      >
        <v-text-field
          :value="value"
          label="Header title"
          placeholder="Name your recipe..."
          outlined
          dense
          hide-details
          @focusout="editHeader = false"
          @input="$emit('input', $event)"
        >

          <v-btn
            icon
            color="primary"
            slot="append"
            class="mb-2"
            @click="editHeader = false"
          >
            <v-icon
            x-small
            >
              mdi-check
            </v-icon>
          </v-btn>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

export default {
  name: "IngredientHeader",
  data: () => ({
    editHeader: false,
  }),
  props: {
    value: String,
  }
};
</script>