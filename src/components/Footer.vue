<template>
  <footer class="bg-black text-white">
    <div class="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
      <div>
        <h3 class="text-xl font-semibold mb-4">EV Mobil</h3>
        <p class="text-sm text-gray-300 leading-relaxed">
          Layanan rental mobil listrik ramah lingkungan dengan teknologi terkini
          untuk masa depan yang lebih bersih.
        </p>
      </div>

      <nav>
        <h3 class="text-xl font-semibold mb-4">Menu</h3>
        <ul class="space-y-2 text-gray-200">
          <li>
            <router-link to="/" class="hover:text-white">Beranda</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-white"
              >Tentang Kami</router-link
            >
          </li>
          <li>
            <router-link to="/cars" class="hover:text-white"
              >Daftar Mobil</router-link
            >
          </li>
          <li>
            <router-link to="/service" class="hover:text-white"
              >Layanan</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="hover:text-white"
              >Kontak</router-link
            >
          </li>
        </ul>
      </nav>

      <div>
        <h3 class="text-xl font-semibold mb-4">Sosial</h3>
        <ul class="space-y-2 text-gray-200">
          <li>
            <a
              href="https://instagram.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white"
              aria-label="Instagram"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white"
              aria-label="WhatsApp"
              >WhatsApp</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" };
</script>
