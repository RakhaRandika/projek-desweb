<template>
  <div class="rounded-md bg-gray-100 p-4 md:p-5 hover:shadow transition">
    <div class="flex items-start gap-3">
      <div
        v-if="icon"
        class="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-emerald-100 text-emerald-700"
      >
        <span>{{ icon }}</span>
      </div>
      <div class="min-w-0">
        <h4 class="font-semibold text-base md:text-lg leading-tight">
          {{ title }}
        </h4>
        <p class="text-sm text-gray-700 mt-1 leading-relaxed">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, default: "" },
});
</script>

<script>
export default { name: "ServiceCard" };
</script>
