<script setup lang="ts"></script>
<template>
    <div class="box-title">
        <h2>
            <slot />
        </h2>
    </div>
</template>
<style scoped>
.box-title {
    background-color: white;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px 0;
}
h2 {
    font-size: 15px;
    font-weight: bold;
    text-align: left;
}
</style>
