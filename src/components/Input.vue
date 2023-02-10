<template>
    <div class="flex flex-col justify-center items-start mb-4">
        <label for="Name">Name</label>
        <input
            v-model="storeButtons.result.name"
            type="text" name="Name" required label="Name" placeholder="e.g: Stephen King"
            class="mb-3 w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold"
        />

        <label for="Email">Email address</label>
        <input
            v-model="storeButtons.result.email"
            type="email" name="Email" required label="Email" placeholder="e.g: theking@gmail.com"
            class="mb-3 w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold"
        />

        <label for="Phone">Phone number </label>
        <input
            v-model="storeButtons.result.phone"
            type="text" name="Phone" required label="Phone" placeholder="e.g: +1 234 567 890"
            class="w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold"
        />
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
