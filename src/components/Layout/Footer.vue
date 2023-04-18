<template>
    <div class="footer-area">
        <div class="container">
            <div class="footer-content">
                <router-link to="/" class="logo">
                    <img src="../../assets/images/logo2.png" alt="logo">
                </router-link>
                <ul class="social-links">
                    <li><a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                    <li><a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                    <li><a href="https://messenger.com/" target="_blank"><i class="ri-messenger-fill"></i></a></li>
                    <li><a href="https://github.com/" target="_blank"><i class="ri-github-fill"></i></a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/services" class="nav-link">Services</router-link></li>
                    <li class="nav-item"><router-link to="/contact" class="nav-link">Support</router-link></li>
                    <li class="nav-item"><router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link></li>
                    <li class="nav-item"><router-link to="/faq" class="nav-link">FAQ's</router-link></li>
                    <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
                </ul>
                <p class="copyright">Copyright @{{currentYear}} <strong>Jexa</strong>. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
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