<template>
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <section class="border rounded-md bg-gray-50">
      <div class="border rounded-md bg-gray-50">
        <div class="text-center py-3 border-b">
          <h2 class="font-semibold">Armada Mobil Listrik Kami</h2>
        </div>
        <p class="text-center text-sm text-gray-600 py-4">
          Pilih mobil listrik yang sesuai dengan kebutuhan Anda dari berbagai
          kategori dan brand ternama dunia
        </p>
      </div>
    </section>

    <CarsFilterBar :categories="categories" v-model="activeCategory" />

    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8 items-stretch">
      <CarCard
        v-for="c in filteredCars"
        :key="c.id"
        v-bind="c"
        @inquire="handleInquire"
      />
    </div>

    <section class="bg-gray-200 mt-16 rounded-md p-6">
      <h3 class="text-center font-semibold mb-6">
        Spesifikasi yang Perlu Anda Ketahui
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white/70 rounded-md p-4">
          <h4 class="font-semibold mb-1">Range (Jarak Tempuh)</h4>
          <p class="text-gray-700 text-sm">
            Jarak yang dapat ditempuh dengan sekali pengisian penuh. Semua mobil
            kami memiliki range minimal 350 km.
          </p>
        </div>
        <div class="bg-white/70 rounded-md p-4">
          <h4 class="font-semibold mb-1">Power (Tenaga)</h4>
          <p class="text-gray-700 text-sm">
            Tenaga mesin yang dihasilkan dalam Horsepower (HP). Semakin tinggi,
            semakin cepat akselerasinya.
          </p>
        </div>
        <div class="bg-white/70 rounded-md p-4">
          <h4 class="font-semibold mb-1">Charging Time</h4>
          <p class="text-gray-700 text-sm">
            Fast charging 30-45 menit ke 80%. Charging station tersedia di
            berbagai lokasi.
          </p>
        </div>
        <div class="bg-white/70 rounded-md p-4">
          <h4 class="font-semibold mb-1">Fitur Keselamatan</h4>
          <p class="text-gray-700 text-sm">
            Autopilot, ABS, airbag, dan sistem keselamatan canggih lainnya.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-200 py-12">
      <div class="max-w-6xl mx-auto px-6">
        <div class="bg-white rounded-md p-8 shadow-sm text-center">
          <p class="text-gray-700 mb-4">
            Tertarik dengan Mobil Tertentu? Hubungi kami untuk info detail, test
            drive, atau booking.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-2 text-sm font-semibold hover:bg-gray-800 transition"
          >
            Hubungi Kami Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>

<script>
import CarCard from "@/components/CarCard.vue";
import CarsFilterBar from "@/components/CarsFilterBar.vue";
import AppFooter from "@/components/Footer.vue";

import wulingImg from "@/assets/wuling.png";
import hyundaiImg from "@/assets/hyundai.png";
import toyotaImg from "@/assets/toyota.png";
import wulingLImg from "@/assets/Wuling L.png";
import wulingBSIImg from "@/assets/wulingBSIOTO.png";
import cheryImg from "@/assets/chery.png";
import cheryJ6Img from "@/assets/creey j6.png";
import toyota2Img from "@/assets/Toyota C-Hr Hybrid.png";
import hyundai2Img from "@/assets/hyundaikona.png";
import toyota1Img from "@/assets/toyota (2).png";

export default {
  name: "DaftarMobilPages",
  components: { CarCard, CarsFilterBar, AppFooter },
  data() {
    return {
      activeCategory: "Semua",
      categories: ["Semua", "Toyota", "Hyundai", "Wuling", "Chery"],
      cars: [
        {
          id: 1,
          name: "Wuling Air ",
          image: wulingImg,
          capacity: 2,
          range: 100,
          power: 214,
          price: "350.000",
        },
        {
          id: 2,
          name: "Wuling Bingo ",
          image: wulingLImg,
          capacity: 4,
          range: 200,
          power: 314,
          price: "400.000",
        },
        {
          id: 3,
          name: "Wuling Cloud ",
          image: wulingBSIImg,
          capacity: 4,
          range: 300,
          power: 400,
          price: "500.000",
        },
        {
          id: 4,
          name: "Hyundai Kona ",
          image: hyundaiImg,
          capacity: 4,
          range: 356,
          power: 314,
          price: "650.000",
        },
        {
          id: 5,
          name: "Toyota cZ4X",
          image: toyotaImg,
          capacity: 5,
          range: 300,
          power: 414,
          price: "850.000",
        },
        {
          id: 6,
          name: "Chery Omoda E5",
          image: cheryImg,
          capacity: 6,
          range: 500,
          power: 710,
          price: "950.000",
        },
        {
          id: 7,
          name: "Chery J6",
          image: cheryJ6Img,
          capacity: 6,
          range: 500,
          power: 710,
          price: "950.000",
        },
        {
          id: 8,
          name: "Toyota C-Hr Hybrid",
          image: toyota2Img,
          capacity: 2,
          range: 500,
          power: 800,
          price: "450.000",
        },
        {
          id: 9,
          name: "Hyundai Kona 2024 Hybrid",
          image: hyundai2Img,
          capacity: 4,
          range: 500,
          power: 900,
          price: "650.000",
        },
        {
          id: 10,
          name: "Toyota",
          image: toyota1Img,
          capacity: 4,
          range: 500,
          power: 900,
          price: "650.000",
        },
      ],
    };
  },
  computed: {
    filteredCars() {
      if (this.activeCategory === "Semua") return this.cars;
      const cat = this.activeCategory.toLowerCase();
      return this.cars.filter((c) => c.name.toLowerCase().includes(cat));
    },
  },
  methods: {
    handleInquire(payload) {
      this.$router.push(
        `/contact?car=${encodeURIComponent(payload.name || payload.id)}`
      );
    },
  },
};
</script>
