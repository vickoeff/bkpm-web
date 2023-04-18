<template>
    <div>
        <!-- Start Pricing Area -->
        <div class="pricing-area pt-100 pb-75">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">PRICING TABLE</span>
                    <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                </div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Basic</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $39 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 10 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-close-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box active">
                            <div class="title">
                                <h3>Team</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <span class="popular">Most Popular</span>
                            <div class="price">
                                $49 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 200 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 25 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Business</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $59 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 500 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 50 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-check-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape12"><img src="../../assets/images/shape/shape11.png" alt="shape"></div>
            <div class="shape13"><img src="../../assets/images/shape/shape15.png" alt="shape"></div>
        </div>
        <!-- End Pricing Area -->

        <!-- Start Pricing Area -->
        <div class="pricing-area bg-gradient-color pt-100 pb-75">
            <div class="container">
                <div class="pricing-tabs">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12">
                            <div class="pricing-section-title">
                                <span class="sub-title">PRICING TABLE</span>
                                <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                                <div class="tabs">
                                    <ul class="tabs__header">
                                        <li 
                                            class="tabs__header-item" 
                                            v-for="tab in tabs" 
                                            v-on:click="selectTab (tab.id)" 
                                            v-bind:class="{ 'active': activeTab == tab.id }"
                                            :key="tab.id"
                                        >
                                            {{tab.title}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="tab-content">
                                <div class="tabs__container">
                                    <div 
                                        class="tabs__list"
                                        ref='tabsList'
                                    >
                                        <div 
                                            class="tabs__list-tab"
                                            v-for="tab in tabs"
                                            v-bind:class="{ 'active': activeTab == tab.id }"
                                            :key="tab.id"
                                        >
                                            <div class="row justify-content-center">
                                                <div 
                                                    class="col-lg-6 col-md-6 col-sm-6"
                                                    v-for="pricing in tab.pricingBox"
                                                    :key="pricing.id"
                                                >
                                                    <div class="single-pricing-table">
                                                        <div class="title">
                                                            <h3>{{pricing.title}}</h3>
                                                            <p>{{pricing.desc}}</p>
                                                        </div>
                                                        <div class="price">
                                                            ${{pricing.price}} <span>/{{pricing.period}}</span>
                                                        </div>
                                                        <router-link to="/contact" class="default-btn">
                                                            Purchase Plan
                                                        </router-link>
                                                        <ul class="features-list">
                                                            <li
                                                                v-for="features in pricing.featuresList"
                                                                :key="features.id"
                                                            >
                                                                <i :class="features.icon"></i> 
                                                                {{features.list}}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="see-more-pricing">
                                <router-link to="/pricing" class="link-btn">See All Pricing Plan</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape7"><img src="../../assets/images/shape/shape6.png" alt="shape"></div>
            <div class="shape8"><img src="../../assets/images/shape/shape7.png" alt="shape"></div>
        </div>
        <!-- End Pricing Area -->

        <!-- Start Pricing Area -->
        <div class="pricing-area pt-100 pb-75">
            <div class="container">
                <div class="pricing-tabs">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12">
                            <div class="pricing-section-title black-color">
                                <span class="sub-title">PRICING TABLE</span>
                                <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-pricing-table with-border">
                                        <div class="title">
                                            <h3>Small Team</h3>
                                            <p>Powerful & awesome elements</p>
                                        </div>
                                        <span class="popular">Most Popular</span>
                                        <div class="price">
                                            $49 <span>/Month</span>
                                        </div>
                                        <a href="#" class="default-btn">Purchase Plan</a>
                                        <ul class="features-list">
                                            <li><i class="ri-check-line"></i> Up to 10 Website</li>
                                            <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                            <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                            <li><i class="ri-check-line"></i> 24/7 Support</li>
                                            <li><i class="ri-check-line"></i> SEO Optimized</li>
                                            <li><i class="ri-close-line"></i> Live Support</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-pricing-table with-border">
                                        <div class="title">
                                            <h3>Business</h3>
                                            <p>Powerful & awesome elements</p>
                                        </div>
                                        <div class="price">
                                            $69 <span>/Month</span>
                                        </div>
                                        <a href="#" class="default-btn">Purchase Plan</a>
                                        <ul class="features-list">
                                            <li><i class="ri-check-line"></i> Up to 100 Website</li>
                                            <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                            <li><i class="ri-check-line"></i> 100 GB Dedicated Hosting free</li>
                                            <li><i class="ri-check-line"></i> 24/7 Live Support</li>
                                            <li><i class="ri-check-line"></i> SEO Optimized</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pricing Area -->

        <!-- Start Pricing Area -->
        <div class="pricing-area bg-black-color ptb-100">
            <div class="container">
                <div class="section-title color-white">
                    <span class="sub-title">PRICING TABLE</span>
                    <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Basic</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $39 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 10 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-close-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box active">
                            <div class="title">
                                <h3>Team</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <span class="popular">Most Popular</span>
                            <div class="price">
                                $49 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 200 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 25 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> Business Contact</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Business</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $59 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 500 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 50 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-check-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="see-more-pricing color-white">
                            <a href="#" class="link-btn">See All Pricing Plan</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape7"><img src="../../assets/images/shape/shape6.png" alt="shape"></div>
            <div class="shape8"><img src="../../assets/images/shape/shape7.png" alt="shape"></div>
        </div>
        <!-- End Pricing Area -->

        <!-- Start Pricing Area -->
        <div class="pricing-area gradient-color ptb-100">
            <div class="container">
                <div class="section-title color-white">
                    <span class="sub-title">PRICING TABLE</span>
                    <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Basic</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $39 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 10 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-close-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box active">
                            <div class="title">
                                <h3>Team</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <span class="popular">Most Popular</span>
                            <div class="price">
                                $49 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 200 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 25 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> Business Contact</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-close-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="title">
                                <h3>Business</h3>
                                <p>Powerful & awesome elements</p>
                            </div>
                            <div class="price">
                                $59 <span>/Month</span>
                            </div>
                            <a href="#" class="default-btn">Purchase Plan</a>
                            <ul class="features-list">
                                <li><i class="ri-check-line"></i> Up to 500 Website</li>
                                <li><i class="ri-check-line"></i> Lifetime free Support</li>
                                <li><i class="ri-check-line"></i> 50 GB Dedicated Hosting free</li>
                                <li><i class="ri-check-line"></i> 24/7 Support</li>
                                <li><i class="ri-check-line"></i> SEO Optimized</li>
                                <li><i class="ri-check-line"></i> Live Support</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="see-more-pricing color-white">
                            <a href="#" class="link-btn">See All Pricing Plan</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape7"><img src="../../assets/images/shape/shape6.png" alt="shape"></div>
            <div class="shape8"><img src="../../assets/images/shape/shape7.png" alt="shape"></div>
        </div>
        <!-- End Pricing Area -->
    </div>
</template>

<script>
export default {
    name: "Pricing",
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    title: 'Monthly',
                    pricingBox: [
                        {
                            id: 1,
                            title: 'Small Team',
                            desc: 'Powerful & awesome elements',
                            price: '49',
                            period: 'Month',
                            featuresList: [
                                {
                                    id: 1,
                                    icon: 'ri-check-line',
                                    list: 'Up to 10 Website',
                                },
                                {
                                    id: 2,
                                    icon: 'ri-check-line',
                                    list: 'Lifetime free Support',
                                },
                                {
                                    id: 3,
                                    icon: 'ri-check-line',
                                    list: '10 GB Dedicated Hosting free',
                                },
                                {
                                    id: 4,
                                    icon: 'ri-check-line',
                                    list: '24/7 Support',
                                },
                                {
                                    id: 5,
                                    icon: 'ri-check-line',
                                    list: 'SEO Optimized',
                                },
                                {
                                    id: 6,
                                    icon: 'ri-close-line',
                                    list: 'Live Support',
                                },
                            ],
                        },
                        {
                            id: 2,
                            title: 'Business',
                            desc: 'Powerful & awesome elements',
                            price: '69',
                            period: 'Month',
                            featuresList: [
                                {
                                    id: 1,
                                    icon: 'ri-check-line',
                                    list: 'Up to 10 Website',
                                },
                                {
                                    id: 2,
                                    icon: 'ri-check-line',
                                    list: 'Lifetime free Support',
                                },
                                {
                                    id: 3,
                                    icon: 'ri-check-line',
                                    list: '10 GB Dedicated Hosting free',
                                },
                                {
                                    id: 4,
                                    icon: 'ri-check-line',
                                    list: '24/7 Support',
                                },
                                {
                                    id: 5,
                                    icon: 'ri-check-line',
                                    list: 'SEO Optimized',
                                },
                                {
                                    id: 6,
                                    icon: 'ri-check-line',
                                    list: 'Live Support',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Yearly',
                    pricingBox: [
                        {
                            id: 1,
                            title: 'Small Team',
                            desc: 'Powerful & awesome elements',
                            price: '69',
                            period: 'Year',
                            featuresList: [
                                {
                                    id: 1,
                                    icon: 'ri-check-line',
                                    list: 'Up to 10 Website',
                                },
                                {
                                    id: 2,
                                    icon: 'ri-check-line',
                                    list: 'Lifetime free Support',
                                },
                                {
                                    id: 3,
                                    icon: 'ri-check-line',
                                    list: '10 GB Dedicated Hosting free',
                                },
                                {
                                    id: 4,
                                    icon: 'ri-check-line',
                                    list: '24/7 Support',
                                },
                                {
                                    id: 5,
                                    icon: 'ri-check-line',
                                    list: 'SEO Optimized',
                                },
                                {
                                    id: 6,
                                    icon: 'ri-close-line',
                                    list: 'Live Support',
                                },
                            ],
                        },
                        {
                            id: 2,
                            title: 'Business',
                            desc: 'Powerful & awesome elements',
                            price: '89',
                            period: 'Year',
                            featuresList: [
                                {
                                    id: 1,
                                    icon: 'ri-check-line',
                                    list: 'Up to 10 Website',
                                },
                                {
                                    id: 2,
                                    icon: 'ri-check-line',
                                    list: 'Lifetime free Support',
                                },
                                {
                                    id: 3,
                                    icon: 'ri-check-line',
                                    list: '10 GB Dedicated Hosting free',
                                },
                                {
                                    id: 4,
                                    icon: 'ri-check-line',
                                    list: '24/7 Support',
                                },
                                {
                                    id: 5,
                                    icon: 'ri-check-line',
                                    list: 'SEO Optimized',
                                },
                                {
                                    id: 6,
                                    icon: 'ri-check-line',
                                    list: 'Live Support',
                                },
                            ],
                        },
                    ],
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    }
}
</script>