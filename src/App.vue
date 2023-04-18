<template>
    <div>
        <Preloader v-if="isLoading" />
        <router-view />
        <GoTop />
    </div>
</template>

<script>
    import Preloader from './components/Layout/Preloader'
    import GoTop from './components/Layout/GoTop'

    export default {
        name: 'App',
        components: {
            Preloader,
            GoTop,
        },
        data() {
            return {
                isLoading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 1000)
        }
    }
</script>