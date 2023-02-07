<template>
    <div class="w-full flex justify-center items-center">
        <div v-if="storeButtons.currentStep == 1" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
            <!-- TODO: translate i18n -->
            <h1 class="font-bold text-2xl text-left w-full">Personal Info</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Please provide your name, email address, and phone number.
            </p>

            <!-- inputs section -->
            <section class="w-full">
                <Input :label="'Name'" :placeholder="'e.g Stephen King'" />
                <Input :label="'Email address'" :placeholder="'e.g theking@gmail.com'" />
                <Input :label="'Phone number'" :placeholder="'e.g +1 234 567 890'" />
            </section>
        </div>

        <div v-if="storeButtons.currentStep == 2" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Select your plan</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                You have multiples options here
            </p>
            
        </div>


        <div v-if="storeButtons.currentStep == 3" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
            
        </div>


        <div v-if="storeButtons.currentStep == 4" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">

        </div>
    </div>
</template>

<script setup>
    import {useButtonStore} from '../stores/counter'
    import Input from '../components/Input.vue';

    const storeButtons = useButtonStore()
    console.log(storeButtons.currentStep)

</script>
