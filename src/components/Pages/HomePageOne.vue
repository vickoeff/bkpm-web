<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <Video />
        <GettingBestApp />
        <IncludedBestFeatures />
        <ChallengesAndTrack />
        <AppDownload />
        <AppScreens />
        <SoftwareIntegrations />
        <Pricing />
        <CustomerReviews />
        <FreeTrial />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeOne/MainBanner'
import Features from '../HomeOne/Features'
import Video from '../HomeOne/Video'
import GettingBestApp from '../HomeOne/GettingBestApp'
import IncludedBestFeatures from '../HomeOne/IncludedBestFeatures'
import ChallengesAndTrack from '../HomeOne/ChallengesAndTrack'
import AppDownload from '../HomeOne/AppDownload'
import AppScreens from '../HomeOne/AppScreens'
import SoftwareIntegrations from '../Common/SoftwareIntegrations'
import Pricing from '../HomeOne/Pricing'
import CustomerReviews from '../Common/CustomerReviews'
import FreeTrial from '../HomeOne/FreeTrial'
import Footer from '../Layout/Footer'

export default {
    name: 'HomePageOne',
    components: {
        Navbar,
        MainBanner,
        Features,
        Video,
        GettingBestApp,
        IncludedBestFeatures,
        ChallengesAndTrack,
        AppDownload,
        AppScreens,
        SoftwareIntegrations,
        Pricing,
        CustomerReviews,
        FreeTrial,
        Footer,
    }
}
</script>