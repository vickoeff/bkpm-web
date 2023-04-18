<template>
    <div>
        <Navbar class="navbar-style-three" />
        <PageTitle class="bg-color" pageTitle="Products Features" />
        <About />
        <IncludedBestFeatures />
        <BestFeaturesEver />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../FeaturesOne/About'
import IncludedBestFeatures from '../FeaturesOne/IncludedBestFeatures'
import BestFeaturesEver from '../FeaturesOne/BestFeaturesEver'
import AppDownload from '../FeaturesOne/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'FeaturesPageOne',
    components: {
        Navbar,
        PageTitle,
        About,
        IncludedBestFeatures,
        BestFeaturesEver,
        AppDownload,
        Footer,
    }
}
</script>