<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="App Download" />
        <AppDownloadOne />
        <AppDownload />
        <Partner class="bg-f9f9f9" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import AppDownloadOne from '../AppDownload/AppDownloadOne'
import AppDownload from '../Common/AppDownload'
import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'TermsConditionsPage',
    components: {
        Navbar,
        PageTitle,
        AppDownloadOne,
        AppDownload,
        Partner,
        Footer,
    }
}
</script>