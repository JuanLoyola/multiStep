<template>
    <div class="h-52 w-full max-w-lg relative top-12 flex justify-center items-center z-10">
        <img class="h-full w-full object-cover" src="../assets/images/abstract.jpg" alt="image banner">
        <span class="w-full max-w-xs absolute top-30 left-[6em] right-0 flex justify-around items-center">
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white" :class="storeButtons.currentStep == 1 ? 'bg-indigo-500 ': 'border'">1</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white" :class="storeButtons.currentStep == 2 ? 'bg-indigo-500 ': 'border'">2</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white" :class="storeButtons.currentStep == 3 ? 'bg-indigo-500 ': 'border'">3</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white" :class="storeButtons.currentStep == 4 ? 'bg-indigo-500 ': 'border'">4</p>
        </span>
    </div>
</template>

<script setup>
import {useButtonStore} from '../stores/counter'

const storeButtons = useButtonStore()

</script>
