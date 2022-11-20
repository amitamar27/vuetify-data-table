import Vue from 'vue'
import Vuex from 'vuex'
import {productsService} from '../service/products-service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products
    }
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    }
  },
  actions: {
    loadProducts({ commit }) {
      productsService.getProducts()
        .then(products => {
          commit({type:'setProducts' , products})
        })
    }
  },
  modules: {
  }
})
