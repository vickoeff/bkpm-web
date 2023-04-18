<template>
    <div>
        <div class="app-video-area pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="app-intro-video-box">
                            <img src="../../assets/images/more-home/video/video-2.jpg" alt="video-img">
                            <div 
                                class="video-btn"
                                v-on:click="isPopupMethod(isPopup)"
                                style="cursor: pointer"
                            >
                                <i class="ri-play-line"></i>
                            </div>

                            <div class="intro-video-shape">
                                <img src="../../assets/images/more-home/video/shape-3.png" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="app-intro-video-content">
                            <span class="sub-title">INTRO VIDEO</span>
                            <h2>Watch Our Most Watched Jexa App Video</h2>
                            <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began. Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.Never missyour chance its just began.</p>
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
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