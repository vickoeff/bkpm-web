<template>
    <div class="footer-area">
        <div class="container">
            <div class="footer-content">
                <router-link to="/" class="logo">
                    <img src="../../assets/images/Logo_Kementerian_Investasi_BKPM_Warna_Square.png" alt="logo">
                </router-link>
                <ul class="social-links">
                    <li><a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                    <li><a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://messenger.com/" target="_blank"><i class="ri-messenger-fill"></i></a></li>
                    <li><a href="https://github.com/" target="_blank"><i class="ri-github-fill"></i></a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/" class="nav-link">Beranda</router-link></li>
                    <li class="nav-item"><router-link to="/about" class="nav-link">Tentang</router-link></li>
                    <li class="nav-item"><router-link to="/gallery" class="nav-link">Galeri</router-link></li>
                    <li class="nav-item"><router-link to="/contact" class="nav-link">Kontak</router-link></li>
                </ul>
                <p class="copyright">Copyright @{{currentYear}} <strong>BKPM</strong>.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>