<template>
    <div class="flex flex-col justify-center items-start mb-4">
        <label for="Name">Name</label>
        <input type="text" name="Name" required label="Name" placeholder="e.g: Stephen King" class="mb-3  w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold" v-model="storeButtons.result.name">

        <label for="Email">Email address</label>
        <input type="email" name="Email" required label="Email" placeholder="e.g: theking@gmail.com" class="mb-3 w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold" v-model="storeButtons.result.email">

        <label for="Phone">Phone number </label>
        <input type="text" name="Phone" required label="Phone" placeholder="e.g: +1 234 567 890" class="w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold" v-model="storeButtons.result.phone">
    </div>
</template>

<script>
    import {useButtonStore} from '../stores/counter'

    export default {
        name: 'Inputs',
        setup() {
            const storeButtons = useButtonStore()

            return {
                storeButtons
            }
        },
    }
</script>
