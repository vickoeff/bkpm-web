<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">BLOG POST</span>
                <h2>Latest Article From Our Blog</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog1.jpg" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Branding</router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> April 14, 2021</li>
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(0) Comment</router-link></li>
                            </ul>
                            <h3><router-link to="/blog-details">Branding involves developing strategy to create a point of differentiation</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog2.jpg" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Agency</router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> April 13, 2021</li>
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(4) Comment</router-link></li>
                            </ul>
                            <h3><router-link to="/blog-details">Design is a plan or specification for the construction of an object</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog3.jpg" alt="blog">
                            </router-link>
                            <router-link to="/blog-grid" class="tag">Marketing</router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-time-line"></i> April 12, 2021</li>
                                <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(2) Comment</router-link></li>
                            </ul>
                            <h3><router-link to="/blog-details">Branding involves developing strategy to create a point</router-link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>