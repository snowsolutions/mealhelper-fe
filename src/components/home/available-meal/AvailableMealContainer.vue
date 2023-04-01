<script setup lang="ts">
import MealList from './MealList.vue'
import BoxTitle from '@/components/shared/BoxTitle.vue'
</script>

<template>
    <div class="container">
        <BoxTitle>
            {{ 'Available meal list' }}
        </BoxTitle>
        <MealList></MealList>
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
}

@media screen and (max-width: 480px) {
    .container {
        border-radius: 0;
        box-shadow: none;
        padding: 15px 30px;
        height: 430px;
    }
}
</style>
