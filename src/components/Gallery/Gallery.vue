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
                    :data-src="item.src"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <img className="img-responsive" :src="item.thumb" />
                    </div>
                </a>
            </lightgallery>
            <!-- <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery1.jpg">
                            <img src="../../assets/images/gallery/gallery1.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery2.jpg">
                            <img src="../../assets/images/gallery/gallery2.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery3.jpg">
                            <img src="../../assets/images/gallery/gallery3.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery4.jpg">
                            <img src="../../assets/images/gallery/gallery4.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery5.jpg">
                            <img src="../../assets/images/gallery/gallery5.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery6.jpg">
                            <img src="../../assets/images/gallery/gallery6.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery7.jpg">
                            <img src="../../assets/images/gallery/gallery7.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery8.jpg">
                            <img src="../../assets/images/gallery/gallery8.jpg" alt="image">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-gallery-item">
                        <a class="popup-image" href="../../assets/images/gallery/gallery9.jpg">
                            <img src="../../assets/images/gallery/gallery9.jpg" alt="image">
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
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
            {
                id: '5',
                src: require('../../assets/images/gallery/gallery5.jpg'),
                thumb: require('../../assets/images/gallery/gallery5.jpg'),
            },
            {
                id: '6',
                src: require('../../assets/images/gallery/gallery6.jpg'),
                thumb: require('../../assets/images/gallery/gallery6.jpg'),
            },
            {
                id: '7',
                src: require('../../assets/images/gallery/gallery7.jpg'),
                thumb: require('../../assets/images/gallery/gallery7.jpg'),
            },
            {
                id: '8',
                src: require('../../assets/images/gallery/gallery8.jpg'),
                thumb: require('../../assets/images/gallery/gallery8.jpg'),
            },
            {
                id: '9',
                src: require('../../assets/images/gallery/gallery9.jpg'),
                thumb: require('../../assets/images/gallery/gallery9.jpg'),
            },
        ],
    }),
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
}
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>