import { createApp } from "vue";
import { createPinia } from "pinia";

import BiscuitGame from "./BiscuitGame.vue";
// import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(BiscuitGame);

app.use(createPinia());
app.use(router);

app.mount("#app");
