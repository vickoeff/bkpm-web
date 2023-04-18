<template>
    <div>
        <div class="video-area">
            <div class="container">
                <div class="video-box">
                    <img src="../../assets/images/video/video-img2.jpg" alt="video-bg1">
                    <div 
                        class="video-btn"
                        v-on:click="isPopupMethod(isPopup)"
                        style="cursor: pointer"
                    >
                        <i class="ri-play-line"></i>
                    </div>
                    <div class="shape">
                        <img class="shape1" src="../../assets/images/shape/shape1.png" alt="shape1">
                        <img class="shape2" src="../../assets/images/shape/shape2.png" alt="shape2">
                    </div>
                </div>
            </div>
        </div>
        
        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    data (){
        return {
            isPopup: false
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>