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
  text: { type: String, default: "Kunjungi showroom EV kami di Balikpapan" },
  query: { type: String, default: "Balikpapan, Kalimantan Timur" },
  mapHref: { type: String, default: "" },
  centerLat: { type: Number, default: -1.2379 },
  centerLng: { type: Number, default: 116.852 },
  zoom: { type: Number, default: 13 },
});

const mapLink = computed(() => {
  if (props.mapHref) return props.mapHref;
  return `https://www.google.com/maps/@${props.centerLat},${props.centerLng},${props.zoom}z`;
});

const embedSrc = computed(() => {
  if (props.mapHref) {
    const hasEmbed = props.mapHref.includes("output=embed");
    return hasEmbed
      ? props.mapHref
      : `${props.mapHref}${
          props.mapHref.includes("?") ? "&" : "?"
        }output=embed`;
  }
  return `https://www.google.com/maps?ll=${props.centerLat},${props.centerLng}&z=${props.zoom}&t=m&output=embed`;
});
</script>
