<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products.records"
      item-key="name"
      class="elevation-1"
      :loading="isLoading"
    >
      <template v-slot:item.num="{ index }">
        {{ index + 1 }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      search: "",
      headers: [
        { text: "", value: "num", sortable: false },
        {
          text: "Year",
          align: "start",
          filterable: true,
          value: "fields.year",
        },
        { text: "Item", value: "fields.item" },
        { text: "Element", value: "fields.element" },
        { text: "Value", value: "fields.value" },
        { text: "Unit", value: "fields.unit" },
        { text: "Area Code", value: "fields.area_code" },
        { text: "Area", value: "fields.area" },
      ],
      isLoading: true,
    };
  },
  created() {
    this.$store.dispatch("loadProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  updated() {
    this.isLoading = false;
  },
};
</script>
