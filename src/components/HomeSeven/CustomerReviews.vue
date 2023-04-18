<template>
    <div class="new-feedback-area pb-100">
        <div class="container">
            <div class="section-title title-with-bg-text">
                <div class="big-title">Reviews</div>
                <span class="sub-title">CLIENT REVIEWS</span>
                <h2>Some of Our Happy Customer Reviews About Our Products</h2>
            </div>
            <div class="new-feedback-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="single-feedback-card">
                            <div class="client-info">
                                <div class="d-flex align-items-center">
                                    <img :src="slide.image" alt="user">
                                    <div class="title">
                                        <h3>{{slide.name}}</h3>
                                        <span>{{slide.position}}</span>
                                    </div>
                                </div>
                            </div>
                            <p>{{slide.description}}</p>
                            <div class="rating d-flex align-items-center justify-content-between">
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
                        <Pagination />
                    </template>
                </carousel>
            </div>
        </div>

        <div class="new-feedback-shape">
            <img src="../../assets/images/more-home/feedback/shape.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'CustomerReviews',
    components: {
        Carousel,
        Slide,
        Pagination,
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
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Theme Customization',
            },
            {
                id: 2,
                image: require('../../assets/images/user/user2.jpg'),
                name: 'Londynn Vargas',
                position: 'PHP Developer',
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Customer Support',
            },
            {
                id: 3,
                image: require('../../assets/images/user/user3.jpg'),
                name: 'James Andy',
                position: 'Moodle Developer',
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Responsive Design',
            },
            {
                id: 4,
                image: require('../../assets/images/user/user4.jpg'),
                name: 'David Warner',
                position: 'Python Developer',
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Design Quality',
            },
            {
                id: 5,
                image: require('../../assets/images/user/user3.jpg'),
                name: 'James Andy',
                position: 'Moodle Developer',
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Responsive Design',
            },
            {
                id: 6,
                image: require('../../assets/images/user/user4.jpg'),
                name: 'David Warner',
                position: 'Python Developer',
                description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
                category: 'Design Quality',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
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