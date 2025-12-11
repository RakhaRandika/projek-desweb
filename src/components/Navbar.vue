<template>
  <nav
    :class="[
      'fixed w-full z-50 top-0 start-0 border-b transition-all duration-300',
      scrolled
        ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm'
        : 'bg-white/60 backdrop-blur-sm border-transparent',
    ]"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/logo.png" class="h-8 md:h-10" alt="EV Mobil Logo" />
        <span
          class="self-center text-2xl md:text-3xl font-extrabold whitespace-nowrap text-green-700"
        >
          EV<span class="text-gray-900">Mobil</span>
        </span>
      </router-link>

      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        :aria-expanded="mobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          v-if="!mobileMenuOpen"
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 rounded md:p-0 transition-colors"
              active-class="text-green-700 md:text-green-700"
              :class="[
                $route.path === '/'
                  ? 'text-white bg-green-700 md:bg-transparent'
                  : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700',
              ]"
            >
              Beranda
            </router-link>
          </li>
          <li>
            <router-link
              to="/cars"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
              Daftar Mobil
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
              Tentang saya
            </router-link>
          </li>
          <li>
            <router-link
              to="/service"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
              Layanan
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
              Kontak
            </router-link>
          </li>
          <li>
            <router-link
              to="/service"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
              tentang kami
            </router-link>
          </li>
          <li>
            <router-link
              to="/saya"
              class="block py-2 px-3 rounded md:p-0 transition-colors text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700"
              active-class="!text-green-700 font-bold"
            >
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-show="mobileMenuOpen"
      class="md:hidden w-full bg-white border-t border-gray-100 shadow-lg"
    >
      <ul class="flex flex-col p-4 font-medium space-y-2">
        <li>
          <router-link
            to="/"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            Beranda
          </router-link>
        </li>
        <li>
          <router-link
            to="/cars"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            Daftar Mobil
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            Tentang saya
          </router-link>
        </li>
        <li>
          <router-link
            to="/service"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            Layanan
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            Kontak
          </router-link>
        </li>
        <li>
          <router-link
            to="/service"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
            tentang kami
          </router-link>
        </li>
        <li>
          <router-link
            to="/tentang saya"
            class="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-700"
            active-class="bg-green-50 text-green-700 font-bold"
            @click="mobileMenuOpen = false"
          >
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="h-[2px] bg-gradient-to-r from-gray-200 via-green-500 to-gray-200 opacity-70"
    ></div>
  </nav>
</template>

<script setup>
import Tentangsaya from "@/view/tentangsaya.vue";
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<script>
export default { name: "AppNavbar" };
</script>
