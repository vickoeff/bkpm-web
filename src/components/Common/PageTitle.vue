<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{pageTitle}}</h2>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>{{pageTitle}}</li>
                </ul>
            </div>
        </div>
        <div class="divider"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="banner-shape1">
            <img src="../../assets/images/shape/shape9.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>