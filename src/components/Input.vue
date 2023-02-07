<template>
    <div class="flex flex-col justify-center items-start mb-4">
        <label :for="label"> {{ label }} </label>
        <input type="text" :name="label" :placeholder="placeholder" class="w-full bg-white border border-gray-300 rounded px-3 py-1 font-semibold">
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            label: String,
            placeholder: String
        }
    }
</script>
