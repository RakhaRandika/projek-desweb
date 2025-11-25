<template>
  <section class="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
    <div
      class="mx-auto mb-3 w-14 h-14 grid place-items-center rounded-full bg-gray-200 text-gray-700 text-2xl"
    >
      📍
    </div>
    <h4 class="font-semibold">Lokasi Kami</h4>
    <p class="text-xs text-gray-600 mt-1 mb-4">{{ text }}</p>

    <div
      class="relative w-full overflow-hidden rounded-lg shadow-sm"
      style="padding-top: 56.25%"
    >
      <iframe
        class="absolute inset-0 w-full h-full border-0"
        :src="embedSrc"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>

    <a
      :href="mapLink"
      target="_blank"
      rel="noopener"
      class="inline-block mt-4 text-sm text-emerald-700 hover:underline"
    >
      Lihat di Google Maps
    </a>
  </section>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Showroom Mobil Listrik - EV Rent Balikpapan",
  },
  // Koordinat diambil dari link maps yang Anda kirim
  centerLat: { type: Number, default: -1.2509417 },
  centerLng: { type: Number, default: 116.8636626 },
  zoom: { type: Number, default: 15 },

  mapHref: {
    type: String,
    default:
      "https://www.google.com/maps/place/Showroom+Mobil+Listrik+-+EV+Rent+Balikpapan/@-1.2509417,116.8636626,17z/data=!3m1!4b1!4m6!3m5!1s0x2df147005b92787d:0xb305156437763a5!8m2!3d-1.2509417!4d116.8636626",
  },
});

const mapLink = computed(() => {
  return (
    props.mapHref ||
    `https://www.google.com/maps?q=${props.centerLat},${props.centerLng}`
  );
});

const embedSrc = computed(() => {
  return `https://maps.google.com/maps?q=${props.centerLat},${props.centerLng}&z=${props.zoom}&output=embed`;
});
</script>
