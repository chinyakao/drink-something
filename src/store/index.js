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
  unsort(orders){
    return orders
  },
  nameup(orders){
    var temp = orders.slice().sort(function(a, b){
      return a.drinkname > b.drinkname;
    });

    return temp
  },
  namedown(orders){
    return this.nameup(orders).reverse()
  },
  priceup(orders){
    var temp = orders.slice().sort(function(a, b){
      return a.price - b.price;
    });
    return temp
  },
  pricedown(orders){
    return this.priceup(orders).reverse()
  },
}

export default new Vuex.Store({
  strict: true,
  state: {
    orders: [
    ],
    chooseIndex: 0,
  },
  getters: {
    orderIndex(state) {
      var new_orders = sort_func[state.route.name](state.orders)
      var new_index = state.orders.map(order => new_orders.indexOf(order))
      return new_index
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
    }
  },
  actions: {
    INIT_ORDERS({commit}){
      commit('SET_ORDERS', LS.load())
    }
  },
  modules: {
  }
})
