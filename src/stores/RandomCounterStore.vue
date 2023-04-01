<script lang="ts">
import { defineStore } from 'pinia'

export const useRandomCounterStore = defineStore({
    id: 'random_counter',
    state: () => {
        return {
            count: 0 as number
        }
    },
    getters: {},
    actions: {
        increment() {
            this.count++
        }
    }
})
</script>
