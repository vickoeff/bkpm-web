<template>
    <div>
        <Navbar class="jexa-new-navbar-area home" />
        <MainBanner :slider="slider" />
        <AppScreens :items="items" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeSeven/MainBanner'
import AppScreens from '../HomeSeven/AppScreens'
import Footer from '../Layout/Footer'
import getSlider from '../../../api/getSlider'
import getGallery from '../../../api/getGallery';

export default {
    name: 'HomePageSeven',
    components: {
        Navbar,
        MainBanner,
        AppScreens,
        Footer,
    },
    data() {
        return {
            slider: [],
            items: [],
        }
    },
    beforeMount() {
        this.getData();
    },
    methods: {
        async getData() {
            const galery = await getGallery()
            const res = await getSlider();

            this.slider = res.data;
            this.items = galery.data.slice(0, 3)
        }
    }
}
</script>