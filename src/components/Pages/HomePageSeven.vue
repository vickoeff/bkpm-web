<template>
    <div>
        <Navbar class="jexa-new-navbar-area home" />
        <MainBanner />
        <AppScreens />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeSeven/MainBanner'
import AppScreens from '../HomeSeven/AppScreens'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageSeven',
    components: {
        Navbar,
        MainBanner,
        AppScreens,
        Footer,
    }
}
</script>