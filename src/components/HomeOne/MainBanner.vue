<template>
    <div class="main-banner-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="main-banner-content">
                        <div class="content">
                            <span class="sub-title">#Get your 14 days free trial</span>
                            <h1>The Revolutionary App That Makes Your Life Easier Than Others Apps</h1>
                            <router-link to="/app-download" class="default-btn">Start Free Trial</router-link>
                        </div>
                        <TrustedBy />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="main-banner-image" data-aos="fade-up">
                        <img src="../../assets/images/banner/banner-app1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-overlay"></div>
        <div class="banner-shape1"><img src="../../assets/images/shape/shape9.png" alt="image"></div>
        <div class="banner-shape2"><img src="../../assets/images/shape/shape7.png" alt="image"></div>
        <div class="banner-shape3"><img src="../../assets/images/shape/shape2.png" alt="image"></div>
        <div class="banner-shape4"><img src="../../assets/images/shape/shape10.png" alt="image"></div>
        <div class="banner-shape5"><img src="../../assets/images/shape/shape11.png" alt="image"></div>
    </div>
</template>

<script>
import TrustedBy from '../HomeOne/TrustedBy'

export default {
    name: 'MainBanner',
    components: {
        TrustedBy
    }
}
</script>