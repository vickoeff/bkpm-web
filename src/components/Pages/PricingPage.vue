<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Pricing Plan" />
        <Pricing />
        <AppDownload class="pt-100" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Pricing from '../Pricing/Pricing'
import AppDownload from '../Common/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'PricingPage',
    components: {
        Navbar,
        PageTitle,
        Pricing,
        AppDownload,
        Footer,
    }
}
</script>