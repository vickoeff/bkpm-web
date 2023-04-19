<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">ABOUT BKPM</span>
                            <div v-html="definisiKegiatan"></div>
                        <div class="features-text">
                            <h6>Tujuan</h6>
                            <div v-html="tujuan"></div>
                        </div>
                        <div class="features-text">
                            <h6>Manfaat</h6>
                            <div v-html="manfaat"></div>
                        </div>
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
            tujuan: null,
            manfaat: null,
            bkpm: null,
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            var data = await getTentang()
            this.definisiKegiatan = data.definisi_kegiatan
            this.tujuan = data.tujuan
            this.manfaat = data.manfaat
            this.bkpm = data.bkpm
        }
    }
}
</script>