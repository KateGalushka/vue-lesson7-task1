<template>
	<h2>Список студентів</h2>
		<table>
			<tr>
				<th>ПіБ</th>
				<th>Середній бал</th>
			</tr>
			<div v-if="isListEmpty">Немає студентів</div>
			<tr v-for="student in filteredStudentsList" :key="student.id">
				<td>{{ student.name }}</td>
				<td class="student__rate">{{ student.rate }}</td>
			</tr>
		</table>
</template>

<script>
import { mapGetters } from 'vuex';

	export default {
		name: 'StudentsListComponent',

		computed: {
		...mapGetters(['studentsList', 'currentCategoryVal']),

		isListEmpty(){
			return this.filteredStudentsList.length == 0;
		},
		filteredStudentsList(){
			switch(this.currentCategoryVal) {
				case 'Відмінник':
					return this.studentsList.filter(student=> (student.rate <= 12 && student.rate >= 10));
				case 'Хорошист':
					return this.studentsList.filter(student => (student.rate < 10 && student.rate >= 7));
				case 'Трійочник':
					return this.studentsList.filter(student => (student.rate < 7 && student.rate >= 4));
				case 'Двійочник':
					return this.studentsList.filter(student => student.rate < 4);
				case 'Блатник':
					return this.studentsList.filter(student => student.rate > 12);
				default:
					return this.studentsList
			}
		}
	},
	}
</script>

<style lang="scss" scoped>
table,th,td{
	border: 1px solid #000;
	padding: 5px;
}
table{
	width: 500px;
	border-collapse: collapse;
}
tr:nth-child(even) {
  background-color:#f1f1f1;
}

</style>