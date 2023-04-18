<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <MainBanner />
        <IncludedBestFeatures />
        <Features />
        <About />
        <BestFeaturesEver />
        <AppScreens />
        <Video />
        <Funfacts />
        <AppDownload />
        <CustomerReviews />
        <Pricings />
        <Blog class="pt-0" />
        <Partner class="pt-0" />
        <FooterStyleFour />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import MainBanner from '../HomeEight/MainBanner'
import IncludedBestFeatures from '../HomeEight/IncludedBestFeatures'
import Features from '../HomeEight/Features'
import About from '../HomeEight/About'
import BestFeaturesEver from '../HomeEight/BestFeaturesEver'
import AppScreens from '../HomeEight/AppScreens'
import Video from '../HomeEight/Video'
import Funfacts from '../HomeEight/Funfacts'
import AppDownload from '../HomeEight/AppDownload'
import CustomerReviews from '../HomeEight/CustomerReviews'
import Pricings from '../HomeEight/Pricings'
import Blog from '../Common/Blog'
import Partner from '../Common/Partner'
import FooterStyleFour from '../Layout/FooterStyleFour'

export default {
    name: 'HomePageEight',
    components: {
        Navbar,
        MainBanner,
        Features,
        IncludedBestFeatures,
        About,
        BestFeaturesEver,
        AppScreens,
        Video,
        Funfacts,
        AppDownload,
        CustomerReviews,
        Pricings,
        Blog,
        Partner,
        FooterStyleFour,
    }
}
</script>