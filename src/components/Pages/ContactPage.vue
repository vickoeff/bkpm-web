<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Contact Us" />
        <Contact />
        <ContactInfo />
        <FooterStyleTwo class="footer-style-two bg-black" />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Contact from '../Contact/Contact'
import ContactInfo from '../Contact/ContactInfo'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        Contact,
        ContactInfo,
        FooterStyleTwo,
    }
}
</script>