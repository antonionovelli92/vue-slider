console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            pictrues,
            autoplay: null
        }
    },
    computed: {
        lastPictruesIndex() {
            return this.pictrues.length - 1;
        }
    },
    methods: {
        goToPrev() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.lastPictruesIndex;
            } else {
                this.currentIndex--;
            }
        },
        goToNext() {
            if (this.currentIndex === this.lastPictruesIndex) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }

        },
        goToThis(index) {
            this.currentIndex = index;
        },
        startAutoplay() {
            this.autoplay = setInterval(this.goToNext, 2000)
        },
        stopAutoplay() {
            clearInterval(this.autoplay);
        }
    },
    mounted() {
        this.autoplay = startAutoplay();
    }
});

app.mount('#root');
