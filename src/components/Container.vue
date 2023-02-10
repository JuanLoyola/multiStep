<template>
    <div class="w-full flex justify-center items-center h-[90vh]">
        <div class="w-full flex flex-col lg:max-w-5xl md:bg-black md:bg-opacity-10 rounded-md lg:p-20 lg:flex-row ">
            <Header />
            <div class="w-full flex flex-col">
                <ContentCard />
                <Footer />
            </div>
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
