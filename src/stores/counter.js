import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useButtonStore = defineStore('buttons', () => {
  	const currentStep = ref(1)

  	function increment() {
  	  currentStep.value++
  	}

	function decrement() {
		currentStep.value--
	}

  	return { currentStep, increment, decrement }
})
// import { defineStore } from 'pinia'

// export const useButtonStore = defineStore({
//     id: 'buttons',
//     state: () => {
//         currentStep: 1
//     },

//     actions: {
//         nextStep() {
//             this.currentStep++
//         },
//         backStep() {
//             if(this.currentStep > 1) this.currentStep--
//         }
//     }
// })