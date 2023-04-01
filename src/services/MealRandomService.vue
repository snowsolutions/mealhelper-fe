<script lang="ts">
import { useMealStore } from '@/stores/MealStore.vue'
import { useRandomCounterStore } from '@/stores/RandomCounterStore.vue'
import FunnyCommentData from '@/mock-data/FunnyComment.json'
const MealRandomService = {
    execute() {
        const mealStore = useMealStore()
        const randomCounterStore = useRandomCounterStore()
        const randomResult = mealStore.meal[Math.floor(Math.random() * mealStore.meal.length)]
        randomCounterStore.increment()
        const currentCount = randomCounterStore.count

        let funnySegmentIndex = 0
        if (currentCount > 2) {
            funnySegmentIndex = 1
        }
        const funnyComments = FunnyCommentData[funnySegmentIndex]
        const funnyComment =
            funnyComments.comments[Math.floor(Math.random() * funnyComments.comments.length)]
        return { result: randomResult, comment: funnyComment }
    }
}
export default MealRandomService
</script>
