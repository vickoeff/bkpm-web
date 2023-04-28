<template>
    <div class="modal-gallery">
        <div class="modal-gallery__inner">
            <div class="row">
                <div class="col-12 col-md-8">
                    <img :src="src" :alt="alt" />
                </div>
                <div class="col-12 col-md-4">
                    <p>{{ caption }}</p>
                </div>
            </div>
            <button class="btn btn-close" @click="$emit('onClose')"></button>
        </div>
    </div>
</template>

<script>
export default {
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
    emits: ['onClose']
}
</script>