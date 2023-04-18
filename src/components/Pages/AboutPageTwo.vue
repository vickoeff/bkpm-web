<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle="About Us" />
        <About />
        <ChallengesAndTrack />
        <AppDownload />
        <Funfacts />
        <Feedback />
        <Video />
        <OurTeam />
        <SoftwareIntegrations />
        <Partner class="pt-0" />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import About from '../AboutTwo/About'
import ChallengesAndTrack from '../AboutTwo/ChallengesAndTrack'
import AppDownload from '../AboutTwo/AppDownload'
import Funfacts from '../AboutTwo/Funfacts'
import Feedback from '../AboutTwo/Feedback'
import Video from '../AboutTwo/Video'
import OurTeam from '../AboutTwo/OurTeam'
import SoftwareIntegrations from '../AboutTwo/SoftwareIntegrations'
import Partner from '../Common/Partner'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'AboutPageTwo',
    components: {
        Navbar,
        PageTitle,
        About,
        ChallengesAndTrack,
        AppDownload,
        Funfacts,
        Feedback,
        Video,
        OurTeam,
        SoftwareIntegrations,
        Partner,
        FooterStyleTwo,
    }
}
</script>