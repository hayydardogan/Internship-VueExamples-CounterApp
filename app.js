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
            return "Sayaç değerinin karesi = " + this.number* this.number;
        }
    }
}).mount("#app");
