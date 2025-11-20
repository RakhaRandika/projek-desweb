<template>
  <div class="p-4 border rounded">
    <div class="text-3xl">{{ icon }}</div>
    <h3 class="font-semibold mt-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    icon: String,
    title: String,
    desc: String,
  },
};
</script>
