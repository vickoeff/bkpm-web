<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <PartnerTwo />
        <GettingBestApp />
        <Funfacts />
        <IncludedBestFeatures />
        <AppDownload class="pb-100" />
        <Screenshots />
        <CustomerReviews />
        <FreeTrial />
        <Pricing class="pb-0" />
        <Blog />
        <FooterStyleTwo class="bg-black" />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layout/NavbarStyleTwo'
import MainBanner from '../HomeSix/MainBanner'
import PartnerTwo from '../Common/PartnerTwo'
import GettingBestApp from '../HomeSix/GettingBestApp'
import Funfacts from '../HomeSix/Funfacts'
import IncludedBestFeatures from '../HomeSix/IncludedBestFeatures'
import AppDownload from '../Common/AppDownload'
import Screenshots from '../HomeSix/Screenshots'
import CustomerReviews from '../HomeSix/CustomerReviews'
import FreeTrial from '../Common/FreeTrial'
import Pricing from '../Common/Pricing'
import Blog from '../Common/Blog'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'HomePageSix',
    components: {
        NavbarStyleTwo,
        MainBanner,
        PartnerTwo,
        GettingBestApp,
        Funfacts,
        IncludedBestFeatures,
        AppDownload,
        Screenshots,
        CustomerReviews,
        FreeTrial,
        Pricing,
        Blog,
        FooterStyleTwo,
    }
}
</script>