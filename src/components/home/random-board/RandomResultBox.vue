<script setup lang="ts">
import type { Meal } from '@/types/Meal.vue'
import type { PropType } from 'vue'
</script>
<script lang="ts">
export default {
    props: {
        result: Object as PropType<Meal>,
        comment: String
    }
}
</script>

<template>
    <div class="random-container">
        <div class="random-box">
            <span class="random-value">
                {{ result?.name }}
            </span>
            <div class="funny-comment">
                {{ comment }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.random-container {
    width: 100%;
}

.random-box {
    border-radius: 5px;
    border: 1px solid rgb(176, 176, 176);
    background-color: #ffffff;
    height: 100px;
    padding: 20px 10px;
    display: inline-block;
    width: 100%;
}

.random-value {
    color: black;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
}

.funny-comment {
    color: var(--app-speical-text-color);
}
</style>
