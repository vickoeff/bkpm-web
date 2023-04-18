<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="FAQ" />
        <Faq />
        <ContactInfo />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Faq from '../Faq/Faq'
import ContactInfo from '../Faq/ContactInfo'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        Faq,
        ContactInfo,
        FooterStyleTwo,
    }
}
</script>