<template>
    <div>
        <Navbar />
        <MainBanner />
        <Partner />
        <GettingBestApp />
        <Features />
        <ChallengesAndTrack />
        <IncludedBestFeatures />
        <Screenshots />
        <SoftwareIntegrations />
        <CustomerReviews />
        <Pricing />
        <Blog />
        <FreeTrial />
        <FooterStyleFour class="with-gradient-color" />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeNine/MainBanner'
import Partner from '../Common/Partner'
import GettingBestApp from '../HomeNine/GettingBestApp'
import Features from '../HomeNine/Features'
import ChallengesAndTrack from '../HomeNine/ChallengesAndTrack'
import IncludedBestFeatures from '../HomeNine/IncludedBestFeatures'
import Screenshots from '../HomeNine/Screenshots'
import SoftwareIntegrations from '../HomeNine/SoftwareIntegrations'
import CustomerReviews from '../HomeNine/CustomerReviews'
import Pricing from '../HomeNine/Pricing'
import Blog from '../Common/Blog'
import FreeTrial from '../HomeNine/FreeTrial'
import FooterStyleFour from '../Layout/FooterStyleFour'

export default {
    name: 'HomePageNine',
    components: {
        Navbar,
        MainBanner,
        Partner,
        GettingBestApp,
        Features,
        ChallengesAndTrack,
        IncludedBestFeatures,
        Screenshots,
        SoftwareIntegrations,
        CustomerReviews,
        Pricing,
        Blog,
        FreeTrial,
        FooterStyleFour,
    }
}
</script>