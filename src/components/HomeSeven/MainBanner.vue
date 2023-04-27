<template>
    <div class="new-app-main-banner-wrap-area">
        <div class="container-fluid align-self-center">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-wrap-content">
                        <h1>Kementerian Investasi / BKPM</h1>
                        <p>Badan Koordinasi Penanaman Modal adalah Lembaga Pemerintah Non Departemen Indonesia yang bertugas untuk merumuskan kebijakan pemerintah di bidang penanaman modal, baik dari dalam negeri maupun luar negeri.</p>

                        <div class="app-btn-box">
                            <router-link to="/about" class="default-btn">Selengkapnya</router-link>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-6 col-md-12">
                </div>
            </div>
        </div>

        <div v-if="!!slider.length" class="new-app-main-banner-wrap-image" data-aos="fade-left" data-aos-duration="2000">
            <div class="overlay"></div>
            <carousel :items-to-show="1" :autoplay="2400" :transition="700" :wrapAround="true">
                <slide v-for="slide in slider" :key="slide.id">
                    <img class="slide-image" :src="slide.url_file" alt="">
                </slide>
            </carousel>
        </div>

        <div class="new-app-main-banner-wrap-shape">
            <img src="../../assets/images/more-home/banner/shape-5.png" alt="image">
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import getSlider from '../../../api/getSlider'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'MainBanner',
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            slider: [],
        }
    },
    beforeMount() {
        this.getDataSlide();
    },
    methods: {
        async getDataSlide() {
            const res = await getSlider();
            this.slider = res.data;
        }
    }
}
</script>
 