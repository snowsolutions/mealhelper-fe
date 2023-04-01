<script setup lang="ts"></script>

<script lang="ts">
export default {
    props: {
        handleClick: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleRandomClick() {
            this.handleClick()
        }
    }
}
</script>
<template>
    <div class="circle-wrapper" @click="handleRandomClick">
        <span class="button-label">{{ "Let's go" }}</span>
    </div>
</template>

<style scoped>
.circle-wrapper {
    background-color: rgb(125, 198, 16);
    border: 1px solid rgb(88, 134, 19);
    width: 200px;
    height: 200px;
    border-radius: 100px;
    display: inline-block;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow: var(--app-box-shadow);
}

.circle-wrapper:hover {
    transition: 0.2s background-color;
    background-color: rgb(99, 152, 18);
}

.button-label {
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    line-height: 40px;
    margin: 80px auto;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
}

@media screen and (max-width: 480px) {
    .circle-wrapper {
        width: 120px;
        height: 120px;
        border-radius: 60px;
    }

    .button-label {
        font-size: 20px;
        line-height: 20px;
        margin: 50px auto;
    }
}
</style>
