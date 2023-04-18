<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Feedback" />
        <CustomerReviews />
        <Feedback />
        <FeedbackTwo class="pb-75" />
        <FeedbackThree />
        <FeedbackFour />
        <FeedbackFive />
        <Partner class="bg-f9f9f9" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageTitle from '../Common/PageTitle'
import CustomerReviews from '../Common/CustomerReviews'
import Feedback from '../Feedback/Feedback'
import FeedbackTwo from '../Feedback/FeedbackTwo'
import FeedbackThree from '../Feedback/FeedbackThree'
import FeedbackFour from '../Feedback/FeedbackFour'
import FeedbackFive from '../Feedback/FeedbackFive'
import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'FeedbackPage',
    components: {
        Navbar,
        PageTitle,
        CustomerReviews,
        Feedback,
        FeedbackTwo,
        FeedbackThree,
        FeedbackFour,
        FeedbackFive,
        Partner,
        Footer,
    }
}
</script>