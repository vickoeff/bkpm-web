<template>
    <div>
        <Navbar class="navbar-style-three" />
        <PageTitle class="bg-color" pageTitle="Terms & Conditions" />
        <TermsConditions />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import TermsConditions from '../TermsConditions/TermsConditions'
import AppDownload from '../Common/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'TermsConditionsPage',
    components: {
        Navbar,
        PageTitle,
        TermsConditions,
        AppDownload,
        Footer,
    }
}
</script>