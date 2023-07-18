const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        
    },
    computed: {
        getNumberResult() {
            return this.number > 5 ? "SAYI BÜYÜK" : "SAYI KÜÇÜK";
        }
    }
}).mount("#app");