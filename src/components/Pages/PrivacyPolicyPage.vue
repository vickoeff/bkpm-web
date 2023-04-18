<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicy />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import AppDownload from '../Common/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'PrivacyPolicyPage',
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        AppDownload,
        Footer,
    }
}
</script>