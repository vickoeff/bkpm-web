<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Tentang" />
        <About />
        <ChallengesAndTrack />
        <Abouts />
        <SoftwareIntegrations />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../AboutOne/About'
import Abouts from '../AboutOne/Abouts'
import ChallengesAndTrack from '../AboutOne/ChallengesAndTrack'
import SoftwareIntegrations from '../AboutOne/SoftwareIntegrations'
import Footer from '../Layout/Footer'

export default {
    name: 'AboutPageOne',
    components: {
        Navbar,
        PageTitle,
        About,
        ChallengesAndTrack,
        Abouts,
        SoftwareIntegrations,
        Footer,
    }
}
</script>