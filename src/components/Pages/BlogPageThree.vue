<template>
    <div>
        <Navbar class="navbar-style-three" />
        <PageTitle class="bg-color" pageTitle="Blog Left Sidebar" />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Blog from '../BlogThree/Blog'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageThree',
    components: {
        Navbar,
        PageTitle,
        Blog,
        Footer,
    }
}
</script>