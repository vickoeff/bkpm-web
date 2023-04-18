<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team" />
        <Team />
        <Partner class="bg-f9f9f9" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Team from '../TeamOne/Team'
import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'TeamPageOne',
    components: {
        Navbar,
        PageTitle,
        Team,
        Partner,
        Footer,
    }
}
</script>