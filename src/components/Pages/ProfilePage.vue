<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Contact Us" />
        <Contact />
        <ContactInfo />
        <Footer class="footer-style-two bg-black" />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Contact from '../Contact/Contact'
import ContactInfo from '../Contact/ContactInfo'
import Footer from '../Layout/Footer'

export default {
    name: 'ProfilePage',
    components: {
        Navbar,
        PageTitle,
        Contact,
        ContactInfo,
        Footer,
    }
}
</script>