<template>
    <div>
        <Navbar class="navbar-style-two" />
        <MainBanner />
        <Features />
        <IncludedBestFeatures />
        <ChallengesAndTrack />
        <Video />
        <Screenshots />
        <SoftwareIntegrations />
        <CustomerReviews />
        <Pricing />
        <FreeTrial />
        <Partner />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeTwo/MainBanner'
import Features from '../HomeTwo/Features'
import IncludedBestFeatures from '../HomeTwo/IncludedBestFeatures'
import ChallengesAndTrack from '../HomeTwo/ChallengesAndTrack'
import Video from '../HomeTwo/Video'
import Screenshots from '../HomeTwo/Screenshots'
import SoftwareIntegrations from '../HomeTwo/SoftwareIntegrations'
import CustomerReviews from '../HomeTwo/CustomerReviews'
import Pricing from '../Common/Pricing'
import FreeTrial from '../HomeTwo/FreeTrial'
import Partner from '../HomeTwo/Partner'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'HomePageTwo',
    components: {
        Navbar,
        MainBanner,
        Features,
        IncludedBestFeatures,
        ChallengesAndTrack,
        Video,
        Screenshots,
        SoftwareIntegrations,
        CustomerReviews,
        Pricing,
        FreeTrial,
        Partner,
        FooterStyleTwo,
    }
}
</script>