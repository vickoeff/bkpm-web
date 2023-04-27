<template>
    <div class="app-screenshots-area bg-color pt-100 pb-100">
        <div class="container">
            <div class="section-title title-with-bg-text">
                <span class="sub-title">BKPM</span>
                <h2>Galeri</h2>
            </div>
            <div class="app-screenshots-slides">
                <lightgallery
                    :settings="{ speed: 500, plugins: plugins }"
                    :onInit="onInit"
                    :onBeforeSlide="onBeforeSlide"
                    class="row justify-content-center"
                >
                    <a
                        v-for="item in items"
                        :key="item.id"
                        :data-lg-size="item.size"
                        className="gallery-item"
                        :data-src="item.url_file"
                        class="col-lg-4 col-md-6 col-sm-6"
                        :data-sub-html=item.caption
                    >
                        <div class="single-gallery-item">
                            <img className="img-responsive" :src="item.url_file" />
                        </div>
                    </a>
                </lightgallery>
                
                <div class="app-btn-box text-center mt-5">
                    <router-link to="/gallery" class="default-btn">Lebih Banyak</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import getGallery from '../../../api/getGallery';

let lightGallery= null;

export default defineComponent ({
    name: 'AppScreens',
    components: {
        Lightgallery,
    },
    data: () => ({
        plugins: [lgZoom],
        items: null
    }),
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    beforeMount () {
        this.getData()
    },
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
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