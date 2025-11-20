<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <input
      v-model="data.name"
      placeholder="Nama lengkap"
      class="w-full border rounded px-3 py-2"
      required
    />
    <input
      v-model="data.email"
      type="email"
      placeholder="Email"
      class="w-full border rounded px-3 py-2"
    />
    <input
      v-model="data.phone"
      placeholder="No. WhatsApp"
      class="w-full border rounded px-3 py-2"
    />
    <input
      v-model="data.car"
      placeholder="Mobil EV yang diminati (opsional)"
      class="w-full border rounded px-3 py-2"
    />
    <textarea
      v-model="data.message"
      rows="4"
      class="w-full border rounded px-3 py-2"
      placeholder="Pesan"
    ></textarea>
    <div class="flex gap-3">
      <button
        class="px-4 py-2 rounded border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-200 active:scale-[.98]"
      >
        Kirim Pesan
      </button>
    </div>
  </form>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { reactive, computed } from "vue";

const props = defineProps({
  waNumber: { type: String, default: "6281234567890" },
});
const data = reactive({ name: "", email: "", phone: "", car: "", message: "" });

const waLink = computed(() => {
  const text = encodeURIComponent(
    `${data.name} ${data.phone} ${data.car} ${data.message}`
  );
  return `https://wa.me/${props.waNumber}?text=${text}`;
});

function onSubmit() {
  window.open(waLink.value, "_blank", "noopener");
}
</script>
