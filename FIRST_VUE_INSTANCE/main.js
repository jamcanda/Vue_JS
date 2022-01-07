const app = Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            num: 5,
            img: "https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png",
            link: "https://vuejs.org"
        }
    }
})

const mountedApp = app.mount("#app");