<script setup lang="ts">
import AvailableMealContainer from '@/components/home/available-meal/AvailableMealContainer.vue'
import RandomBoardContainer from '@/components/home/random-board/RandomBoardContainer.vue'
</script>

<template>
    <main>
        <el-row :gutter="10">
            <el-col :lg="12" :xs="24">
                <RandomBoardContainer></RandomBoardContainer>
            </el-col>
            <el-col :lg="12" :xs="24">
                <AvailableMealContainer></AvailableMealContainer>
            </el-col>
        </el-row>
    </main>
</template>
<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>
