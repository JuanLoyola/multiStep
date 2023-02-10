import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useButtonStore = defineStore('buttons', () => {
  	const currentStep = ref(1)

	const result = {
		// form
		name: ref(''),
		email: ref(''),
		phone: ref(''),

		// plan
		plan: ref(''),

		// add-ons
		online: ref(true),
		storage: ref(true),
		custom: ref(false),
	}

	// steps counter
  	function increment() {
		currentStep.value++
  	}

	function decrement() {
		currentStep.value--
	}

  	return { currentStep, increment, decrement, result }
})