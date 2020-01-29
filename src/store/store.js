// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 1,
		selectedImg: "cueball", 
		selectedName: "Sam",
		selectedDate: "10/05/97",
		selectedHeight: 449,
	},
	mutations: {
		chooseDate (state, payload) {
			state.selectedDate = payload;
		},
		chooseName (state, payload) {
			state.selectedName = payload;
		},
		chooseChar (state, payload) {
			state.selectedImg = payload
		},
		chooseHeight (state, payload) {
			console.log(payload)
			state.selectedHeight = payload
		},
	}
})

export default store;