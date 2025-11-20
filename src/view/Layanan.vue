<template>
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <section class="border rounded-md bg-gray-50">
      <div class="border rounded-md bg-gray-50">
        <div class="text-center py-3 border-b">
          <h2 class="font-semibold">Layanan EV Rent</h2>
        </div>
        <p class="text-center text-sm text-gray-600 py-4">
          Pilih paket sewa yang sesuai dan nikmati kemudahan berkendara dengan
          mobil listrik
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-10">
      <h3 class="text-center font-semibold mb-1">Layanan EV Rent</h3>
      <p class="text-center text-sm text-gray-600 mb-8">
        Berbagai layanan eksklusif untuk pengalaman EV yang optimal
      </p>

      <div class="grid md:grid-cols-2 gap-5">
        <ServiceCard
          v-for="s in services"
          :key="s.id"
          :title="s.title"
          :desc="s.desc"
          :icon="s.icon"
        />
      </div>
    </section>

    <section class="bg-gray-200 py-12">
      <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-center font-semibold mb-1">
          Jaringan Charging Station
        </h3>
        <p class="text-center text-sm text-gray-700 mb-6">
          Akses mudah ke charging station di berbagai lokasi strategis
        </p>
        <div
          class="rounded-md bg-white p-5 flex items-center justify-center text-gray-500 h-40 border-2 border-dashed"
        >
          "PLN Icon+",
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>

<script setup>
import AppFooter from "@/components/Footer.vue";
import ServiceCard from "@/components/ServiceCard.vue";

const services = [
  {
    id: 1,
    title: "Layanan Antar-Jemput",
    desc: "Antar ke lokasi Anda dengan battery full charge dan jemput kembali setelah masa sewa.",
    icon: "🚗",
  },
  {
    id: 2,
    title: "Asuransi All-Risk",
    desc: "Asuransi komprehensif dan perlindungan garansi baterai.",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "Perawatan Berkala",
    desc: "Perawatan rutin dan pengisian menggunakan green energy dari solar panel.",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Charging Station Access",
    desc: "Akses gratis ke 10+ charging station untuk member.",
    icon: "⚡",
  },
];
</script>

<script>
export default { name: "LayananPages" };
</script>
