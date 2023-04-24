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
                        <span class="sub-title">TUJUAN</span>
                        <h2>Tujuan BKPM</h2>
                        <div v-html="tujuan"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getTentang from '../../../api/getTentang'
import getAboutImage from '../../../api/getAboutImage'
import getGallery from '../../../api/getGallery'
export default {
    name: 'ChallengesAndTrack',
    data () {
        return {
            tujuan: null,
            image: null,
            gallery: null
        }

    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            const image = await getAboutImage(1)
            const galery = await getGallery()
            this.tujuan = data.tujuan
            this.image = image[0].url_file
            this.gallery = galery.data
        }
    }
}
</script>