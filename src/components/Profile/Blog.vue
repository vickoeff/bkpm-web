<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="widget-area mb-5">
                <div class="widget widget_search">
                    <form class="search-form">
                        <label><input type="search" class="search-field" placeholder="Search..."></label>
                        <button type="submit"><i class="ri-search-2-line"></i></button>
                    </form>
                </div>
            </div>

            <div class="section-title">
                <span class="sub-title">Peserta</span><h2>PTSP Provinsi</h2>
            </div>
            <div class="row justify-content-center mb-5" >
                <div v-for="item in provData" :key="item.id" class="col-lg-4 col-md-6 profile-card">
                    <div class="single-blog-post">
                        <div class="image">
                            <img :src="item.tampak_depan" alt="image">
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-map-pin-line"></i> {{ item.alamat }}</li>
                            </ul>
                            <h3>{{item.nomenklatur_ptsp}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area d-flex align-items-center">
                        <button :disabled="provPage == 1" @click="() => prevPage('provinsi')" class="prev page-numbers"><i class="ri-arrow-left-line"></i></button>
                        <button v-for="page in provRenderPage" :key="page" :disabled="page == '...'" @click="goToPage(page, 'provinsi')" class="btn nav-links">
                            <span  :class="[page === provPage ? 'current' : '', 'page-numbers']">{{ page }}</span>
                        </button>
                        <button :disabled="provPage >= provTotalPage" @click="() => nextPage('provinsi')" class="next page-numbers"><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
            
            <div class="section-title">
                <span class="sub-title">Peserta</span><h2>PTSP Kabupaten</h2>
            </div>
            <div class="row justify-content-center mb-5">
                <div v-for="item in kabData" :key="item.id" class="col-lg-4 col-md-6 profile-card">
                    <div class="single-blog-post">
                        <div class="image">
                            <img :src="item.tampak_depan" alt="image">
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-map-pin-line"></i> {{ item.alamat }}</li>
                            </ul>
                            <h3>{{item.nomenklatur_ptsp}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area d-flex align-items-center">
                        <button :disabled="kabPage == 1" @click="() => prevPage('kabupaten')" class="prev page-numbers"><i class="ri-arrow-left-line"></i></button>
                        <button v-for="page in kabRenderPage" :key="page" :disabled="page == '...'" @click="goToPage(page, 'kabupaten')" class="btn nav-links">
                            <span  :class="[page === kabPage ? 'current' : '', 'page-numbers']">{{ page }}</span>
                        </button>
                        <button :disabled="kabPage >= kabTotalPage" @click="() => nextPage('kabupaten')" class="next page-numbers"><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>

            
            <div class="section-title">
                <span class="sub-title">Peserta</span><h2>PTSP Kota</h2>
            </div>
            <div class="row justify-content-center mb-5">
                <div v-for="item in kotData" :key="item.id" class="col-lg-4 col-md-6 profile-card">
                    <div class="single-blog-post">
                        <div class="image">
                            <img :src="item.tampak_depan" alt="image">
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-map-pin-line"></i> {{ item.alamat }}</li>
                            </ul>
                            <h3>{{item.nomenklatur_ptsp}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area d-flex align-items-center">
                        <button :disabled="kotaPage == 1" @click="() => prevPage('kota')" class="prev page-numbers"><i class="ri-arrow-left-line"></i></button>
                        <button v-for="page in kotRenderPage" :key="page" :disabled="page == '...'" @click="goToPage(page, 'kota')" class="btn nav-links">
                            <span  :class="[page === kotaPage ? 'current' : '', 'page-numbers']">{{ page }}</span>
                        </button>
                        <button :disabled="kotaPage >= kotTotalPage" @click="() => nextPage('kota')" class="next page-numbers"><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
            
            
            <div class="section-title">
                <span class="sub-title">Peserta</span><h2>K/L</h2>
            </div>
            <div class="row justify-content-center">
                <div v-for="item in klData" :key="item.id" class="col-lg-4 col-md-6 profile-card">
                    <div class="single-blog-post">
                        <div class="image">
                            <img :src="item.tampak_depan" alt="image">
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li><i class="ri-map-pin-line"></i> {{ item.alamat }}</li>
                            </ul>
                            <h3>{{item.nama_kl}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area d-flex align-items-center">
                        <button :disabled="klPage == 1" @click="() => prevPage('kl')" class="prev page-numbers"><i class="ri-arrow-left-line"></i></button>
                        <button v-for="page in klRenderPage" :key="page" :disabled="page == '...'" @click="goToPage(page, 'kl')" class="btn nav-links">
                            <span  :class="[page === klPage ? 'current' : '', 'page-numbers']">{{ page }}</span>
                        </button>
                        <button :disabled="klPage >= klTotalPage" @click="() => nextPage('kl')" class="next page-numbers"><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    props: {
        provinsi: {
            type: Array,
            data: []
        },
        kabupaten: {
            type: Array,
            data: []
        },
        kota: {
            type: Array,
            data: []
        },
        kl: {
            type: Array,
            data: []
        }
    },
    data() {
        return {
            provPage: 1,
            kabPage: 1,
            kotaPage: 1,
            klPage: 1,
            pageSize: 6,
            windowWidth: null
        }
    },
    computed: {
        maxPage() {
            return this.windowWidth > 600 ?  5 : 3;
        },
        provData() {
            const start = (this.pageSize*this.provPage - (this.pageSize-1))-1;
            const end = this.pageSize*this.provPage;

            return this.provinsi.slice(start, end);
        },
        kabData() {
            const start = (this.pageSize*this.kabPage - (this.pageSize-1))-1;
            const end = this.pageSize*this.kabPage;

            return this.kabupaten.slice(start, end);
        },
        kotData() {
            const start = (this.pageSize*this.kotaPage - (this.pageSize-1))-1;
            const end = this.pageSize*this.kotaPage;

            return this.kota.slice(start, end);
        },
        klData() {
            const start = (this.pageSize*this.klPage - (this.pageSize-1))-1;
            const end = this.pageSize*this.klPage;

            return this.kl.slice(start, end);
        },
        provRenderPage() {
            let pages = [];
            let maxPages = 0;
            const pageLaps = Math.floor((this.maxPage+this.provPage)/this.maxPage);

            for(let i = this.provPage < this.maxPage ? 1 : this.maxPage*pageLaps-this.maxPage; i <= this.maxPage*pageLaps; i++) {
                maxPages = i;
                pages.push(i);
                if(i == this.provTotalPage) break;
            }

            if(maxPages < this.provTotalPage) pages.push("...");

            return pages;
        },
        provTotalPage() {
            const totalData = this.provinsi;
            const JSONData = JSON.stringify(totalData, null, 2);
            const arrayData = JSON.parse(JSONData);
              
            return Math.ceil(arrayData.length/this.pageSize);
        },
        kabRenderPage() {
            let pages = [];
            let maxPages = 0;
            const pageLaps = Math.floor((this.maxPage+this.kabPage)/this.maxPage);

            for(let i = this.kabPage < this.maxPage ? 1 : this.maxPage*pageLaps-this.maxPage; i <= this.maxPage*pageLaps; i++) {
                maxPages = i;
                pages.push(i);
                if(i == this.kabTotalPage) break;
            }

            if(maxPages < this.kabTotalPage) pages.push("...");

            return pages;
        },
        kabTotalPage() {
            const totalData = this.kabupaten;
            const JSONData = JSON.stringify(totalData, null, 2);
            const arrayData = JSON.parse(JSONData);
              
            return Math.ceil(arrayData.length/this.pageSize);
        },
        kotRenderPage() {
            let pages = [];
            let maxPages = 0;
            const pageLaps = Math.floor((this.maxPage+this.kotaPage)/this.maxPage);

            for(let i = this.kotaPage < this.maxPage ? 1 : this.maxPage*pageLaps-this.maxPage; i <= this.maxPage*pageLaps; i++) {
                maxPages = i;
                pages.push(i);
                if(i == this.kotTotalPage) break;
            }

            if(maxPages < this.kotTotalPage) pages.push("...");

            return pages;
        },
        kotTotalPage() {
            const totalData = this.kota;
            const JSONData = JSON.stringify(totalData, null, 2);
            const arrayData = JSON.parse(JSONData);
              
            return Math.ceil(arrayData.length/this.pageSize);
        },
        klRenderPage() {
            let pages = [];
            let maxPages = 0;
            const pageLaps = Math.floor((this.maxPage+this.klPage)/this.maxPage);

            for(let i = this.klPage < this.maxPage ? 1 : this.maxPage*pageLaps-this.maxPage; i <= this.maxPage*pageLaps; i++) {
                maxPages = i;
                pages.push(i);
                if(i == this.klTotalPage) break;
            }

            if(maxPages < this.klTotalPage) pages.push("...");

            return pages;
        },
        klTotalPage() {
            const totalData = this.kl;
            const JSONData = JSON.stringify(totalData, null, 2);
            const arrayData = JSON.parse(JSONData);
              
            return Math.ceil(arrayData.length/this.pageSize);
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
        this.onResize()
    },
    beforeUnmount() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        prevPage(section) {
            if(section === 'provinsi') this.provPage--;
            if(section === 'kabupaten') this.kabPage--;
            if(section === 'kota') this.kotaPage--;
            if(section === 'kl') this.klPage++;
        },
        nextPage(section) {
            if(section === 'provinsi') this.provPage++;
            if(section === 'kabupaten') this.kabPage++;
            if(section === 'kota') this.kotaPage++;
            if(section === 'kl') this.klPage++;
        },
        goToPage(page, section) {
            if(section === 'provinsi') this.provPage = page;
            if(section === 'kabupaten') this.kabPage = page;
            if(section === 'kota') this.kotaPage = page;
            if(section === 'kl') this.klPage = page;
        },
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>