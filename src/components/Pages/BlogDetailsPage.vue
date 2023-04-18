<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetails />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogDetails from '../BlogDetails/BlogDetails'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        Footer,
    }
}
</script>