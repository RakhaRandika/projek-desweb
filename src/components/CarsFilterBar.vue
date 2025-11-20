<template>
  <div class="mb-6">
    <div class="text-sm font-semibold mb-2">Kategori:</div>
    <div class="flex flex-wrap gap-3">
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        @click="$emit('update:modelValue', cat)"
        class="px-4 py-1.5 rounded-full border text-sm transition"
        :class="
          modelValue === cat
            ? 'bg-black text-white border-black'
            : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700'
        "
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
defineProps({
  categories: { type: Array, default: () => [] },
  modelValue: { type: String, default: "Semua" },
});
defineEmits(["update:modelValue"]);
</script>

<script>
export default { name: "CarsFilterBar" };
</script>
