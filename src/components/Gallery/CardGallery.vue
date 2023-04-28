<template>
    <div class="card-gallery">
        <div class="card-gallery__inner">
            <img :src="src" :alt="alt" />
            <p>{{ shortedCaption }}</p>
            <button class="btn btn-detail" @click="showModalDetail">Lihat Detail</button>
        </div>
        <ModalGallery v-show="isOpenDetail" :src="src" :alt="alt" :caption="caption" @on-close="closeModal"/>
    </div>
</template>

<script>
import ModalGallery from './ModalGallery.vue';

export default{
    components: {
        ModalGallery
    },
    props: {
        src: {
            type: String,
            data: ''
        },
        alt: {
            type: String,
            data: ''
        },
        caption: {
            type: String,
            data: ''
        }
    },
    data() {
        return {
            isOpenDetail: false,
        }
    },
    computed: {
        shortedCaption() {
            if (this.caption.length > 100) {
                return this.caption.slice(0, 100) + '...'
            }

            return this.caption;
        }
    },
    methods: {
        showModalDetail() {
            this.isOpenDetail = true;
        },
        closeModal() {
            this.isOpenDetail = false;
        }
    }
}
</script>