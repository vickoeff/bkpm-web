<template>
    <div class="screenshots-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">APP SCREENS</span>
                <h2>Beautifully Crafted All App Screenshots</h2>
            </div>
            <div class="screenshots-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-screenshot-item">
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
    name: 'AppScreensTwo',
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
                image: require('../../assets/images/screenshots/screenshots1.png'),
            },
            {
                id: 2,
                image: require('../../assets/images/screenshots/screenshots2.png'),
            },
            {
                id: 3,
                image: require('../../assets/images/screenshots/screenshots3.png'),
            },
            {
                id: 4,
                image: require('../../assets/images/screenshots/screenshots4.png'),
            },
            {
                id: 5,
                image: require('../../assets/images/screenshots/screenshots5.png'),
            },
            {
                id: 6,
                image: require('../../assets/images/screenshots/screenshots3.png'),
            },
            {
                id: 7,
                image: require('../../assets/images/screenshots/screenshots3.png'),
            },
            {
                id: 4,
                image: require('../../assets/images/screenshots/screenshots4.png'),
            },
            {
                id: 9,
                image: require('../../assets/images/screenshots/screenshots5.png'),
            },
            {
                id: 10,
                image: require('../../assets/images/screenshots/screenshots3.png'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
})
</script>