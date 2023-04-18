<template>
    <div>
        <Navbar class="navbar-style-two" />
        <PageTitle class="page-title-style-two" pageTitle="Features" />
        <Features />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Features from '../FeaturesTwo/Features'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'FeaturesPageTwo',
    components: {
        Navbar,
        PageTitle,
        Features,
        FooterStyleTwo,
    }
}
</script>