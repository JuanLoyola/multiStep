import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useButtonStore = defineStore('buttons', () => {
  	const currentStep = ref(1)

	const result = {
		name: '',
		email: ref(''),
		phone: ref(''),
		arcade: ref(false),
		advanced: ref(false),
		pro: ref(false),
		online: ref(true),
		largerStorage: ref(true),
		custom: ref(false),
	}

  	function increment() {
		currentStep.value++
  	}

	function decrement() {
		currentStep.value--
	}

  	return { currentStep, increment, decrement, result }
})