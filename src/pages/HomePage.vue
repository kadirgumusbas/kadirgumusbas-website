<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"
import { ref } from "vue";

const skills = ["Vue.js", "Django"]
const metrics = [
  { label: "Yıl", value: "3+" },
  { label: "Proje", value: "6+" },
  { label: "Teknoloji", value: "12+" },
]

const experiences = [
  {
    company: "N2Mobil",
    role: "Stajyer Full-Stack Web Geliştirici",
    period: "11.04.2025 - Devam",
    bullets: [
      "Vue + Django ile dashboard ve CRUD akışları",
      "API performans ve UI optimizasyonları",
    ],
    tech: ["Vue", "Django", "Tailwind CSS", "PostgreSQL"]
  },
  {
    company: "Sedaş Bilişim",
    role: "Veritabanı Destek Stajyeri",
    period: "27.06.2022 - 08.08.2022",
    bullets: [
      "C/C# ",
      "Algoritma & veri yapıları pratiği",
      "Veritabanı temel bilgileri",
    ],
    tech: ["C", "C#", "ASP.net"]
  },
  {
    company: "Keçiören Belediyesi",
    role: "IT Destek Stajyeri (Bilgi İşlem)",
    period: "08.08.2022 - 25.09.2022",
    bullets: [
      "C/C++",
      "Takım bazlı modern eğitim",
    ],
    tech: ["C#", "MSSQL"]
  },
]

const homeProjects = [
  {
    title: "GeoQuery",
    desc: "Koordinat sorguları, limit planları, MapLibre entegrasyonu.",
    stack: ["Vue 3", "Django", "MapLibre"],
    to: "https://github.com/kadirgumusbas/GeoQuery"
  },
  {
    title: "UserTracker",
    desc: "Kullanıcı izleme & dashboard, JWT auth, raporlama.",
    stack: ["Vue", "Pinia", "ApexCharts"],
    to: "https://github.com/kadirgumusbas/usertracker"
  },
  {
    title: "Teamboard",
    desc: "Takım/rol yönetimi, görevler, gerçek zamanlı akış.",
    stack: ["Vue", "Django", "Tailwind"],
    to: "https://github.com/kadirgumusbas/teamboard"
  },
  {
    title: "Güno Diary",
    desc: "Günlük/haftalık planlama, hatırlatıcılar ve ilerleme takibi.",
    stack: ["Kotlin", "Firebase"],
    to: "https://github.com/kadirgumusbas/GunoDiary"
  },
  {
    title: "BarkodPos",
    desc: "Barkodla hızlı satış, stok ve raporlama",
    stack: ["C#", "MSSQL"],
    to: "https://github.com/kadirgumusbas/BarkodPos"
  },
]

const education = ref([
  {
    company: "Karadeniz Teknik Üniversitesi",
    role: "Bilgisayar Programcılığı",
    period: "2020 – 2023",
    bullets: ["C/C#", "Algoritma & veri yapıları pratiği"],
    tech: ["C", "C#", "MSQL", "PHP", "HTML", "CSS",],
  },
  {
    company: "42 Ecole - Kocaeli",
    role: "Yazılım Mühendisliği",
    period: "2023 – 2024",
    bullets: ["C/C++", "Proje bazlı akran eğitim sistemine göre eğitim"],
    tech: ["C", "Linux"],
  },

  {
    company: "Bolu Abant İzzet Baysal Üniversitesi",
    role: "Bilgisayar Mühendisliği",
    period: "2023 – 2025",
    bullets: ["Robotik Kodlama, Görüntü İşleme", "Tasarım Desenleri temel bilgileri",],
    tech: ["Java", "Python", "Kotlin", "Firebase",],
  },
])

</script>

<template>
  <Navbar />

  <main class="flex-grow pt-14">
    <!-- HERO -->
    <section class="relative overflow-hidden min-h-[calc(100dvh-56px)] flex items-center px-4 py-12 md:py-20">
      <!-- arka plan halo'lar -->
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl
            bg-gradient-to-br from-brand-600/25 to-accent-500/25"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl
            bg-gradient-to-tr from-accent-500/25 to-brand-600/25"></div>

      <div class="container mx-auto max-w-screen-xl">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <!-- Sol metin -->
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Merhaba, ben <span class="highlight">Kadir Gümüşbaş</span>
            </h1>

            <div class="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              <span class="highlight">Full Stack Web Developer</span>
            </div>

            <p class="text-lg text-gray-700 dark:text-gray-300">
              Web ve veri odaklı arayüzler geliştiriyorum. Django + Vue ekosisteminde
              harita tabanlı uygulamalar, CRM panelleri ve dashboard’lar üretiyorum.
            </p>

            <div class="flex space-x-4 pt-4">
              <a href="#hakkimda" class="btn-gradient">Hakkımda</a>
              <a href="mailto:akadirgumusbas@gmail.com" class="px-6 py-3 rounded-lg border-2 border-accent-500 text-accent-600
         hover:bg-accent-50 dark:hover:bg-white/5 transition-colors">
                İletişime Geç
              </a>
            </div>
          </div>

          <!-- Sağ: kod penceresi -->
          <div class="relative">
            <div
              class="relative z-10 bg-gray-100 dark:bg-slate-800 rounded-lg p-2 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div class="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-inner">
                <div class="h-8 bg-gradient-to-r from-brand-600/15 to-accent-500/15
            dark:from-brand-600/20 dark:to-accent-500/20 flex items-center px-3 space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="p-4 font-mono text-sm">
                  <div class="flex" v-for="(line, i) in 10" :key="i">
                    <span class="text-gray-500 dark:text-gray-400 mr-2">{{ i + 1 }}</span>
                    <template v-if="i === 0">
                      <span class="text-brand-600">const</span>
                      <span class="mx-1 text-gray-800 dark:text-gray-200">developer</span>
                      <span class="text-gray-800 dark:text-gray-200 mx-1">=</span>
                      <span class="text-gray-800 dark:text-gray-200">{</span>
                    </template>
                    <template v-else-if="i === 1">
                      <span class="ml-4 text-green-600 dark:text-green-400">name:</span>
                      <span class="mx-1 text-orange-600 dark:text-orange-400">'Kadir Gümüşbaş'</span><span
                        class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 2">
                      <span class="ml-4 text-green-600 dark:text-green-400">skills:</span>
                      <span class="mx-1 text-gray-800 dark:text-gray-200">[</span>
                      <span class="text-orange-600 dark:text-orange-400">'Vue'</span><span
                        class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 3">
                      <span class="ml-8 text-orange-600 dark:text-orange-400">'Django'</span><span
                        class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 4">
                      <span class="ml-8 text-orange-600 dark:text-orange-400">'PostgreSQL'</span><span
                        class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 5">
                      <span class="ml-8 text-orange-600 dark:text-orange-400">'Tailwind'</span>
                    </template>
                    <template v-else-if="i === 6">
                      <span class="ml-4 text-gray-800 dark:text-gray-200">]</span><span
                        class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 7">
                      <span class="ml-4 text-green-600 dark:text-green-400">experience:</span>
                      <span class="mx-1 text-brand-600">3</span><span class="text-gray-800 dark:text-gray-200">,</span>
                    </template>
                    <template v-else-if="i === 8">
                      <span class="ml-4 text-green-600 dark:text-green-400">passion:</span>
                      <span class="mx-1 text-orange-600 dark:text-orange-400">'Web Development'</span>
                    </template>
                    <template v-else>
                      <span class="text-gray-800 dark:text-gray-200">}</span><span
                        class="text-gray-800 dark:text-gray-200">;</span>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <!-- ekstra halo -->
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- HAKKIMDA -->
    <section id="hakkimda" class="py-20 px-4 bg-gray-50 dark:bg-slate-900/50">
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex items-center justify-between mb-8">
          <h2 class="section-heading">Hakkımda</h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Sol: Bio + İstatistikler -->
          <div class="lg:col-span-2 space-y-6">
            <p class="text-lg text-gray-700 dark:text-gray-300">
              Bolu Abant İzzet Baysal Üniversitesi Bilgisayar Mühendisliğinden yeni mezun oldum.
              8 aydır N2Mobil'de gönüllü staj yapmaktayım.
              Django + Vue ekosisteminde harita tabanlı uygulamalar, CRM panelleri ve
              veri odaklı arayüzler geliştiriyorum. Hedefim: sade, performanslı ve
              sürdürülebilir ürün deneyimleri.
              Bunların yanında basınç yara evreleri ve yara risklerini tespit eden
              bir model eğiterek bunu mobil uygulamaya entegre ettiğim bir proje üzerinde çalışıyorum.
            </p>

            <!-- İstatistikler -->
            <div class="grid grid-cols-3 gap-4">
              <div v-for="m in metrics" :key="m.label" class="rounded-2xl p-5 bg-slate-100/70 ring-1 ring-slate-200
                      dark:bg-white/5 dark:ring-white/10 text-center">
                <div class="text-3xl font-bold">{{ m.value }}</div>
                <div class="mt-1 text-sm opacity-70">{{ m.label }}</div>
              </div>
            </div>

            <!-- Kısa yetenek şeritleri -->
            <div class="flex flex-wrap gap-2">
              <span v-for="s in skills" :key="s" class="chip">{{ s }}</span>
            </div>
          </div>

          <!-- Sağ: Sosyal bağlantılar -->
          <aside class="space-y-6">
            <div class="rounded-2xl p-6 bg-white ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
              <h3 class="text-base font-semibold mb-4 text-gray-900 dark:text-white">Bağlantılar</h3>

              <nav class="flex flex-col gap-3">
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/abdulkadir-gümüşbaş-5855541ba/" target="_blank" rel="noopener"
                  class="group flex items-center gap-3 rounded-xl px-3 py-2 ring-1 ring-slate-200
                      hover:bg-slate-50 dark:ring-white/10 dark:hover:bg-white/10 transition">
                  <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg
                           bg-[#0A66C2]/10 ring-1 ring-[#0A66C2]/30 group-hover:bg-[#0A66C2]/20">
                    <!-- LinkedIn SVG -->
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2]" aria-hidden="true">
                      <path fill="currentColor"
                        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.33V9.75h3.42v1.47h.05c.48-.9 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.49v5.6ZM5.34 8.28a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9.75h3.56v10.7Z" />
                    </svg>
                  </span>
                  <div class="flex-1 text-sm">
                    <div class="font-medium text-gray-900 dark:text-white">LinkedIn</div>
                    <div class="opacity-70">Abdulkadir Gümüşbaş</div>
                  </div>
                  <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-60 group-hover:opacity-100" aria-hidden="true">
                    <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z" />
                  </svg>
                  <span class="sr-only">LinkedIn profilime git</span>
                </a>

                <!-- GitHub -->
                <a href="https://github.com/kadirgumusbas" target="_blank" rel="noopener" class="group flex items-center gap-3 rounded-xl px-3 py-2 ring-1 ring-slate-200
                      hover:bg-slate-50 dark:ring-white/10 dark:hover:bg-white/10 transition">
                  <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg
                           bg-slate-900/10 ring-1 ring-slate-900/20 group-hover:bg-slate-900/20">
                    <!-- GitHub SVG -->
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true">
                      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.57v-2.1c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.53.11-3.19 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.66.23 2.89.11 3.19.75.82 1.2 1.87 1.2 3.15 0 4.52-2.74 5.5-5.36 5.79.43.37.82 1.1.82 2.22v3.29c0 .32.21.68.81.56A11.5 11.5 0 0 0 12 .5Z" />
                    </svg>
                  </span>
                  <div class="flex-1 text-sm">
                    <div class="font-medium text-gray-900 dark:text-white">GitHub</div>
                    <div class="opacity-70">@kadirgumusbas</div>
                  </div>
                  <svg viewBox="0 0 24 24" class="w-4 h-4 opacity-60 group-hover:opacity-100" aria-hidden="true">
                    <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z" />
                  </svg>
                  <span class="sr-only">GitHub profilime git</span>
                </a>

                <!-- E-posta -->
                <a href="mailto:akadirgumusbas@gmail.com" class="group flex items-center gap-3 rounded-xl px-3 py-2 ring-1 ring-slate-200
                      hover:bg-slate-50 dark:ring-white/10 dark:hover:bg-white/10 transition">
                  <span class="inline-flex items-center justify-center w-9 h-9 rounded-lg
                           bg-emerald-500/10 ring-1 ring-emerald-500/30 group-hover:bg-emerald-500/20">
                    <!-- Mail SVG -->
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-emerald-600" aria-hidden="true">
                      <path fill="currentColor"
                        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                    </svg>
                  </span>
                  <div class="flex-1 text-sm">
                    <div class="font-medium text-gray-900 dark:text-white">E-posta</div>
                    <div class="opacity-70">akadirgumusbas@gmail.com</div>
                  </div>
                  <span class="sr-only">E-posta gönder</span>
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- EĞİTİM (modern, animasyonlu yatay timeline) -->
    <section id="egitim" class=" px-4 bg-gray-50 dark:bg-slate-900/50">
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex items-center justify-between">
          <h2 class="section-heading">Eğitim</h2>
        </div>

        <!-- Desktop: YATAY timeline -->
        <div class="hidden md:block relative overflow-x-auto pb-6 mt-4">
          <!-- animasyonlu track -->
          <div class="absolute left-0 right-0 top-6 h-1 rounded-full bg-slate-200/70 dark:bg-white/10 overflow-hidden">
            <div class="h-full w-full bg-[length:200%_100%] animate-shimmer
                    bg-gradient-to-r from-brand-600/40 via-accent-500/40 to-brand-600/40"></div>
          </div>

          <ul class="min-w-max grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-10 px-1 snap-x mt-10">
            <li v-for="(e, i) in education" :key="'h' + i" class="relative group snap-center">
              <!-- düğüm -->
              <div class="absolute left-1/2 -translate-x-1/2 -top-1">
                <div class="w-4 h-4 rounded-full shadow
                        bg-gradient-to-r from-brand-600 to-accent-500
                        ring-4 ring-accent-500/25 transition-transform duration-300
                        group-hover:scale-110"></div>
              </div>

              <!-- dönem etiketi -->
              <div class="absolute left-1/2 -translate-x-1/2 -top-8">
                <span class="px-2 py-0.5 rounded-full text-[11px] backdrop-blur-sm
                         ring-1 ring-slate-200 bg-white/70 dark:bg-white/10 dark:ring-white/10">
                  {{ e.period }}
                </span>
              </div>

              <!-- kart -->
              <div class="mt-8 rounded-2xl p-5 backdrop-blur-sm
                      ring-1 ring-slate-200/80 dark:ring-white/10
                      bg-white/70 dark:bg-white/5
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-lg hover:ring-accent-500/40">
                <h3 class="font-semibold leading-tight">{{ e.company }}</h3>
                <p class="text-sm opacity-80">{{ e.role }}</p>

                <ul class="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1 list-none">
                  <li v-for="b in e.bullets" :key="b" class="flex gap-2">
                    <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500/80"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>

                <div class="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                  <span v-for="t in e.tech" :key="t" class="chip">{{ t }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Mobile: DİKEY fallback (basit, temiz) -->
        <div class="md:hidden relative pl-8 mt-2">
          <div class="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10"></div>

          <article v-for="(e, i) in education" :key="'v' + i" class="relative mb-4 last:mb-0">


            <div class="rounded-2xl p-5 ring-1 ring-slate-200 dark:ring-white/10
                    bg-white/70 dark:bg-white/5 backdrop-blur-sm">
              <span class="absolute -left-1 top-2 w-3 h-3 rounded-full
                     bg-gradient-to-r from-brand-600 to-accent-500
                     ring-4 ring-accent-500/25"></span>
              <div class="flex items-center justify-between gap-4">
                <h3 class="font-semibold text-lg leading-tight">{{ e.company }}</h3>
                <span class="text-xs px-2 py-1 rounded-full bg-white/70 ring-1 ring-slate-200
                         dark:bg-white/10 dark:ring-white/10">{{ e.period }}</span>
              </div>
              <p class="text-sm opacity-80">{{ e.role }}</p>

              <ul class="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li v-for="b in e.bullets" :key="b">{{ b }}</li>
              </ul>

              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="t in e.tech" :key="t" class="chip">{{ t }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>


    <!-- DENEYİMLER -->
    <section id="deneyimler" class="py-20 px-4">
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex items-center justify-between mb-10">
          <h2 class="section-heading">Deneyimler</h2>
        </div>

        <div class="relative pl-8">
          <!-- dikey çizgi -->
          <div class="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10"></div>

          <article v-for="(e, i) in experiences" :key="i" class="relative mb-8 last:mb-0">
            <!-- düğüm -->
            <span class="absolute -left-1 top-2 w-3 h-3 rounded-full
             bg-gradient-to-r from-brand-600 to-accent-500
             ring-4 ring-accent-500/25"></span>

            <div class="rounded-2xl p-5 bg-slate-100/70 ring-1 ring-slate-200
                    dark:bg-white/5 dark:ring-white/10">
              <div class="flex items-center justify-between gap-4">
                <h3 class="font-semibold text-lg leading-tight">{{ e.company }}</h3>
                <span class="text-xs px-2 py-1 rounded-full bg-white/70 ring-1 ring-slate-200
                         dark:bg-white/10 dark:ring-white/10">{{ e.period }}</span>
              </div>
              <p class="text-sm opacity-80">{{ e.role }}</p>

              <ul class="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li v-for="b in e.bullets" :key="b">{{ b }}</li>
              </ul>

              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="t in e.tech" :key="t" class="text-xs px-2 py-1 rounded-full bg-white/60 ring-1 ring-black/10
                         dark:bg-white/10 dark:ring-white/10">{{ t }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROJELER -->
    <section id="projeler" class="py-20 px-4 bg-gray-50 dark:bg-slate-900/50">
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex items-center justify-between mb-10">
          <h2 class="section-heading">Projeler</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <a v-for="p in homeProjects" :key="p.title" :href="p.to" class="group">
            <div class="h-full flex flex-col rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-white/10
                 bg-slate-100/70 dark:bg-white/5 transition-transform duration-300 group-hover:-translate-y-2">
              <!-- gradient şerit -->
              <div class="h-1 w-full bg-gradient-to-r from-brand-600 to-accent-500"></div>

              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ p.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-2 flex-1">
                  {{ p.desc }}
                </p>

                <div class="mt-3 flex flex-wrap gap-2">
                  <span v-for="s in p.stack" :key="s" class="px-2 py-1 text-xs rounded-full bg-white/70 ring-1 ring-slate-200
                           dark:bg-white/10 dark:ring-white/10">{{ s }}</span>
                </div>

                <div class="mt-4 text-sm text-brand-600 group-hover:underline">Detay →</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: -200% 50%;
  }
}

.animate-shimmer {
  animation: shimmer 8s linear infinite;
}
</style>
