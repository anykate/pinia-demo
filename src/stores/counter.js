import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountStore = defineStore('count', () => {
	const count = ref(0)
	const name = ref('Aniket')
	const items = ref(['Django'])

	const doubleCount = computed(() => count.value * 2)

	const incrementCount = () => {
		count.value++
	}

	return {
		count,
		name,
		items,
		doubleCount,
		incrementCount,
	}
})
