// CONSOLE.LOG PER VEDERE SE VUE E COLLEGATO
console.log("vue ok", Vue);

// COLLEGAMENTO AL div HTML TRAMITE L'"id"
const app = Vue.createApp({
    data() {
        return {
            // titolo "h1"
            message: 'Hello from Vue',
            // immagine
            image: './03.webp'
        }
    }
});

app.mount("#root");