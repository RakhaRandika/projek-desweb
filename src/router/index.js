import { createRouter, createWebHistory } from "vue-router";
import BerandaPage from "@/view/Beranda.vue";
import DaftarMobilPage from "@/view/Daftarmobil.vue";
import TentangKamiPage from "@/view/Tentangkami.vue";
import LayananPage from "@/view/Layanan.vue";
import KontakPage from "@/view/Kontak.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "BerandaPages", component: BerandaPage },
    { path: "/cars", name: "DaftarMobilPages", component: DaftarMobilPage },
    { path: "/about", name: "TentangKamiPages", component: TentangKamiPage },
    { path: "/service", name: "LayananPages", component: LayananPage },
    { path: "/contact", name: "KontakPages", component: KontakPage },
  ],
});
