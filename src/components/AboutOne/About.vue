<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">TENTANG BKPM</span>
                            <div v-html="definisiKegiatan"></div>
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
import getTentang from '../../../api/getTentang'
import getAboutImage from '../../../api/getAboutImage'
export default {
    name: 'About',
    data() {
        return {
            definisiKegiatan: null,
            image: null
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            const image = await getAboutImage(6)
            this.definisiKegiatan = data.bkpm
            this.image = image[0].url_file
        }
    }
}
</script>