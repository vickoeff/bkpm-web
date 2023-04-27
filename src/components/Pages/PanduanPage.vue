<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <PageTitle pageTitle="Panduan" />
        <Panduan />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Panduan from '../Panduan/Panduan'
import Footer from '../Layout/Footer'

export default {
    name: 'PanduanPage',
    components: {
        Navbar,
        PageTitle,
        Panduan,
        Footer,
    }
}
</script>