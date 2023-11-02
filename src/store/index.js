import { createStore } from 'vuex'

import { categories } from '@/constants/categories';
import { students } from '@/constants/students';

export default createStore({
    state: {
		categories,
		students,
		categoryVal:'',
		rating: 12

	 },
    getters: {
		categoriesList:({ categories })=> categories,
		studentsList:({ students })=> students,
		currentCategoryVal: ({ categoryVal})=> categoryVal,
		currentRating: ({ rating }) => rating
	 },
    mutations: {
		 updateCategory(state, val){
			state.categoryVal = val;
		 },
		 clearCategoryValue(state){
			state.categoryVal = null;
		 },
		 updateRating(state, val){
			state.rating = val;
			console.log(state.rating);
		 }
	 },
    actions: {
		 updateCategoryVal({ commit}, newVal){
			commit('updateCategory', newVal)
		 },
		 onClearCategoryVal({ commit }){
			commit('clearCategoryValue')
		 },
		 updateRatingVal({ commit }, newVal){
			 commit('updateRating', newVal)
		 }
	 },
    modules: {},
})
