<template>
    <div class="testimonials-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="testimonials-image">
                        <img src="../../assets/images/woman.jpg" alt="testimonials">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="testimonials-content">
                        <span class="sub-title">CLIENT REVIEWS</span>
                        <h2>Customer Reviews About Our App</h2>
                    </div>
                    <div class="testimonials-slides">
                        <carousel
                            :autoplay="5000"
                            :settings='settings'
                        >
                            <slide 
                                v-for="slide in carouselItems" 
                                :key="slide.id"
                            >
                                <div class="content">
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                    <p>{{slide.description}}</p>
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
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'FeedbackFive',
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
                name: 'Londynn Vargas',
                position: 'Spotify Developer',
                description: 'Jexa is the best digital agency in our area As a mid size software development company we combine the best of both worlds. We have the focus and speed of the small it outsourcing companies.',
            },
            {
                id: 2,
                name: 'James Andy',
                position: 'PHP Developer',
                description: 'Jexa is the best digital agency in our area As a mid size software development company we combine the best of both worlds. We have the focus and speed of the small it outsourcing companies.',
            },
            {
                id: 3,
                name: 'Sarah Taylor',
                position: 'JavaScript Developer',
                description: 'Jexa is the best digital agency in our area As a mid size software development company we combine the best of both worlds. We have the focus and speed of the small it outsourcing companies.',
            },
        ],
    }),
})
</script>