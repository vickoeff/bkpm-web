<template>
    <div class="gallery-area pt-100 pb-75">
        <div class="container">
            <div class="row">
                <CardGallery 
                    v-for="item in items" 
                    :src="item.url_file" 
                    :alt="item.url_file" 
                    :caption="item.caption"
                    class="col-12 col-sm-6 col-md-4"
                />                
            </div>
        </div>
    </div>
</template>

<script>
import CardGallery from './CardGallery.vue';
import getGallery from '../../../api/getGallery'; 

export default {
    name: 'Gallery',
    components: {
        CardGallery
    },
    data: () => ({
        items: null
    }),
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const galery = await getGallery()
            this.items = galery.data
        }
    },
}
</script>