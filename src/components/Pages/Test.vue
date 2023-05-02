<template>
    <div v-for="item, idx in dataCom" :key="idx">
        {{ item }}
    </div>
    <button @click="addData">Tambah</button>
</template>

<script>
export default {
    data() {
        return {
            data: [1, 2, 3]
        }
    },
    computed: {
        dataCom() {
            return this.data;
        }
    },
    methods: {
        addData() {
            this.data.push(4);
        }
    }
}
</script>