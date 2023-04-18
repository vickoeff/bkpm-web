<template>
    <div>
        <Navbar class="navbar-style-three" />
        <MainBanner />
        <PartnerTwo />
        <GettingBestApp />
        <Features />
        <IncludedBestFeatures />
        <AppScreens />
        <Pricing />
        <AppDownload class="pt-100" />
        <Feedback />
        <FreeTrial />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeFive/MainBanner'
import PartnerTwo from '../Common/PartnerTwo'
import GettingBestApp from '../HomeFive/GettingBestApp'
import Features from '../HomeFive/Features'
import IncludedBestFeatures from '../HomeFive/IncludedBestFeatures'
import AppScreens from '../HomeFive/AppScreens'
import Pricing from '../HomeFive/Pricing'
import AppDownload from '../Common/AppDownload'
import Feedback from '../HomeFive/Feedback'
import FreeTrial from '../Common/FreeTrial'
import Blog from '../Common/Blog'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageFive',
    components: {
        Navbar,
        MainBanner,
        PartnerTwo,
        GettingBestApp,
        Features,
        IncludedBestFeatures,
        AppScreens,
        Pricing,
        AppDownload,
        Feedback,
        FreeTrial,
        Blog,
        Footer,
    }
}
</script>