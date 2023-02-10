<template>
    <div class="w-full mt-8 flex justify-center items-center h-20" :class="storeButtons.currentStep > 1 ? 'justify-between' : 'justify-end'">
        <button
			id="go-back"
			v-if="storeButtons.currentStep > 1"
			@click="storeButtons.decrement"
			class="bg-gray-300 hover:bg-gray-400 hover:text-white px-5 py-2 rounded-md transition-all"
		>
			Go back
		</button>

        <button
			id="go-next"
			v-if="storeButtons.currentStep != 4"
			@click="storeButtons.increment"
			class="text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer px-5 py-2 rounded-md transition-all poin"
		>
			Next Step
		</button>

        <button
			id="go-next"
			v-else
			class="text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer px-5 py-2 rounded-md transition-all"
		>
			Save
		</button>
    </div>
</template>

<script>
import {useButtonStore} from '../stores/counter'

// const storeButtons = useButtonStore()
export default {
    name: 'Inputs',
    setup() {
        const storeButtons = useButtonStore()		
		// TODO: darle utilidad
		function resetInputs () {
			storeButtons.result.name = ''
			storeButtons.result.email = ''
			storeButtons.result.phone = ''
		}
        return {
            storeButtons,
			resetInputs
        }
    },
}
</script>

<style>
	#go-next:hover {
	  filter: drop-shadow(0 0 1.6em indigo);
	}
	#go-back:hover {
	  filter: drop-shadow(0 0 1.6em #42b883aa);
	}
</style>
