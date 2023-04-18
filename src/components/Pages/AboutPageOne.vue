<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <About />
        <Funfacts />
        <ChallengesAndTrack />
        <Stats />
        <SoftwareIntegrations />
        <OurTeam />
        <CustomerReviews class="pt-0" />
        <Partner class="bg-f9f9f9" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../AboutOne/About'
import Funfacts from '../AboutOne/Funfacts'
import ChallengesAndTrack from '../AboutOne/ChallengesAndTrack'
import Stats from '../AboutOne/Stats'
import SoftwareIntegrations from '../AboutOne/SoftwareIntegrations'
import OurTeam from '../AboutOne/OurTeam'
import CustomerReviews from '../Common/CustomerReviews'
import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageTitle,
        About,
        Funfacts,
        ChallengesAndTrack,
        Stats,
        SoftwareIntegrations,
        OurTeam,
        CustomerReviews,
        Partner,
        Footer,
    }
}
</script>