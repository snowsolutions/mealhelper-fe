<script setup lang="ts">
import RandomButton from './RandomButton.vue'
import RandomResultBox from './RandomResultBox.vue'
import MealRandomService from '@/services/MealRandomService.vue'
import type { Meal } from '@/types/Meal.vue'
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            meal: {
                name: 'Undecided yet',
                last_picked_date: '2023-02-20'
            } as Meal,
            comment: 'Initial comment'
        }
    },
    methods: {
        randomMeal() {
            const { result, comment } = MealRandomService.execute()
            this.meal = result
            this.comment = comment
        }
    }
})
</script>

<template>
    <div class="container">
        <RandomResultBox :result="meal" :comment="comment" />
        <RandomButton :handleClick="randomMeal" :class="'randomButtom'" />
    </div>
</template>

<style scoped>
.title {
    color: white;
}

.container {
    background-color: var(--app-background);
    padding: 30px;
    width: 100%;
    height: 430px;
    border-radius: 5px;
    box-shadow: var(--app-box-shadow);
    text-align: center;
}

.randomButtom {
    margin-top: 30px;
}

@media screen and (max-width: 480px) {
    .container {
        border-radius: 0;
        box-shadow: none;
        height: 300px;
        padding: 30px 30px 15px 30px;
    }
}
</style>
