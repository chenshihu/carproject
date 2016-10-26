import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 需要维护的状态
const state = {
  param:{},
  data:'',
  carinfo:{},
  hascar:true,
  wx:{},
  address:'',
  router:'/path'
};

const mutations = {
  // 初始化 
};

export default new Vuex.Store({
  state,
  mutations
});