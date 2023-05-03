<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <PageTitle pageTitle="Profil Peserta" />
        <!-- <Map /> -->
        <Blog :provinsi="provinsi" :kabupaten="kabupaten" :kota="kota" :kl="kl" />
        <Footer class="footer-style-two bg-black" />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Map from '../Profile/Map'
import Blog from '../Profile/Blog'
import Footer from '../Layout/Footer'
import {getProfilePemda, getProfileKl} from '../../../api/getProfile'

export default {
    name: 'ProfilePage',
    components: {
        Navbar,
        PageTitle,
        Map,
        Blog,
        Footer,
    },
    data() {
        return {
            kota: [],
            kabupaten: [],
            provinsi: [],
            kl: [],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            const res = await getProfilePemda();
            const resKl = await getProfileKl();
            
            this.kota = res.filter((data) => data.daerah.includes('Kota'));
            this.kabupaten = res.filter((data) => data.daerah.includes('Kabupaten'));
            this.provinsi = res.filter((data) => data.daerah.includes('Provinsi'));
            this.kl = resKl;
        }
    }
}
</script>