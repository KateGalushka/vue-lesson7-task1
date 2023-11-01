import { createStore } from 'vuex'

import { categories } from '@/constants/categories';
import { students } from '@/constants/students';

export default createStore({
    state: {
		categories,
		students,
		categoryVal:''

	 },
    getters: {
		categoriesList:({ categories })=> categories,
		studentsList:({ students })=> students,
		currentCategoryVal: ({ categoryVal})=> categoryVal,
	 },
    mutations: {
		 updateCategory(state, val){
			state.categoryVal = val;
		 },
		 clearCategoryValue(state){
			state.categoryVal = null
		 }
	 },
    actions: {
		 updateCategoryVal({ commit}, newVal){
			commit('updateCategory', newVal)
		 },
		 onClearCategoryVal({ commit }){
			commit('clearCategoryValue')
		 }
	 },
    modules: {},
})
