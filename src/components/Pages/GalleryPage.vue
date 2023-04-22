<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Gallery" />
        <Gallery />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Gallery from '../Gallery/Gallery'
import Footer from '../Layout/Footer'

export default {
    name: 'GalleryPage',
    components: {
        Navbar,
        PageTitle,
        Gallery,
        Footer,
    }
}
</script>