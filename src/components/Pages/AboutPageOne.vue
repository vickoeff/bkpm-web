<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <PageTitle pageTitle="Tentang" />
        <About
            v-if="aboutData"
            title="Kegiatan Penilaian Kinerja PTSP dan PPB Pemda Serta Kinerja PPB K/L"
            :text="aboutData.definisi_kegiatan"
            :image="gallery[7].url_file"
        />
        <ChallengesAndTrack
            v-if="aboutData"
            title="Tujuan BKPM"
            :text="aboutData.tujuan"
            :image="gallery[15].url_file"
        />
        <About
            v-if="aboutData"
            title="Tentang BKPM"
            :text="aboutData.bkpm"
            :image="gallery[0].url_file"
        />
        <SoftwareIntegrations
            v-if="aboutData"
            title="Manfaat BKPM"
            :text="aboutData.manfaat"
            :gallery="gallery"
        />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../AboutOne/About'
import ChallengesAndTrack from '../AboutOne/ChallengesAndTrack'
import SoftwareIntegrations from '../AboutOne/SoftwareIntegrations'
import Footer from '../Layout/Footer'

import getTentang from '../../../api/getTentang'
import getGallery from '../../../api/getGallery'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageTitle,
        About,
        ChallengesAndTrack,
        SoftwareIntegrations,
        Footer,
    },
    data() {
        return {
            aboutData: null,
            gallery: [],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            const aboutData = await getTentang()
            const {data} = await getGallery()

            this.aboutData = aboutData
            this.gallery = data
        }
    }
}
</script>