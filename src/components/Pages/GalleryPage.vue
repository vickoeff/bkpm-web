<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="How It Works" />
        <Gallery />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Gallery from '../Gallery/Gallery'
import AppDownload from '../Common/AppDownload'
import Footer from '../Layout/Footer'

export default {
    name: 'GalleryPage',
    components: {
        Navbar,
        PageTitle,
        Gallery,
        AppDownload,
        Footer,
    }
}
</script>