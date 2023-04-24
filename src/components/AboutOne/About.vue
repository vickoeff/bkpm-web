<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <h2 class="sub-title">{{title}}</h2>
                            <div v-html="text"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div v-show="image" class="about-image">
                        <img :src=image data-aos="fade-up" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        title: {
            type: String,
            data: ''
        },
        text: {
            type: String,
            data: ''
        },
        image: {
            type: String,
            data: ''
        },
    }, 
}
</script>