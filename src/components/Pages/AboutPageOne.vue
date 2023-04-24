<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Tentang" />
        <About title="Kegiatan Penilaian Kinerja PTSP dan PPB Pemda Serta Kinerja PPB K/L" :text="definisiKegiatan" :image="definisiKegiatanImage"/>
        <ChallengesAndTrack title="Tujuan BKPM" :text="tujuan" :image="tujuanImage"/>
        <About title="Tentang BKPM" :text="bkpm" :image="bkpmImage"/>
        <SoftwareIntegrations title="Manfaat BKPM" :text="manfaat" :gallery="gallery" />
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
            bkpm: null,
            bkpmImage: null,
            tujuan: null,
            tujuanImage: null,
            definisiKegiatan: null,
            definisiKegiatanImage: null,
            manfaat: null,
            gallery: [],
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const aboutData = await getTentang()
            const {data} = await getGallery()

            this.bkpm = aboutData.bkpm
            this.tujuan = aboutData.tujuan
            this.definisiKegiatan = aboutData.definisi_kegiatan
            this.manfaat = aboutData.manfaat
            this.bkpmImage = data[0].url_file
            this.tujuanImage = data[15].url_file
            this.definisiKegiatanImage = data[7].url_file
            this.gallery = data
        }
    }
}
</script>