<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <PageTitle pageTitle="FAQ" />
        <Faq />
        <ContactInfo />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Faq from '../Faq/Faq'
import ContactInfo from '../Faq/ContactInfo'
import Footer from '../Layout/Footer'

export default {
    name: 'FaqPage',
    components: {
        Navbar,
        PageTitle,
        Faq,
        ContactInfo,
        Footer,
    }
}
</script>