<template>
	<div>
		<selector-component/>
		<students-list-component/>

	</div>
</template>

<script>
import SelectorComponent from './SelectorComponent.vue';
import StudentsListComponent from './StudentsListComponent.vue'


	export default {
    name: 'StudentsManager',
    components: { SelectorComponent, StudentsListComponent }
}
</script>

<style lang="scss" scoped>

</style>