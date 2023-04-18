<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle="Team" />
        <Team />
        <AppDownload />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Team from '../TeamTwo/Team'
import AppDownload from '../Common/AppDownload'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'TeamPageTwo',
    components: {
        Navbar,
        PageTitle,
        Team,
        AppDownload,
        FooterStyleTwo,
    }
}
</script>