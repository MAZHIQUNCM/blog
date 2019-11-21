import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**state用于存储数据 */
const state = {
    count: 1
}
//放方法，改变state里面的数据
const mutations = {
    increment (state) {
            state.count++
        }
}
//实例化Vuex.Store
const store = new Vuex.Store({
    state,
    mutations
})
export default store;