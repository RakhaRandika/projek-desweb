<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div
      class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-6">
        <div class="sm:col-span-2 lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="EV Mobil"
            class="inline-flex items-center"
          >
            <img
              src="@/assets/logo.png"
              alt="Logo EV Mobil"
              class="w-10 h-auto object-contain"
            />
            <span
              class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >
              EV Mobil
            </span>
          </a>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-400 leading-relaxed">
              Layanan rental mobil listrik ramah lingkungan dengan teknologi
              terkini untuk masa depan yang lebih bersih, hemat energi, dan
              berkelanjutan.
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2"
        >
          <div>
            <p
              class="font-semibold tracking-wide text-gray-100 uppercase text-sm mb-4"
            >
              Menu Utama
            </p>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/"
                  class="text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                  >Beranda</router-link
                >
              </li>
              <li>
                <router-link
                  to="/cars"
                  class="text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                  >Daftar Mobil</router-link
                >
              </li>
              <li>
                <router-link
                  to="/service"
                  class="text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                  >Layanan</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                  >Tentang Kami</router-link
                >
              </li>
            </ul>
          </div>

          <div>
            <p
              class="font-semibold tracking-wide text-gray-100 uppercase text-sm mb-4"
            >
              Hubungi Kami
            </p>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/contact"
                  class="text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                  >Formulir Kontak</router-link
                >
              </li>
              <li class="pt-2">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  class="inline-flex items-center text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm group"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.74-.37-4.313-2.13-4.313-2.13-.37-.185-.563-.279-.757.094-.194.37-.757.943-.928 1.13-.169.185-.353.208-.722.023-.369-.185-1.558-.574-2.969-1.832-1.096-.978-1.837-2.186-2.049-2.558-.213-.37-.023-.571.162-.755.167-.166.37-.428.555-.643.185-.215.245-.367.37-.606.124-.239.062-.452-.031-.639-.094-.185-.834-2.009-1.142-2.753-.299-.723-.603-.625-.83-.636-.211-.011-.452-.011-.693-.011-.241 0-.633.091-.965.452-.331.361-1.273 1.244-1.273 3.034 0 1.79 1.304 3.519 1.486 3.763.18.244 2.565 3.917 6.215 5.493 2.175.939 3.011.753 3.568.702.927-.085 3.013-1.232 3.439-2.422.425-1.19.425-2.21.298-2.423-.127-.213-.469-.341-1.209-.711z"
                    />
                  </svg>
                  Chat WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/youraccount"
                  target="_blank"
                  class="inline-flex items-center text-gray-400 transition-colors duration-300 hover:text-green-400 text-sm"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" };
</script>
