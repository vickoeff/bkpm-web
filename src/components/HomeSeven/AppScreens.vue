<template>
    <div class="app-screenshots-area bg-color pt-100 pb-100">
        <div class="container">
            <div class="section-title title-with-bg-text">
                <span class="sub-title">BKPM</span>
                <div class="app-screenshots-slides">
                    <h2 class="mb-4">Galeri</h2>
                </div>
            </div>
            <div class="row">
                <CardGallery 
                    v-for="item in items" 
                    :src="item.url_file" 
                    :alt="item.url_file" 
                    :caption="item.caption"
                    class="col-12 col-sm-6 col-md-4"
                />                
            </div>
            <div class="app-btn-box text-center mt-5">
                <router-link to="/gallery" class="default-btn">Lebih Banyak</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import getGallery from '../../../api/getGallery';
import CardGallery from '../Gallery/CardGallery.vue';

let lightGallery= null;

export default defineComponent ({
    name: 'AppScreens',
    components: {
        CardGallery,
    },
    data: () => ({
        items: null
    }),
    beforeMount () {
        this.getData()
    },
    methods: {
        async getData() {
            const galery = await getGallery()
            this.items = galery.data.slice(0, 3)
        }
    },
})
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>