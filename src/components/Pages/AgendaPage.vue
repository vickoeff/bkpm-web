<template>
    <div>
        <Navbar class="jexa-new-navbar-area" />
        <PageTitle pageTitle="Agenda" />
        <Agenda />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import Agenda from '../Agenda/Agenda'
import Footer from '../Layout/Footer'

export default {
    name: 'AgendaPage',
    components: {
        Navbar,
        PageTitle,
        Agenda,
        Footer,
    }
}
</script>