<template>
    <div class="app-screenshots-wrap-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">APP SCREENS</span>
                <h2>Beautifully Crafted All App Screenshots</h2>
            </div>

            <div class="screenshots-swiper-wrap-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                    :wrap-around="true"
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
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Screenshots',
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
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 2,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 3,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 4,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 5,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 6,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 7,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
            {
                id: 8,
                image: require('../../assets/images/more-home/screenshots/screen1.png'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 2.1,
                snapAlign: 'center',
            },
        },
    }),
})
</script>