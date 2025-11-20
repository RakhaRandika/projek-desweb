<template>
  <div class="p-4 border rounded">
    <img :src="image" :alt="name" class="w-full h-40 object-cover rounded" />
    <h3 class="font-semibold mt-2">{{ name }}</h3>
    <p class="text-sm text-gray-600">
      Kapasitas: {{ capacity }} • Jarak: {{ range }}km • Daya: {{ power }}hp
    </p>
    <div class="mt-5 pt-4 border-t border-gray-200 flex items-center">
      <div class="leading-tight">
        <div class="text-gray-500 text-xs">Mulai dari</div>
        <div class="text-base font-semibold whitespace-nowrap">
          Rp {{ price }}/Hari
        </div>
      </div>

      <router-link
        to="/contact"
        class="ml-6 inline-flex items-center justify-center rounded-lg bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition whitespace-nowrap"
      >
        Hubungi kami
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    name: String,
    image: String,
    capacity: Number,
    range: Number,
    power: Number,
    price: String,
  },
};
</script>
