<template>
    <div>
        <Navbar class="navbar-style-three" />
        <PageTitle class="bg-color" pageTitle="Screenshots" />
        <AppScreens />
        <Screenshots />
        <AppScreensOne />
        <AppScreensTwo />
        <ScreenshotsOne />
        <ScreenshotsTwo />
        <AppDownload />
        <FooterStyleTwo class="footer-style-two bg-black" />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import AppScreens from '../Screenshots/AppScreens'
import Screenshots from '../Screenshots/Screenshots'
import AppScreensOne from '../Screenshots/AppScreensOne'
import AppScreensTwo from '../Screenshots/AppScreensTwo'
import ScreenshotsOne from '../Screenshots/ScreenshotsOne'
import ScreenshotsTwo from '../Screenshots/ScreenshotsTwo'
import AppDownload from '../Screenshots/AppDownload'
import FooterStyleTwo from '../Layout/FooterStyleTwo'

export default {
    name: 'ScreenshotsPage',
    components: {
        Navbar,
        PageTitle,
        AppScreens,
        Screenshots,
        AppScreensOne,
        AppScreensTwo,
        ScreenshotsOne,
        ScreenshotsTwo,
        AppDownload,
        FooterStyleTwo,
    }
}
</script>