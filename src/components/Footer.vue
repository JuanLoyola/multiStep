<template>
    <div class="w-full max-w-md mt-8  flex items-center h-20" :class="storeButtons.currentStep > 1 ? 'justify-between' : 'justify-end'">
        <button v-if="storeButtons.currentStep > 1" @click="storeButtons.decrement" id="go-back" class="bg-gray-300 hover:bg-gray-400 hover:text-white px-5 py-2 rounded-md transition-all">Go back</button>
        <button  v-if="storeButtons.currentStep != 4" @click="storeButtons.increment" id="go-next" class="text-white bg-blue-800 hover:bg-blue-900 cursor-pointer px-5 py-2 rounded-md transition-all">Next Step</button>
        <button  v-else id="go-next" class="text-white bg-blue-800 hover:bg-blue-900 cursor-pointer px-5 py-2 rounded-md transition-all">Save</button>
    </div>
</template>

<script setup>
import {useButtonStore} from '../stores/counter'

const storeButtons = useButtonStore()

</script>

<style>
	#go-next:hover {
	  filter: drop-shadow(0 0 1.6em #646cffaa);
	}
	#go-back:hover {
	  filter: drop-shadow(0 0 1.6em #42b883aa);
	}
</style>
