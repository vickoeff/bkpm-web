<template>
    <div class="gallery-area pt-100 pb-75">
        <div class="container">
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
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import getGallery from '../../../api/getGallery';
let lightGallery= null;

export default {
    name: 'Gallery',
    components: {
        Lightgallery,
    },
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    data: () => ({
        plugins: [lgZoom],
        items: null
    }),
    mounted () {
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
            this.items = galery.data
        }
    },
}
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>