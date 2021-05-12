import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

const LS = {
  load(){
    return JSON.parse(localStorage.getItem('drink-something') || '[]')
  },
  save(data){
    localStorage.setItem('drink-something', JSON.stringify(data))
  }
}

const sort_func = {
  sortName(orders){
    function compare(a, b) {
      if (a.drinkname < b.drinkname)
        return -1;
      if (a.drinkname > b.drinkname)
        return 1;
      return 0;
    }
    return orders.sort(compare)
  },
  sortPrice(orders){
    function compare(a, b) {
      if (a.price < b.price)
        return -1;
      if (a.price > b.price)
        return 1;
      return 0;
    }
    return orders.sort(compare)
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    orders: [
      {drinkname: 'aubble tea', price: 60, note: 'no sugar'},
      {drinkname: 'green tea', price: 30, note: 'no ice'},
      {drinkname: 'black tea', price: 35, note: 'half ice'},
    ],
    chooseIndex: 0,
    sortBy: 0
  },
  getters: {
    orderIndex(state) {
      return state.orders.map(order => state.orders.indexOf(order))
    }
  },
  mutations: {
    SET_ORDERS(state, data){
      state.orders = data
      // save local storage
      LS.save(state.orders)
    },
    ADD_ORDER(state, data){
      state.orders.push(data)
      LS.save(state.orders)
    },
    UPDATE_ORDER(state, {index, data}){
      // todo: modify!
      state.orders[index] = data
      LS.save(state.orders)
    },
    DELETE_ORDER(state, index){
      state.orders.splice(index, 1)
      LS.save(state.orders)
    },
    UPDATE_CHOOSEINDEX(state, chooseIndex){
      state.chooseIndex = chooseIndex
    },
    UPDATE_SORTBY(state, sortBy){
      state.sortBy = sortBy
    },
  },
  actions: {
    INIT_ORDERS({commit}){
      // load local storage
      if(this.state.sortBy == 1){
        commit('SET_ORDERS', sort_func.sortName(LS.load()))
      }else if(this.state.sortBy == 2){
        commit('SET_ORDERS', sort_func.sortName(LS.load()).reverse())
      }else if(this.state.sortBy == 3){
        commit('SET_ORDERS', sort_func.sortPrice(LS.load()))
      }else if(this.state.sortBy == 4){
        commit('SET_ORDERS', sort_func.sortPrice(LS.load()).reverse())
      }else{
        commit('SET_ORDERS', LS.load())
      }
    }
  },
  modules: {
  }
})
