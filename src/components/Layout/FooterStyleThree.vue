<template>
    <div class="footer-area-style-with-black-color">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/logo.png" alt="logo">
                        </router-link>
                        <p>Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit,  auctor nam elit nulla.</p>
                        <ul class="social-links">
                            <li>
                                <a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://messenger.com/" target="_blank"><i class="ri-messenger-fill"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/" target="_blank"><i class="ri-github-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-2">
                        <h3>Company</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/about-simple">About Us</router-link>
                            </li>
                            <li>
                                <router-link to="/features-two">Core Services</router-link>
                            </li>
                            <li>
                                <router-link to="/privacy-policy">Refund Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/faq">FAQ's</router-link>
                            </li>
                            <li>
                                <router-link to="/feedback">Reviews</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/services">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Support</router-link>
                            </li>
                            <li>
                                <router-link to="/privacy-policy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/faq">FAQ's</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Useful Links</h3>
                        <ul class="links-list">
                            <li>
                                <router-link to="/privacy-policy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/privacy-policy">Return Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/terms-conditions">Terms & Conditions</router-link>
                            </li>
                            <li>
                                <router-link to="/how-it-works">How It Works?</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Contact Us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Newsletter</h3>
                        <p>Best solution for your it startup business, consecteturadipiscing elit.</p>
                        <form class="newsletter-form" data-toggle="validator">
                            <input type="text" class="input-newsletter" placeholder="Your Email" name="EMAIL">
                            <button type="submit">
                                <i class="ri-send-plane-2-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <p>Copyright {{currentYear}} <strong>Jexa</strong>. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
            </div>
        </div>

        <div class="footer-white-shape">
            <img src="../../assets/images/more-home/footer/footer-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterStyleThree',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>