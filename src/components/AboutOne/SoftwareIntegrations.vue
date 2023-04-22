<template>
    <div class="software-integrations-area bg-gradient-color ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content white-color">
                        <span class="sub-title">MANFAAT</span>
                        <h2>Manfaat BKPM</h2>
                        <div v-html="manfaat"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="../../assets/images/shape/border.png" alt="border">
                        <ul>
                            <li v-for="item in gallery" data-aos="fade-down" :key="item.id">
                                <img :src="item.url_file" class="atlassian" alt="atlassian">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape8">
            <img src="../../assets/images/shape/shape7.png" alt="shape">
        </div>
    </div>
</template>

<script>
import getTentang from '../../../api/getTentang'
import getGallery from '../../../api/getGallery'
export default {
    name: 'SoftwareIntegrations',
    data () {
        return {
            manfaat: null,
            gallery: null
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            const galery = await getGallery()
            this.manfaat = data.manfaat
            this.gallery = galery.data
        }
    }
}
</script>