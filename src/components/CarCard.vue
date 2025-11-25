<template>
  <div
    class="group bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 border border-gray-200 flex flex-col"
  >
    <div class="relative h-52 overflow-hidden bg-gray-100">
      <img
        :src="image"
        :alt="name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm"
      >
        IDR {{ price }} / hari
      </div>
    </div>

    <div class="p-5 flex flex-col flex-grow">
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800">{{ name }}</h3>
        <p class="text-gray-500 text-xs">Electric Vehicle</p>
      </div>

      <div class="grid grid-cols-3 gap-3 mb-6">
        <div
          class="flex flex-col items-center justify-center py-3 px-1 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-800 mb-1.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-xs font-bold text-gray-600 whitespace-nowrap">
            {{ capacity }} Seat
          </span>
        </div>

        <div
          class="flex flex-col items-center justify-center py-3 px-1 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-800 mb-1.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-xs font-bold text-gray-600 whitespace-nowrap">
            {{ range }} Km
          </span>
        </div>

        <div
          class="flex flex-col items-center justify-center py-3 px-1 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-800 mb-1.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-xs font-bold text-gray-600 whitespace-nowrap">
            {{ power }} HP
          </span>
        </div>
      </div>
      <div class="mt-auto flex justify-center w-full pt-4 pb-2">
        <button
          @click="sewaMobil"
          class="px-23 py-2.5 rounded-xl bg-black text-white text-sm font-bold hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 shadow-md"
        >
          Hubungi kami
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    id: Number,
    name: String,
    image: String,
    capacity: Number,
    range: Number,
    power: Number,
    price: String,
  },
};
</script>
