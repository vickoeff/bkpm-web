<template>
    <div class="pricing-area bg-gradient-color ptb-100">
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
</template>

<script>
export default {
    name: 'Pricing',
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