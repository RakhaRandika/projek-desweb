<template>
  <section class="bg-gray-100 rounded-xl p-6 shadow-sm">
    <h4 class="font-semibold text-lg mb-6">Informasi Kontak</h4>

    <ul class="space-y-3">
      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          📍
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">Alamat</div>
          <div class="text-sm text-gray-600 leading-relaxed break-words">
            {{ info.address }}
          </div>
        </div>
      </li>

      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          📞
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">Telepon</div>
          <div class="text-sm text-gray-600 leading-relaxed">
            {{ info.phone }}
          </div>
        </div>
      </li>

      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          💬
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">WhatsApp</div>
          <div class="text-sm text-gray-600 leading-relaxed">
            {{ info.whatsapp }}
          </div>
        </div>
      </li>

      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          ✉️
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">Email</div>
          <div class="text-sm text-gray-600 leading-relaxed break-all">
            {{ info.email }}
          </div>
        </div>
      </li>

      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          ⏰
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">
            Jam Operasi
          </div>
          <div
            class="text-sm text-gray-600 leading-relaxed whitespace-pre-line"
          >
            {{ info.hours }}
          </div>
        </div>
      </li>

      <li
        class="flex gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <span
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xl"
        >
          🔌
        </span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-sm text-gray-900 mb-1">
            Charging Station
          </div>
          <div class="text-sm text-gray-600 leading-relaxed">
            Tersedia di kantor kami<br />Fast charging 30 menit
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  info: { type: Object, default: () => ({}) },
});
</script>
