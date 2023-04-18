<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="How It Works" />
        <HowItWorks />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import HowItWorks from '../HowItWorks/HowItWorks'
import AppDownload from '../Common/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'HowItWorksPage',
    components: {
        Navbar,
        PageTitle,
        HowItWorks,
        AppDownload,
        Footer,
    }
}
</script>