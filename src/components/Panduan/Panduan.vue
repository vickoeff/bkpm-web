<template>
    <div class="gallery-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PTSP Provinsi</h4>
                        <iframe className="img-responsive" src="https://www.youtube.com/embed/bS7_QsKGSmw" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PTSP Kabupaten/Kota</h4>
                        <iframe className="img-responsive" src="https://www.youtube.com/embed/E7pYxOWK4aI" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PPB K/L</h4>
                        <iframe className="img-responsive" src="https://www.youtube.com/embed/a5zbLIIXB4A" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>Asosiasi Pengusaha/HIPMI</h4>
                        <iframe className="img-responsive" src="https://www.youtube.com/embed/Kde7XutsJP8" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PTSP Provinsi (Mobile)</h4>
                        <iframe className="img-responsive" src="https://youtu.be/bAjRvevF6t4" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PTSP Kab/Kot (Mobile)</h4>
                        <iframe className="img-responsive" src="https://youtu.be/2_aQcTjGrIo" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>PPB K/L (Mobile)</h4>
                        <iframe className="img-responsive" src="https://youtu.be/a5zbLIIXB4A" />
                    </div>
                </div>
                <div
                    className="gallery-item"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <h4>Asosiasi Pengusaha (Mobile)</h4>
                        <iframe className="img-responsive" src="https://youtu.be/y8fq71SkcxE" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getGallery from '../../../api/getGallery';

export default {
    name: 'Panduan',
    components: {
},
    data: () => ({
        items: null,
        isModalVisible: false,
        isReadMore: true
    }),
    mounted () {
        this.getData()
    },
    methods: {
        showModal() {
            this.isModalVisible = true
        },
        hideModal() {
            this.isModalVisible = false
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
        readMore() {
            this.isReadMore = !this.isReadMore
        },
        async getData() {
            const galery = await getGallery()
            this.items = galery.data
        }
    },
}
</script>