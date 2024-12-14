<script setup>
import { useCountStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCountStore()

const { count, name, items, doubleCount } = storeToRefs(store)
const { incrementCount } = store
</script>
<template>
	<div>
		BComponent
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
