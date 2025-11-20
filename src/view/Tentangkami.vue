<template>
  <main class="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <section class="border rounded-md bg-gray-50">
      <div class="border rounded-md bg-gray-50">
        <div class="text-center py-3 border-b">
          <h2 class="font-semibold">Tentang EV Rent</h2>
        </div>
        <p class="text-center text-sm text-gray-600 py-4">
          pelopor layanan rental mobil listrik ramah lingkungan di indonesia
        </p>
      </div>
    </section>

    <section
      class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h3 class="text-2xl font-bold mb-5 text-emerald-700">Siapa Kami?</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          <span class="font-semibold text-emerald-600">EV Rent</span> adalah
          perusahaan rental mobil listrik pertama di Indonesia yang berkomitmen
          untuk masa depan transportasi yang lebih bersih dan berkelanjutan.
          Berdiri sejak tahun 2022, kami menjadi pionir dalam layanan sewa
          kendaraan listrik modern.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Armada kami mencakup brand ternama seperti <strong>Toyota</strong>,
          <strong>Hyundai</strong>, <strong>Wuling</strong> dan
          <strong>Creey</strong> yang telah dilengkapi fitur canggih seperti
          autopilot, regenerative braking, dan sistem infotainment digital.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Kami tidak hanya menyediakan kendaraan, tapi juga mengedukasi
          masyarakat tentang teknologi EV dan jaringan pengisian daya hijau yang
          terus berkembang di Indonesia.
        </p>
      </div>

      <div
        class="overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-300 border border-gray-200"
      >
        <img
          class="w-full h-[420px] object-cover"
          src="@/assets/women.jpg"
          alt="EV Rent - mobil listrik"
        />
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-10">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-100 rounded-md p-6">
          <h4 class="text-xl font-semibold mb-3">Visi kami</h4>
          <p class="text-gray-700 leading-relaxed">
            Layanan rental mobil berkontribusi aktif dalam mengurangi emisi
            karbon untuk masa depan yang lebih hijau dan berkelanjutan.
          </p>
        </div>

        <div class="bg-gray-100 rounded-md p-6">
          <h4 class="text-xl font-semibold mb-3">Misi Kami</h4>
          <ul class="space-y-2 text-gray-700">
            <li>◙ Menyediakan mobil listrik berkualitas tinggi</li>
            <li>◙ Edukasi masyarakat tentang keunggulan kendaraan listrik</li>
            <li>◙ Mendukung infrastruktur pengisian daya yang memadai</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-200 py-10">
      <div class="max-w-6xl mx-auto px-6">
        <p class="text-center text-sm text-gray-700 mb-4">
          Mengapa Memilih EV Rent?
        </p>

        <div class="bg-gray-100 rounded-md p-6">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h5 class="font-semibold mb-2">100% Ramah Lingkungan</h5>
              <p class="text-gray-700">
                Berkontribusi langsung mengurangi emisi karbon dengan setiap
                kilometer yang Anda tempuh.
              </p>
            </div>

            <div>
              <h5 class="font-semibold mb-2">Teknologi Terkini</h5>
              <p class="text-gray-700">
                Armada dengan fitur autopilot, regenerative braking, dan sistem
                infotainment canggih.
              </p>
            </div>

            <div>
              <h5 class="font-semibold mb-2">Biaya Operasional Rendah</h5>
              <p class="text-gray-700">
                Hemat hingga 70% biaya bahan bakar dibandingkan mobil
                konvensional.
              </p>
            </div>

            <div>
              <h5 class="font-semibold mb-2">Performa Optimal</h5>
              <p class="text-gray-700">
                Akselerasi instan, tenaga responsif, dan pengalaman berkendara
                yang senyap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>

<script setup>
import AppFooter from "@/components/Footer.vue";
</script>

<script>
export default { name: "TentangKamiPages" };
</script>
