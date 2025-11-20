<template>
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <section class="border rounded-md bg-gray-50">
      <div class="text-center py-3 border-b">
        <h2 class="font-semibold">Hubungi Kami</h2>
      </div>
      <p class="text-center text-sm text-gray-600 py-4">
        Tim EV Rent siap membantu Anda beralih ke mobil listrik. Hubungi kami
        untuk konsultasi <strong>GRATIS</strong>
      </p>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
      <div
        class="md:col-span-2 bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold mb-4 text-emerald-700">
          Kirim Pesan atau Pertanyaan
        </h2>
        <ContactForm wa-number="6281234567890" />
      </div>

      <aside class="space-y-4">
        <ContactInfo :info="info" />
        <LocationCard text="Showroom EV - Balikpapan Utara" :map-href="map" />
      </aside>
    </section>

    <section class="bg-gray-200 rounded-md p-6 mt-8">
      <div class="text-center mb-4">
        <h3 class="font-semibold">Pertanyaan Umum Seputar Mobil Listrik</h3>
        <p class="text-xs text-gray-600">
          Informasi penting tentang rental mobil listrik
        </p>
      </div>

      <ul class="space-y-4">
        <li
          v-for="(f, idx) in faqs"
          :key="idx"
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
        >
          <button
            type="button"
            @click="toggle(idx)"
            class="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50"
          >
            <span class="font-semibold text-gray-800 text-sm md:text-base">
              {{ f.q }}
            </span>
            <span
              class="text-emerald-600 text-xl transition-transform duration-200"
              :class="{ 'rotate-180': open === idx }"
            >
              ⟳
            </span>
          </button>

          <div
            v-show="open === idx"
            class="px-5 pb-5 text-sm text-gray-700 leading-relaxed faq-answer"
          >
            {{ f.a }}
          </div>
        </li>
      </ul>
    </section>

    <section class="bg-gray-200 rounded-md p-8 text-center mt-8">
      <h4 class="font-semibold mb-2">Siap Beralih ke Mobil Listrik?</h4>
      <p class="text-sm text-gray-700 mb-4">
        Bergabunglah dengan revolusi kendaraan listrik dan nikmati pengalaman
        berkendara yang berbeda
      </p>
      <a
        :href="waLink"
        target="_blank"
        rel="noopener"
        class="inline-block px-5 py-2 rounded text-sm border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 active:scale-[.98]"
      >
        Hubungi kami
      </a>
    </section>
  </main>
  <AppFooter />
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { computed, ref } from "vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import LocationCard from "@/components/LocationCard.vue";
import AppFooter from "@/components/Footer.vue";

const info = {
  address: "Jl. Gunung Stelling No 53, Balikpapan Utara",
  phone: "+62 821-xxxx-xxxx",
  whatsapp: "+62 812-xxxx-xxxx",
  email: "info@evrent.id",
  hours: "Senin - Jumat: 08:00 - 20:00\nSabtu - Minggu: 09:00 - 18:00",
};
const map = "https://maps.google.com/?q=Balikpapan";

const faqs = [
  {
    q: "Apa saja syarat untuk menyewa mobil listrik?",
    a: "Syarat utama adalah memiliki KTP asli, SIM A yang masih berlaku, dan deposit. Kami juga memberikan orientasi singkat tentang penggunaan mobil listrik untuk pelanggan baru.",
  },
  {
    q: "Berapa lama waktu charging mobil listrik?",
    a: "Dengan fast charging, mobil dapat terisi 80% dalam 30-45 menit. Kami menyediakan peta charging station dan kartu akses gratis untuk semua pelanggan.",
  },
  {
    q: "Apakah biaya charging sudah termasuk?",
    a: "Mobil diserahkan dengan full charge. Untuk charging selanjutnya, Anda dapat menggunakan kartu member kami di partner charging station dengan harga khusus.",
  },
  {
    q: "Apakah mobil listrik cocok untuk perjalanan jauh?",
    a: "Ya! Mobil kami memiliki range 350-590 km per charge. Dengan jaringan charging station yang luas, perjalanan antar kota sangat memungkinkan. Kami juga menyediakan trip planning assistance.",
  },
  {
    q: "Apakah ada biaya tambahan untuk mobil listrik?",
    a: "Harga sewa sudah termasuk asuransi, akses charging station, dan roadside assistance. Biaya charging di luar kantor menjadi tanggung jawab penyewa (lebih murah 70% dari BBM).",
  },
];

const open = ref(null);
function toggle(i) {
  open.value = open.value === i ? null : i;
}

const waNumber = "6281234567890";
const waLink = computed(
  () =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Halo EV Rent, saya tertarik beralih ke mobil listrik."
    )}`
);
</script>

<script>
export default { name: "KontakPage" };
</script>
