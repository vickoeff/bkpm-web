<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services" />
        <Features />
        <IncludedBestFeatures />
        <BestFeaturesEver />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Features from '../Services/Features'
import IncludedBestFeatures from '../Services/IncludedBestFeatures'
import BestFeaturesEver from '../Services/BestFeaturesEver'
import AppDownload from '../Services/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'ServicesPage',
    components: {
        Navbar,
        PageTitle,
        Features,
        IncludedBestFeatures,
        BestFeaturesEver,
        AppDownload,
        Footer,
    }
}
</script>