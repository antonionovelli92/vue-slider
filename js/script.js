console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            pictrues
        }
    },
    methods: {
        goToPrev() {
            this.currentIndex--;

        },
        goToNext() {
            this.currentIndex++;
        }
    }
});

app.mount('#root');
