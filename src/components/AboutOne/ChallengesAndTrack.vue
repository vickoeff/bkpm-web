<template>
    <div class="app-progress-area bg-black ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-animation-image">
                        <img src="../../assets/images/app-progress/app-progress1.png" alt="app-progress" data-aos="fade-down" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress2.png" alt="app-progress" data-aos="fade-right" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress3.png" alt="app-progress" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress4.png" alt="app-progress" data-aos="fade-up" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/progress-main.png" class="main-image" alt="app-progress">
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
export default {
    name: 'ChallengesAndTrack',
    data () {
        return {
            tujuan: null
        }

    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            this.tujuan = data.tujuan

        }
    }
}
</script>