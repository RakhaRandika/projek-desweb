<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section - Responsive Height -->
    <section
      class="relative h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center animate-fadeIn"
      :style="{ backgroundImage: `url(${heroImg})` }"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30"
      ></div>

      <div
        class="absolute inset-0 flex flex-col items-start justify-center text-white px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] animate-slideUp"
        >
          Berkendara Menuju Masa Depan dengan Mobil Listrik
        </h1>

        <p
          class="mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-slideUp"
        >
          Rasakan pengalaman berkendara ramah lingkungan dengan teknologi
          terkini dan performa optimal
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 md:py-16 bg-white text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-3 px-4">
        Mengapa Memilih Mobil Listrik?
      </h2>
      <p class="text-gray-600 mb-8 md:mb-12 text-base md:text-lg px-4">
        Berkontribusi untuk lingkungan sambil menikmati teknologi canggih
      </p>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-6"
      >
        <FeatureCard
          v-for="(f, idx) in features"
          :key="f.id"
          :icon="f.icon"
          :title="f.title"
          :desc="f.desc"
          :class="`animate-slideUp animation-delay-${idx * 100}`"
          class="hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
      </div>
    </section>

    <!-- Cars Section -->
    <section class="bg-gray-100 py-12 md:py-16 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-3 animate-fadeIn px-4">
        Pilihan Mobil Listrik Kami
      </h2>
      <p
        class="text-gray-600 mb-8 md:mb-12 animate-fadeIn animation-delay-100 px-4"
      >
        Armada terbaru dengan teknologi canggih
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <CarCard
          v-for="(c, idx) in cars"
          :key="c.id"
          v-bind="c"
          :class="`animate-slideUp animation-delay-${idx * 150}`"
          class="hover:scale-105 hover:shadow-xl transition-all duration-300"
        />
      </div>
      <button
        class="mt-8 md:mt-10 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 animate-fadeIn animation-delay-300"
        @click="goToCars"
      >
        Lihat Semua Daftar Mobil
      </button>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-200 py-12 md:py-16 text-center animate-fadeIn">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          Siap Beralih ke Mobil Listrik?
        </h2>
        <p class="text-gray-700 mb-6 md:mb-8 text-base md:text-lg">
          Bergabunglah dengan revolusi kendaraan listrik dan nikmati pengalaman
          berkendara yang berbeda
        </p>
        <button
          @click="goToContact"
          class="bg-black text-white px-6 md:px-8 py-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold"
        >
          Hubungi kami
        </button>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import heroImg from "@/assets/tampilanB.png";
import AppFooter from "@/components/Footer.vue";
import CarCard from "@/components/CarCard.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import { useRouter } from "vue-router";
import wulingImg from "@/assets/wuling.png";
import hyundaiImg from "@/assets/hyundai.png";
import toyotaImg from "@/assets/toyota.png";

const router = useRouter();
const goToCars = () => router.push("/cars");
const goToContact = () => router.push("/contact");

const features = [
  {
    id: 1,
    icon: "🌿",
    title: "Ramah Lingkungan",
    desc: "Nol emisi karbon untuk udara yang lebih bersih",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Performa Tinggi",
    desc: "Akselerasi instan dan tenaga yang responsif",
  },
  {
    id: 3,
    icon: "🔋",
    title: "Biaya Operasional Rendah",
    desc: "Hemat biaya listrik dibanding BBM konvensional",
  },
];

const cars = [
  {
    id: 1,
    name: "wuling",
    image: wulingImg,
    capacity: 2,
    range: 100,
    power: 214,
    price: "350.000",
  },
  {
    id: 2,
    name: "Hyundai",
    image: hyundaiImg,
    capacity: 4,
    range: 356,
    power: 314,
    price: "650.000",
  },
  {
    id: 3,
    name: "Toyota",
    image: toyotaImg,
    capacity: 5,
    range: 300,
    power: 414,
    price: "850.000",
  },
];
</script>

<script>
export default {
  name: "BerandaPages",
};
</script>
