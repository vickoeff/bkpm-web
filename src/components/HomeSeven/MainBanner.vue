<template>
    <div class="new-app-main-banner-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-content">
                        <div class="content">
                            <div class="name-big-text">Jexa</div>
                            <span class="sub-title">#Get Your 14 Days Free Trial</span>
                            <h1>Manage All Of Your Stuff Using A Jexa</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>

                            <div class="app-btn-box">
                                <a href="#" class="applestore-btn" target="_blank">
                                    <img src="../../assets/images/apple-store.png" alt="image">
                                    Download on the
                                    <span>Apple Store</span>
                                </a>

                                <a href="#" class="playstore-btn" target="_blank">
                                    <img src="../../assets/images/play-store.png" alt="image">
                                    Get It On
                                    <span>Google Play</span>
                                </a>
                            </div>

                            <div class="content-shape">
                                <img src="../../assets/images/more-home/banner/content-shape.png" alt="image">
                            </div>
                        </div>

                        <TrustedBy />
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="new-app-main-banner-image" data-aos="fade-up" data-aos-duration="2000">
                        <img src="../../assets/images/more-home/banner/banner-1.png" alt="image">

                        <div class="wrap-shape-1">
                            <img src="../../assets/images/more-home/banner/shape-1.png" alt="image">
                        </div>
                        <div class="wrap-shape-2">
                            <img src="../../assets/images/more-home/banner/shape-2.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-app-banner-bg-shape">
            <img src="../../assets/images/more-home/banner/banner-shape.png" alt="image">
        </div>
        <div class="new-app-banner-strock-shape">
            <img src="../../assets/images/more-home/banner/strock.png" alt="image">
        </div>
    </div>
</template>

<script>
import TrustedBy from '../HomeSeven/TrustedBy'

export default {
    name: 'MainBanner',
    components: {
        TrustedBy
    }
}
</script>