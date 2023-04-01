<script lang="ts">
import type { Meal } from '@/types/Meal.vue'
import { defineStore } from 'pinia'

export const useMealStore = defineStore({
    id: 'meal',
    state: () => {
        return {
            meal: [] as Meal[]
        }
    },
    getters: {},
    actions: {}
})
</script>
