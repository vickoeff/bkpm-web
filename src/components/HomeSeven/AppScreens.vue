<template>
    <div class="app-screenshots-area bg-color pb-100">
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
                        :data-src="item.src"
                        class="col-lg-4 col-md-6 col-sm-6"
                    >
                        <div class="single-gallery-item">
                            <img className="img-responsive" :src="item.thumb" />
                        </div>
                    </a>
                </lightgallery>
                
                <div class="app-btn-box text-center mt-5">
                    <router-link to="/gallery" class="default-btn">Lebih Banyak</router-link>
                </div>
            </div>
        </div>

        <div class="app-screenshots-shape-1">
            <img src="../../assets/images/more-home/screenshots/shape-1.png" alt="image">
        </div>
        <div class="app-screenshots-shape-2">
            <img src="../../assets/images/more-home/screenshots/shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default defineComponent ({
    name: 'AppScreens',
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
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        plugins: [lgZoom],
        items: [
            {
                id: '1',
                src: require('../../assets/images/gallery/gallery1.jpg'),
                thumb: require('../../assets/images/gallery/gallery1.jpg'),
            },
            {
                id: '2',
                src: require('../../assets/images/gallery/gallery2.jpg'),
                thumb: require('../../assets/images/gallery/gallery2.jpg'),
            },
            {
                id: '3',
                src: require('../../assets/images/gallery/gallery3.jpg'),
                thumb: require('../../assets/images/gallery/gallery3.jpg'),
            },
            {
                id: '4',
                src: require('../../assets/images/gallery/gallery4.jpg'),
                thumb: require('../../assets/images/gallery/gallery4.jpg'),
            },
        ],
    }),
})
</script>