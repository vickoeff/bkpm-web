<template>
    <div class="faq-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="faq-sidebar">
                        <ul>
                            <li v-for="item in tipe" :key="item.id"><a href="faq"><span>{{item}}</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="faq-accordion">
                        <accordion>
                            <accordion-item v-for="item in items" :key="item.id">
                                <template v-slot:accordion-trigger>
                                <button class="accordion-title" v-html="item.pertanyaan">
                                </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <div class="accordion-body" v-html="item.jawaban">
                                    </div>
                                </template>
                            </accordion-item>
                        </accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";
import getFaq from "../../../api/getFaq";
export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem,
    },
    data() {
        return {
            items: null,
            tipe: null
        }
    },
    mounted: function () {
        this.getData()
        this.getTipe()
    },
    methods:{
        async getData() {
           const faq = await getFaq()
           this.items = faq.data
        },
        async getTipe() {
           const faq = await getFaq()
           let tipe = []
           for(let i = 0; i < faq.data.length; i++) {
               if(!tipe.includes(faq.data[i].tipe)) {
                   tipe.push(faq.data[i].tipe)
               }
           }
           this.tipe = tipe
        }
    }
}
</script>