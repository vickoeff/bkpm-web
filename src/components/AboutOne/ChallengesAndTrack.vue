<template>
    <div class="app-progress-area bg-black ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-animation-image">
                        <img v-show="image" :src=image alt="app-progress" data-aos="fade-down" data-aos-duration="1000">
                        <img v-show="image" :src=image class="main-image" alt="app-progress">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-content text-white">
                        <h2>{{ title }}</h2>
                        <div v-html="text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ChallengesAndTrack',
    props: {
        title: {
            type: String,
            data: ''
        },
        text: {
            type: String,
            data: ''
        },
        image:  {
            type: String,
            data: ''
        },
    }
}
</script>