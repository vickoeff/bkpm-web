<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">ABOUT BKPM</span>
                            <div v-html="definisiKegiatan"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img src="../../assets/images/app/app-img7.png" data-aos="fade-up" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getTentang from '../../../api/getTentang'
export default {
    name: 'About',
    data() {
        return {
            definisiKegiatan: null,
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            this.definisiKegiatan = data.definisi_kegiatan
        }
    }
}
</script>