<template>
    <div class="footer-area">
        <div class="container">
            <div class="footer-content">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-3 order-4 order-sm-1  mt-5 mt-md-0">
                        <router-link to="/" class="logo">
                            <img src="../../assets/bkpm/bkpm.png" alt="logo">
                        </router-link>
                    </div>
                    <div class="col-5 col-md-3 order-1 order-sm-2 text-start">
                        <h3 class="sub-tittle">Alamat</h3>
                        <p class="address">Jl. Jend. Gatot Subroto No. 44, Jakarta 12190P.O. Box 3186, Indonesia</p>
                    </div>
                    <div class="col  order-2 order-sm-3"></div>
                    <div class="col-5 col-md-3 order-3 order-sm-4">
                        <h3 class="sub-tittle">Kontak Kami</h3>
                        <ul class="contact-person">
                            <li><i class="ri-mail-line"></i> info@bkpm.go.id</li>
                            <li><i class="ri-phone-line"></i> +62 21 5252 008</li>
                            <li><i class="ri-building-line"></i> +62 21 520 2050</li>
                        </ul>
                        <ul class="social-links">
                            <li><a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                            <li><a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                        </ul>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/" class="nav-link">Beranda</router-link></li>
                    <li class="nav-item"><router-link to="/about" class="nav-link">Tentang</router-link></li>
                    <li class="nav-item"><router-link to="/gallery" class="nav-link">Galeri</router-link></li>
                    <li class="nav-item"><router-link to="/faq" class="nav-link">FAQ</router-link></li>
                    <li class="nav-item"><router-link to="/agenda" class="nav-link">Agenda</router-link></li>
                    <li class="nav-item"><router-link to="/panduan" class="nav-link">Panduan</router-link></li>
                </ul>
                <p class="copyright">Copyright @{{currentYear}} <strong>BKPM</strong>. All Rights Reserved</p>
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