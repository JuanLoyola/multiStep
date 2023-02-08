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
            <section id="plan" class="w-full max-w-md flex flex-col gap-y-5 justify-center items-center">
                <div class="w-full max-w-sm border border-indigo-500 flex justify-start items-center text-left" v-for="plan in plan" :key="plan">
                    <img :src="plan.img" :alt="plan.title">
                    <div class="ml-5 flex flex-col justify-start items-start">
                        <h3 class="font-bold">{{plan.title}}</h3>
                        <p class="font-light">{{plan.price}}</p>
                    </div>
                </div>
            </section>
        </div>


        <div v-if="storeButtons.currentStep == 3" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Pick add-ons</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Add-ons help enhance your gaming experience.
            </p>
        </div>


        <div v-if="storeButtons.currentStep == 4" class="w-full h-[29em] max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Finishing up</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Double-check everything looks OK before confirming.
            </p>
        </div>
    </div>
</template>


<script>
    import { onMounted } from "vue";
    import {useButtonStore} from '../stores/counter'
    import Input from '../components/Input.vue';

    export default {
        name: 'ContentCard',

        setup() {
            const storeButtons = useButtonStore()
            const plan = [
                {
                    img: '../assets/images/icon-arcade.svg',
                    title: 'Arcade',
                    price: '$9/mo'
                },
                {
                    img: '../assets/images/icon-advanced.svg',
                    title: 'Advanced',
                    price: '$12/mo'
                },
                {
                    img: '../assets/images/icon-pro.svg',
                    title: 'Pro',
                    price: '$15/mo'
                }
            ]

            onMounted(() => storeButtons);

            return {
                storeButtons,
                plan
            }
        },

        components: {
            Input
        }
    }
</script>
