import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 需要维护的状态
const state = {
  param:{}
};

const mutations = {
  // 初始化 
  // param.token="${token}";
};

export default new Vuex.Store({
  state,
  mutations
});