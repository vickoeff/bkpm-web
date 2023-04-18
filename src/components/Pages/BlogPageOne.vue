<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Grid" />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Blog from '../BlogOne/Blog'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageTitle,
        Blog,
        Footer,
    }
}
</script>