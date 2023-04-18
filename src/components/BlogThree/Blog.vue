<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area left-sidebar">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <label><input type="search" class="search-field" placeholder="Search..."></label>
                                <button type="submit"><i class="ri-search-2-line"></i></button>
                            </form>
                        </div>
                        <div class="widget widget_jexa_posts_thumb">
                            <h3 class="widget-title">Popular Posts</h3>
                            <article class="item">
                                <router-link to="/blog-details" class="thumb"><span class="fullimage cover bg1" role="img"></span></router-link>
                                <div class="info">
                                    <h4 class="title usmall"><router-link to="/blog-details">Being The Best-Selling Smart Phone This Year</router-link></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> Jan 15, 2020</span>
                                </div>
                            </article>
                            <article class="item">
                                <router-link to="/blog-details" class="thumb"><span class="fullimage cover bg2" role="img"></span></router-link>
                                <div class="info">
                                    <h4 class="title usmall"><router-link to="/blog-details">Love Songs Helped Me Through Heartbreak</router-link></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> Jan 14, 2020</span>
                                </div>
                            </article>
                            <article class="item">
                                <router-link to="/blog-details" class="thumb"><span class="fullimage cover bg3" role="img"></span></router-link>
                                <div class="info">
                                    <h4 class="title usmall"><router-link to="/blog-details">Two Fashion Designers Busy With 2020 Winter Fashion</router-link></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> Jan 13, 2020</span>
                                </div>
                            </article>
                            <article class="item">
                                <router-link to="/blog-details" class="thumb"><span class="fullimage cover bg4" role="img"></span></router-link>
                                <div class="info">
                                    <h4 class="title usmall"><router-link to="/blog-details">Working in the Office is a Tradition For Women</router-link></h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> Jan 12, 2020</span>
                                </div>
                            </article>
                        </div>
                        <div class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <ul>
                                <li><a href="#">Business <span class="post-count">(2)</span></a></li>
                                <li><a href="#">Privacy <span class="post-count">(5)</span></a></li>
                                <li><a href="#">Technology <span class="post-count">(6)</span></a></li>
                                <li><a href="#">Tips <span class="post-count">(2)</span></a></li>
                                <li><a href="#">Log in <span class="post-count">(1)</span></a></li>
                                <li><a href="#">Uncategorized <span class="post-count">(1)</span></a></li>
                            </ul>
                        </div>
                        <div class="widget widget_archive">
                            <h3 class="widget-title">Archives</h3>
                            <ul>
                                <li><a href="#">May 2020 (1)</a></li>
                                <li><a href="#">April 2020 (2)</a></li>
                                <li><a href="#">June 2020 (3)</a></li>
                            </ul>
                        </div>
                        <div class="widget widget_tag_cloud">
                            <h3 class="widget-title">Tags</h3>
                            <div class="tagcloud">
                                <a href="#">Advertisment</a>
                                <a href="#">Business</a>
                                <a href="#">Life</a>
                                <a href="#">Lifestyle</a>
                                <a href="#">Fashion</a>
                                <a href="#">Ads</a>
                                <a href="#">Inspiration</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
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
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog9.jpg" alt="blog">
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
                        <div class="col-lg-6 col-md-6">
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
                                    <h3><router-link to="/blog-details">The new minimum is a digital magazine with a header featuring a thin</router-link></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog4.jpg" alt="blog">
                                    </router-link>
                                    <router-link to="/blog-grid" class="tag">Branding</router-link>
                                </div>
                                <div class="content">
                                    <ul class="meta">
                                        <li><i class="ri-time-line"></i> April 14, 2021</li>
                                        <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(0) Comment</router-link></li>
                                    </ul>
                                    <h3><router-link to="/blog-details">WordPress is open source software you can use to create a beautiful</router-link></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog5.jpg" alt="blog">
                                    </router-link>
                                    <router-link to="/blog-grid" class="tag">Agency</router-link>
                                </div>
                                <div class="content">
                                    <ul class="meta">
                                        <li><i class="ri-time-line"></i> April 13, 2021</li>
                                        <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(4) Comment</router-link></li>
                                    </ul>
                                    <h3><router-link to="/blog-details">Bootstrap 5 is open source software you can use to create a beautiful</router-link></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog6.jpg" alt="blog">
                                    </router-link>
                                    <router-link to="/blog-grid" class="tag">Marketing</router-link>
                                </div>
                                <div class="content">
                                    <ul class="meta">
                                        <li><i class="ri-time-line"></i> April 12, 2021</li>
                                        <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(2) Comment</router-link></li>
                                    </ul>
                                    <h3><router-link to="/blog-details">Beautiful designs, powerful features, and the freedom to build anything you</router-link></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog7.jpg" alt="blog">
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
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-post">
                                <div class="image">
                                    <router-link to="/blog-details" class="d-block">
                                        <img src="../../assets/images/blog/blog8.jpg" alt="blog">
                                    </router-link>
                                    <router-link to="/blog-grid" class="tag">Agency</router-link>
                                </div>
                                <div class="content">
                                    <ul class="meta">
                                        <li><i class="ri-time-line"></i> April 13, 2021</li>
                                        <li><i class="ri-message-2-line"></i> <router-link to="/blog-details">(4) Comment</router-link></li>
                                    </ul>
                                    <h3><router-link to="/blog-details">Most designs, powerful features, and the freedom to build anything you</router-link></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area">
                                <div class="nav-links">
                                    <span class="page-numbers current">1</span>
                                    <router-link to="/blog-left-sidebar" class="page-numbers">2</router-link>
                                    <router-link to="/blog-left-sidebar" class="page-numbers">3</router-link>
                                    <router-link to="/blog-left-sidebar" class="next page-numbers" title="Next Page"><i class="ri-arrow-right-line"></i></router-link>
                                </div>
                            </div>
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