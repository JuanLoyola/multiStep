import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useButtonStore = defineStore('buttons', () => {
	const currentStep = ref(1)

	const result = {
		name: ref(''),
		email: ref(''),
		phone: ref(''),

		plan: ref(''),

		online: ref(true),
		storage: ref(true),
		custom: ref(false)
	}

	function increment() {
		currentStep.value++
	}

	function decrement() {
		currentStep.value--
	}

	function validateCurrentStep() {
		if (currentStep.value === 1) {
			return (
				result.name.value.trim() !== '' &&
				result.email.value.trim() !== '' &&
				result.phone.value.trim() !== ''
			)
		}

		if (currentStep.value === 2) {
			return result.plan.value !== ''
		}

		return true
	}

	function nextStep() {
		if (!validateCurrentStep()) {
			return false
		}

		increment()
		return true
	}

	return {
		currentStep,
		increment,
		decrement,
		nextStep,
		validateCurrentStep,
		result
	}
})