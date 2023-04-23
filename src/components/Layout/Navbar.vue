<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="jexa-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/Logo_Kementerian_Investasi_BKPM_Warna_Square.png" alt="logo">
                        <img src="../../assets/images/Logo_Kementerian_Investasi_BKPM_Warna_Square.png" alt="logo">
                    </router-link>

                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Beranda</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">Tentang</router-link>
                            </li>                            
                            <li class="nav-item">
                                <router-link to="/gallery" class="nav-link">Galeri</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Kontak</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
        }
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
}
</script>