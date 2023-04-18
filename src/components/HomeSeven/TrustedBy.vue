<template>
    <div class="new-app-trusted-by">
        <div class="row align-items-center">
            <div class="col-lg-2 col-md-12">
                <span class="title">Trusted by:</span>
            </div>
            <div class="col-lg-10 col-md-12">
                <div class="new-app-trusted-by-slides">
                    <carousel
                        :autoplay="5000"
                        :settings='settings'
                        :breakpoints='breakpoints'
                    >
                        <slide 
                            v-for="slide in carouselItems" 
                            :key="slide.id"
                        >
                            <div class="item">
                                <img :src="slide.image" alt="partner">
                            </div>
                        </slide>

                        <template #addons>
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'TrustedBy',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/partner/partner1.png'),
            },
            {
                id: 2,
                image: require('../../assets/images/partner/partner2.png'),
            },
            {
                id: 3,
                image: require('../../assets/images/partner/partner3.png'),
            },
            {
                id: 4,
                image: require('../../assets/images/partner/partner4.png'),
            },
            {
                id: 5,
                image: require('../../assets/images/partner/partner5.png'),
            },
            {
                id: 6,
                image: require('../../assets/images/partner/partner6.png'),
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 2,
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
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>