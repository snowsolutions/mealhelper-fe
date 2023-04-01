<script setup lang="ts">
import { defineComponent } from 'vue'
import MealData from '@/mock-data/Meal.json'
import { useMealStore } from '@/stores/MealStore.vue'
import type { Meal } from '@/types/Meal.vue'
const mealStore = useMealStore()
const tableData: Meal[] = MealData
mealStore.meal = MealData
</script>

<script lang="ts">
export default defineComponent({
    mounted() {
        console.log('mounted')
    }
})
</script>

<template>
    <el-table
        :data="tableData"
        :default-sort="{ prop: 'name', order: 'asc' }"
        style="width: 100%"
        class="meal-list-table"
    >
        <el-table-column prop="name" label="Name" sortable />
    </el-table>
</template>

<style scoped>
.meal-list-table {
    max-height: 300px;
    overflow-y: scroll;
}
@media screen and (max-width: 480px) {
    .meal-list-table {
        max-height: calc(100vh - 420px);
    }
}
</style>
