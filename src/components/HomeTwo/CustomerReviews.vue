<template>
    <div class="feedback-area pt-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">CLIENT REVIEWS</span>
                <h2>What Our Customer Say About Us</h2>
            </div>
            <div class="feedback-swiper-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-feedback-item">
                            <div class="client-info">
                                <img :src="slide.image" alt="user">
                                <div class="title">
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                </div>
                            </div>
                            <p>{{slide.description}}</p>
                            <div class="rating">
                                <h5>{{slide.category}}</h5>
                                <div>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation>
                            <template #next data-aos="fade-right">
                                <i class='ri-arrow-right-s-line'></i>
                            </template>
                            <template #prev data-aos="fade-left">
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
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'CustomerReviews',
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
                image: require('../../assets/images/user/user1.jpg'),
                name: 'Deanna Hodges',
                position: 'Spotify Developer',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.',
                category: 'Theme Customization',
            },
            {
                id: 2,
                image: require('../../assets/images/user/user2.jpg'),
                name: 'Londynn Vargas',
                position: 'PHP Developer',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.',
                category: 'Customer Support',
            },
            {
                id: 3,
                image: require('../../assets/images/user/user3.jpg'),
                name: 'James Andy',
                position: 'Moodle Developer',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.',
                category: 'Responsive Design',
            },
            {
                id: 4,
                image: require('../../assets/images/user/user4.jpg'),
                name: 'David Warner',
                position: 'Python Developer',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.',
                category: 'Design Quality',
            },
        ],
    }),
})
</script>