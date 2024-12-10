import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddContact from "../components/AddContact.vue";
import EditContact from "../components/EditContact.vue";
import ContactDetails from "../components/ContactDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/add-contact", component: AddContact },
  { path: "/edit-contact/:id", component: EditContact },
  { path: "/contact-details/:id", component: ContactDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

