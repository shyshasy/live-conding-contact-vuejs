import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/Home.vue";
import ContactList from "@views/contact/ContactList.vue";
import ContactAdd from "@views/contact/ContactAdd.vue";
import ContactEdit from "@views/contact/ContactEdit.vue";
import ContactShow from "@views/contact/ContactShow.vue";
import NotFound from "@views/NotFound.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactList
    },
    {
        path: "/contact/show/:id",
        name: "contact-show",
        component: ContactShow
    },
    {
        path: "/contact/new",
        name: "contact-add",
        component: ContactAdd
    },
    {
        path: "/contact/edit/:id",
        name: "contact-edit",
        component: ContactEdit
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;