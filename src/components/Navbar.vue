<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 transition',
      scrolled
        ? 'bg-white/85 backdrop-blur-md shadow-md'
        : 'bg-white/60 backdrop-blur-md shadow',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 md:py-5">
      <div class="flex justify-between items-center">
        <router-link to="/" class="flex items-center space-x-3">
          <img
            src="@/assets/logo.png"
            alt="EV Mobil"
            class="h-10 w-auto md:h-12"
          />
          <span
            class="text-2xl md:text-3xl font-extrabold tracking-tight text-green-700"
          >
            EV
            <span
              class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
              >Mobil</span
            >
          </span>
        </router-link>

        <div class="hidden md:flex items-center gap-10">
          <router-link
            to="/"
            class="text-[17px] md:text-lg font-semibold text-gray-800 hover:text-green-600"
            active-class="text-green-600"
            >Beranda</router-link
          >
          <router-link
            to="/cars"
            class="text-[17px] md:text-lg font-semibold text-gray-800 hover:text-green-600"
            active-class="text-green-600"
            >Daftar Mobil</router-link
          >
          <router-link
            to="/about"
            class="text-[17px] md:text-lg font-semibold text-gray-800 hover:text-green-600"
            active-class="text-green-600"
            >Tentang Kami</router-link
          >
          <router-link
            to="/service"
            class="text-[17px] md:text-lg font-semibold text-gray-800 hover:text-green-600"
            active-class="text-green-600"
            >Layanan</router-link
          >
          <router-link
            to="/contact"
            class="text-[17px] md:text-lg font-semibold text-gray-800 hover:text-green-600"
            active-class="text-green-600"
            >Kontak</router-link
          >
        </div>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden mt-3 space-y-2">
        <router-link
          to="/"
          class="block py-2 text-gray-900 font-medium hover:text-green-600"
          @click="mobileMenuOpen = false"
          >Beranda</router-link
        >
        <router-link
          to="/cars"
          class="block py-2 text-gray-900 font-medium hover:text-green-600"
          @click="mobileMenuOpen = false"
          >Daftar Mobil</router-link
        >
        <router-link
          to="/about"
          class="block py-2 text-gray-900 font-medium hover:text-green-600"
          @click="mobileMenuOpen = false"
          >Tentang Kami</router-link
        >
        <router-link
          to="/service"
          class="block py-2 text-gray-900 font-medium hover:text-green-600"
          @click="mobileMenuOpen = false"
          >Layanan</router-link
        >
        <router-link
          to="/contact"
          class="block py-2 text-gray-900 font-medium hover:text-green-600"
          @click="mobileMenuOpen = false"
          >Kontak</router-link
        >
      </div>
    </div>

    <div class="h-[3px] bg-gradient-to-r from-grey-500 to-indigo-500/80"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const mobileMenuOpen = ref(false);
const scrolled = ref(false);
function onScroll() {
  scrolled.value = window.scrollY > 4;
}
onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<script>
export default { name: "AppNavbar" };
</script>
