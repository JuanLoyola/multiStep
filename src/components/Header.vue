<template>
    <div class="h-52 w-full relative top-12 lg:h-[29em] lg:top-0 flex justify-center items-center z-10">
        <img class="h-full w-full lg:hidden object-cover" src="https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="image banner">
        <img class="hidden h-full w-full lg:inline-block object-fill rounded-tl-md rounded-bl-md" src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image banner">
        <span class="w-full max-w-lg absolute top-30 flex lg:flex-col lg:gap-y-5 justify-around items-center">
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white shadow" :class="storeButtons.currentStep == 1 ? 'bg-indigo-500 ': ' bg-indigo-200'">1</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white shadow" :class="storeButtons.currentStep == 2 ? 'bg-indigo-500 ': ' bg-indigo-200'">2</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white shadow" :class="storeButtons.currentStep == 3 ? 'bg-indigo-500 ': ' bg-indigo-200'">3</p>
            <p class="w-8 h-8 font-bold text-lg rounded-full text-white shadow" :class="storeButtons.currentStep == 4 ? 'bg-indigo-500 ': ' bg-indigo-200'">4</p>
        </span>
    </div>
</template>

<script setup>
import {useButtonStore} from '../stores/counter'

const storeButtons = useButtonStore()

</script>
