import "./bootstrap";
import { createApp } from "vue";
import * as VueRouter from "vue-router";
import AppComponent from "./components/AppComponent.vue";
import HomeDataListComponent from "./components/HomeDataListComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import $ from "jquery";
import Toaster from "@meforma/vue-toaster";

// createApp(App).use(Toaster).mount("#app");
const routes = [
    { path: "/", component: HomeDataListComponent },
    { path: "/about", component: AboutComponent },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory("/vue-app/public/"),
    routes,
});
const app = createApp({});

window.url = "/vue-3/public";
app.use(router);
app.component("home-component", HomeDataListComponent);
app.component("about-component", AboutComponent);
app.component("app-component", AppComponent);

app.use(Toaster).mount("#app");
