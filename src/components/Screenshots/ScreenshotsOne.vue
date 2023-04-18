<template>
    <div class="screenshots-area bg-black ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">APP SCREENS</span>
                <h2>Beautifully Crafted All App Screenshots</h2>
            </div>
            <div class="screen-swiper-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="swiper-slide">
                            <img :src="slide.image" alt="screenshots">
                        </div>
                    </slide>
                    
                    <template #addons>
                        <navigation>
                            <template #next>
                                <i class='ri-arrow-right-s-line'></i>
                            </template>
                            <template #prev>
                                <i class='ri-arrow-left-s-line'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
            <div class="free-trial-btn">
                <router-link to="/sign-in" class="default-btn">Start Free Trial</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'ScreenshotsOne',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/screenshots/screen1.png'),
            },
            {
                id: 2,
                image: require('../../assets/images/screenshots/screen2.jpg'),
            },
            {
                id: 3,
                image: require('../../assets/images/screenshots/screen3.jpg'),
            },
            {
                id: 4,
                image: require('../../assets/images/screenshots/screen4.jpg'),
            },
            {
                id: 5,
                image: require('../../assets/images/screenshots/screen5.jpg'),
            },
            {
                id: 6,
                image: require('../../assets/images/screenshots/screen6.jpg'),
            },
            {
                id: 7,
                image: require('../../assets/images/screenshots/screen7.jpg'),
            },
            {
                id: 8,
                image: require('../../assets/images/screenshots/screen8.jpg'),
            },
        ],
    }),
})
</script>