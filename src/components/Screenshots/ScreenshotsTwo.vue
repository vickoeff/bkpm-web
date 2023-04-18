<template>
    <div class="screenshots-area bg-black-color ptb-100">
        <div class="container">
            <div class="section-title color-white">
                <span class="sub-title">SCREENSHOTS</span>
                <h2>Easily Customize in One Minute</h2>
            </div>
            <div class="screenshots-tabs">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <i :class="tab.icon"></i>
                            {{tab.title}}
                        </li>
                    </ul>
                </div>
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
                                <img src="../../assets/images/screenshots/screen7.jpg" alt="screenshots">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScreenshotsTwo',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    title: 'Budget Overview',
                    icon: 'ri-exchange-dollar-line',
                    image: require('../../assets/images/screenshots/screen5.jpg')
                },
                {
                    id: 2,
                    title: 'Create & Adjust',
                    icon: 'ri-settings-4-line',
                    image: require('../../assets/images/screenshots/screen6.jpg')
                },
                {
                    id: 3,
                    title: 'View Reports',
                    icon: 'ri-pie-chart-2-line',
                    image: require('../../assets/images/screenshots/screen7.jpg')
                },
                {
                    id: 4,
                    title: 'Integrations',
                    icon: 'ri-briefcase-4-line',
                    image: require('../../assets/images/screenshots/screen8.jpg')
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