<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBanner />
        <Partner />
        <GettingBestApp />
        <Features />
        <Video />
        <IncludedBestFeatures />
        <AppScreens />
        <SoftwareIntegrations />
        <AppDownload />
        <Pricing />
        <CustomerReviews class="bg-F4F8FC" />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeThree/MainBanner'
import Partner from '../Common/Partner'
import GettingBestApp from '../HomeThree/GettingBestApp'
import Features from '../HomeThree/Features'
import Video from '../Common/Video'
import IncludedBestFeatures from '../HomeThree/IncludedBestFeatures'
import AppScreens from '../HomeThree/AppScreens'
import SoftwareIntegrations from '../Common/SoftwareIntegrations'
import AppDownload from '../Common/AppDownload'
import Pricing from '../HomeThree/Pricing'
import CustomerReviews from '../Common/CustomerReviews'
import Blog from '../Common/Blog'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageThree',
    components: {
        Navbar,
        MainBanner,
        Partner,
        GettingBestApp,
        Features,
        Video,
        IncludedBestFeatures,
        AppScreens,
        SoftwareIntegrations,
        AppDownload,
        Pricing,
        CustomerReviews,
        Blog,
        Footer,
    }
}
</script>