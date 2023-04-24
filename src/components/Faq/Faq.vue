<template>
    <div class="faq-area ptb-100" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="faq-sidebar">
                        <h2>FAQ Kategori</h2>
                        <ul>
                            <li>
                                <a :class="keyType === ''? 'active': ''" @click="categoryOnClick('', $event)"><span>Semua</span></a>
                            </li>
                            <li v-for="item in type" :key="item.id">
                                <a :class="keyType === item? 'active': ''" @click="categoryOnClick(item, $event)"><span>{{normalization(item)}}</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="faq-accordion">
                        <accordion>
                            <accordion-item v-for="item in filteredFaq" :key="item.id">
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
            type: null,
            keyType: '',
        }
    },
    computed: {
        filteredFaq() {
            if(!this.keyType || this.keyType == '') {
                return this.items;
            }
            return this.items.filter((item) => item.tipe == this.keyType);
        },  
    },
    beforeMount: function () {
        this.getData()
    },
    methods:{
        async getData() {
           const faq = await getFaq()
           this.items = faq.data
           this.getType()
        },
        async getType() {
           let type = []
           for(let i = 0; i < this.items.length; i++) {
               if(!type.includes(this.items[i].tipe)) {
                   type.push(this.items[i].tipe)
               }
           }
           this.type = type
        },
        normalization(text) {
            const replaceSymbol = text.split("_");
            const toUpperCase = replaceSymbol.map(text => text.charAt(0).toUpperCase() + text.slice(1));

            return toUpperCase.join(" ");
        },
        categoryOnClick(key, e) {
            e.preventDefault();
            if(key == '') return this.keyType = ''
            this.keyType = key
        }
    }
}
</script>