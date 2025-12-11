<template>
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <section class="border rounded-md bg-gray-50"></section>

    <section
      class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h3 class="text-2xl font-bold mb-5 text-emerald-700">
          Muhammad Rakha Randika
        </h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          <span class="font-semibold text-emerald-600"
            >Muhammad Rakha Randika</span
          >
          mahasiswa itk informatikas 2023 hobi beramain bola memiliki teman
          teman hidup dengan bahagia
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          memiliki mimpi menjadi ornag kaya .
        </p>
        <p class="text-gray-700 leading-relaxed"></p>
      </div>

      <div
        class="overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-300 border border-gray-200"
      >
        <img
          class="w-full h-[420px] object-cover"
          src="@/assets/rakha.png"
          alt="EV Rent - mobil listrik"
        />
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-10">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-100 rounded-md p-6 text-left">
          <h4 class="text-xl font-semibold mb-3">💡 skil saya</h4>
          <p class="text-gray-700 leading-relaxed">network</p>
        </div>

        <div class="bg-gray-100 rounded-md p-6 text-left">
          <h4 class="text-xl font-semibold mb-3">🎯 berpengalaman</h4>
          <ul class="space-y-2 text-gray-700">
            <li>magang di pt icon +</li>
          </ul>
        </div>
        <div class="bg-gray-100 rounded-md p-6 text-left">
          <h4 class="text-xl font-semibold mb-3">🎯 hidup mejadi mimpi</h4>
          <ul class="space-y-2 text-gray-700">
            <li>menjadi pemain bola</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>

<script setup>
import AppFooter from "@/components/Footer.vue";
</script>

<script>
export default { name: "TentangKamiPages" };
</script>
