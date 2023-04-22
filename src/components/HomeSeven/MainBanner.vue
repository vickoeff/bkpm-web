<template>
    <div class="new-app-main-banner-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-content">
                        <div class="content">
                            <div class="name-big-text">BKPM</div>
                            <h1>Kementerian Investasi / BKPM</h1>
                            <p>Badan Koordinasi Penanaman Modal adalah Lembaga Pemerintah Non Departemen Indonesia yang bertugas untuk merumuskan kebijakan pemerintah di bidang penanaman modal, baik dari dalam negeri maupun luar negeri.</p>

                            <div class="app-btn-box">
                                <a href="#" class="default-btn" target="_blank">
                                    Selengkapnya
                                </a>
                            </div>

                            <div class="content-shape">
                                <img src="../../assets/images/more-home/banner/content-shape.png" alt="image">
                            </div>
                        </div>

                        <TrustedBy />
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-image" data-aos="fade-up" data-aos-duration="2000">
                        <div class="banner-slider">
                            <carousel :items-to-show="1.5">
                                <slide v-for="slide, idx in slider" :key="idx">
                                    <img :src="slide.url_file" alt="">
                                </slide>

                                <template #addons>
                                <navigation />
                                <pagination />
                                </template>
                            </carousel>
                        </div>

                        <div class="wrap-shape-1">
                            <img src="../../assets/images/more-home/banner/shape-1.png" alt="image">
                        </div>
                        <div class="wrap-shape-2">
                            <img src="../../assets/images/more-home/banner/shape-2.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-app-banner-bg-shape">
            <img src="../../assets/images/more-home/banner/banner-shape.png" alt="image">
        </div>
        <div class="new-app-banner-strock-shape">
            <img src="../../assets/images/more-home/banner/strock.png" alt="image">
        </div>
        <div class="new-app-main-banner-wrap-shape">
            <img src="../../assets/images/more-home/banner/shape-5.png" alt="image">
        </div>
    </div>
</template>

<script>
import TrustedBy from '../HomeSeven/TrustedBy'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import getSlider from '../../../api/getSlider'

export default {
    name: 'MainBanner',
    components: {
        TrustedBy,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            slider: [],
        }
    },
    mounted: async function() {
        const res = await getSlider();
        this.slider = res.data;
    },
    // methods: {

    // }
}
</script>