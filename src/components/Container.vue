<template>
    <div class="w-full flex justify-center items-center h-[90vh]">
        <div class="w-full md:max-w-lg md:bg-black md:bg-opacity-10 rounded-md flex flex-col justify-center items-center">
            <Header />
            <ContentCard />
            <Footer />
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import ContentCard from '../components/ContentCard.vue';
    import Footer from '../components/Footer.vue';
    export default {
        name: 'Container',
        components: {
            Header,
            ContentCard,
            Footer
        }
    }
</script>
