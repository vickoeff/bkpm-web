<template>
    <div class="profile-authentication-area">
        <div class="logo">
            <router-link to="/" class="d-inline-block">
                <img src="../../assets/images/black-logo.png" alt="logo">
            </router-link>
        </div>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="forget-password-form">
                        <h2>Forget Password</h2>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username or email">
                            </div>
                            <button type="submit">Send Reset Link</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <ul class="social-links d-flex align-items-center justify-content-center">
            <li><span>Follow Us On:</span></li>
            <li>
                <a href="https://www.facebook.com/" class="facebook" target="_blank">
                    <i class="ri-facebook-fill"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/" class="twitter" target="_blank">
                    <i class="ri-twitter-fill"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/" class="linkedin" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/" class="instagram" target="_blank">
                    <i class="ri-instagram-line"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ForgetPassword'
}
</script>