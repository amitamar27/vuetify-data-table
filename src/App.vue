<template>
  <v-app>
    <v-main>
      <products/>
    </v-main>
  </v-app>
</template>

<script>
import products from '@/components/products.vue'

export default {
  name: 'App',

  components: {
    products,
  },

  data: () => ({
    //
  }),
};
</script>
