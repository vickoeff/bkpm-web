<template>
    <div class="app-pricing-gradient-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">PRICING TABLE</span>
                <h2>No Hidden Charge Applied, Choose Your Plan</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box">
                        <div class="title">
                            <h3>Basic</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <div class="price">
                            $49 <span>/Month</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> Up to 10 Website</li>
                            <li><i class="ri-check-line"></i> Lifetime free Support</li>
                            <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                            <li><i class="ri-check-line"></i> 24/7 Hours Support</li>
                            <li><i class="ri-close-line"></i> SEO Optimized</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Purchase Plan</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box active">
                        <div class="title">
                            <h3>Small Team</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <span class="popular">Most Popular</span>
                        <div class="price">
                            $59 <span>/Month</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> Up to 10 Website</li>
                            <li><i class="ri-check-line"></i> Lifetime free Support</li>
                            <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                            <li><i class="ri-check-line"></i> 24/7 Hours Support</li>
                            <li><i class="ri-check-line"></i> SEO Optimized</li>
                            <li><i class="ri-close-line"></i> Live Support</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Purchase Plan</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-app-pricing-box">
                        <div class="title">
                            <h3>Business</h3>
                            <p>Powerful & awesome elements</p>
                        </div>
                        <div class="price">
                            $69 <span>/Month</span>
                        </div>
                        <ul class="features-list">
                            <li><i class="ri-check-line"></i> Up to 10 Website</li>
                            <li><i class="ri-check-line"></i> Lifetime free Support</li>
                            <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                            <li><i class="ri-check-line"></i> 24/7 Hours Support</li>
                            <li><i class="ri-check-line"></i> SEO Optimized</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/contact" class="default-btn">Purchase Plan</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="app-pricing-bottom-text">
                <router-link to="/pricing">See All Pricing Plan</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>