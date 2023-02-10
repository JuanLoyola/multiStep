<template>
    <div class="w-full flex justify-center items-center">
        <div v-if="storeButtons.currentStep == 1" class="w-full h-[29em] max-w-md lg:max-w-lg flex flex-col justify-center items-start bg-white p-6 rounded-br-md rounded-tr-md z-20">
            <!-- TODO: translate i18n -->
            <h1 class="font-bold text-2xl text-left w-full">Personal Info</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Please provide your name, email address, and phone number.
            </p>

            <!-- inputs section -->
            <section class="w-full">
                <Inputs />
            </section>
        </div>

        <div v-if="storeButtons.currentStep == 2" class="w-full h-[29em] max-w-md lg:max-w-lg flex flex-col justify-center items-start bg-white p-6 rounded-br-md rounded-tr-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Select your plan</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                You have multiples options here
            </p>
            <section id="plan" class="w-full max-w-md flex flex-col gap-y-5 justify-center items-center">
                <button
                    @click="planSelected(plan)"
                    v-for="plan in plan" :key="plan"
                    class="w-full bg-white hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 h-20 shadow max-w-sm border border-gray-300 focus:border-indigo-500 rounded-md flex justify-start items-center text-left"
                >
                    <img class="pl-5" :src="`/src/assets/images/${plan.img}`" :alt="plan.title">
                    <div class="ml-5 flex flex-col justify-start items-start">
                        <h3 class="font-bold">{{plan.title}}</h3>
                        <p class="font-light">{{plan.price}}</p>
                    </div>
                </button>
            </section>
        </div>

        <div v-if="storeButtons.currentStep == 3" class="w-full h-[29em] max-w-md lg:max-w-lg flex flex-col justify-center items-start bg-white p-6 rounded-br-md rounded-tr-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Pick add-ons</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Add-ons help enhance your gaming experience.
            </p>
            <section id="plan" class="w-full max-w-md flex flex-col gap-y-5 justify-center items-center">
                <button
                    :class="item.checked == false ? 'border-gray-300' : 'border-indigo-500'"
                    class="w-full bg-white hover:bg-gray-100 h-20 shadow max-w-sm border   rounded-md flex justify-start items-center text-left cursor-not-allowed"
                    v-for="item in addOns" :key="item"
                >
                    <input disabled type="checkbox" :checked="item.checked" :name="item.title" class="h-4 w-4 ml-5 cursor-not-allowed">
                    <div class="ml-5 flex flex-col justify-start items-start">
                        <h3 class="font-bold text-blue-600">{{item.title}}</h3>
                        <p class="font-light">{{item.info}}</p>
                    </div>
                </button>
            </section>
        </div>

        <div v-if="storeButtons.currentStep == 4" class="w-full h-[29em] max-w-md lg:max-w-lg flex flex-col justify-center items-start bg-white p-6 rounded-br-md rounded-tr-md z-20">
            <h1 class="font-bold text-2xl text-left w-full">Finishing up</h1>
            <p class="my-5 xl:font-medium text-gray-400 xl:text-lg text-left">
                Double-check everything looks OK before confirming.
            </p>
            <section class="w-full max-w-xs text-left">
                <div class="flex justify-start items-center">
                    <p class="font-bold w-[5em]">Name:</p>
                    <span class="min-w-[8em] text-center text-sm capitalize font-medium rounded-md text-blue-800 bg-blue-200 py-2 px-4">{{storeButtons.result.name}}</span>
                </div>

                <div class="flex justify-start items-center my-3">
                    <p class="font-bold w-[5em]">Email:</p>
                    <span class="min-w-[8em] text-center text-sm capitalize font-medium rounded-md text-blue-800 bg-blue-200 py-2 px-4">{{storeButtons.result.email}}</span>
                </div>

                <div class="flex justify-start items-center">
                    <p class="font-bold w-[5em]">Phone:</p>
                    <span class="min-w-[8em] text-center text-sm capitalize font-medium rounded-md text-blue-800 bg-blue-200 py-2 px-4">{{storeButtons.result.phone}}</span>
                </div>

                <div class="flex justify-start items-center my-3">
                    <p class="font-bold w-[5em]">Plan:</p>
                    <span class="min-w-[8em] text-center text-sm capitalize font-medium rounded-md text-blue-800 bg-blue-200 py-2 px-4">{{storeButtons.result.plan}}</span>
                </div>

                <div class="flex justify-start items-center my-3">
                    <p class="font-bold w-[5em]">Add-ons:</p>
                    <span class="min-w-[8em] text-center text-sm capitalize font-medium rounded-md text-blue-800 bg-blue-200 py-2 px-4">Online Services & Larger Storage</span>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
    import { onMounted } from "vue";
    import {useButtonStore} from '../stores/counter'
    import Inputs from '../components/Input.vue';

    export default {
        name: 'ContentCard',

        setup() {
            const storeButtons = useButtonStore()

            const plan = [
                {
                    img: 'icon-arcade.svg',
                    title: 'Arcade',
                    price: '$9/mo'
                },
                {
                    img: 'icon-advanced.svg',
                    title: 'Advanced',
                    price: '$12/mo'
                },
                {
                    img: 'icon-pro.svg',
                    title: 'Pro',
                    price: '$15/mo'
                }
            ]

            function planSelected(plan) {
                storeButtons.result.plan = plan.title
            }

            const addOns = [
                {
                    checked: true,
                    title: 'Online service',
                    info: 'Access to multiplayer games'
                },
                {
                    checked: true,
                    title: 'Larger storage',
                    info: 'Extra 1 TB of cloud save'
                },
                {
                    checked: false,
                    title: 'Customizable profile',
                    info: 'Custom theme on your profile'
                }
            ]

            onMounted(() => storeButtons);

            return {
                storeButtons,
                plan,
                addOns,
                planSelected
            }
        },

        components: {
            Inputs
        }
    }
</script>
