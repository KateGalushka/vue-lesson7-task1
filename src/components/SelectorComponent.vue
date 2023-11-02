<template>
	<div>
		<label for="rating">Система оцінювання</label>
		<select v-model="currentRating" name="rating" id="rating">
			<option value="12">12</option>
			<option value="5">5</option>
		</select>

		<label for="category">Категорія</label>
		<select v-model="currentCategory" name="category" id="category">
			<option 
				v-for="category in categoriesList"
				:key="category.id"
				:value="category.title">
				{{ category.title }}
			</option>
		</select>

		<button @click="onClearCategoryVal">Очистити категорію</button>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

	export default {
		name: 'SelectorComponent',
		
		computed: {
			...mapGetters(['categoriesList', 'currentCategoryVal', 'currentRating']),

			currentCategory: {
				get(){
					return this.currentCategoryVal
				},
				set(newVal){
					this.updateCategoryVal(newVal);
				}
			},
			currentRating: {
				get(){
					return this.currentRating
				},
				set(newVal){
					this.updateRatingVal(newVal);
				}
			}
		},
		methods: {
			...mapActions(['updateCategoryVal', 'updateRatingVal', 'onClearCategoryVal'])
		},
	}
</script>

<style lang="scss" scoped>
select {
	background-color: #f1f1f1;
	padding: 5px;
	margin-left: 15px;
	border-radius: 5px;
}
label{
	margin-left: 10px;
}
#rating{
	width: 50px;
}
#category{
	width: 125px;
}
button{
	margin-left: 15px;
	border-radius: 5px;
	cursor: pointer;
	&:hover{
		box-shadow: 3px 3px 2px rgb(145, 159, 163);
	}
}

</style>