<script setup>
import { useCountStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCountStore()

const { count, name, items, doubleCount } = storeToRefs(store)
const { incrementCount } = store

store.count = 10 // maintains reactivity and available to all components

// Mutate state passing object
store.$patch({
	count: store.count + 100,
	name: 'Aryamane',
})

// Mutate state passing function
store.$patch((state) => {
	state.count += 101
	state.items.push('Vue3')
})
</script>
<template>
	<div>
		AComponent
		<br />
		<div>Count: {{ count }}</div>
		<div>Double Count: {{ doubleCount }}</div>
		<br />

		<button
			type="submit"
			@click="incrementCount"
		>
			Increment
		</button>

		<div>Name: {{ name }}</div>
		<div>Items: {{ items }}</div>
	</div>
</template>
