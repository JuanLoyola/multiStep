<template>
    <div class="w-full flex justify-center items-center">
        <div class="w-full max-w-md flex flex-col justify-center items-start xl:items-center bg-white p-6 rounded-md z-20">
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
    </div>
</template>

<script>
    import Input from '../components/Input.vue';
    export default {
        name: 'ContentCard',
        components: {
            Input
        }
    }
</script>
