<!-- Footer.vue -->
<script setup>
const props = defineProps({
  brand:   { type: String, default: 'Kadir Gümüşbaş' },
  tagline: { type: String, default: 'Sade, performanslı ve sürdürülebilir ürünler.' },
  links:   { type: Array,  default: () => ([
    { label: 'Hakkımda', href: '#hakkimda' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'İletişim', href: '#iletisim' },
  ])},
  social:  { type: Object, default: () => ({
    linkedin: 'https://www.linkedin.com/in/abdulkadir-gümüşbaş-5855541ba/',
    github:   'https://github.com/kadirgumusbas',
    mail:     'akadirgumusbas@gmail.com',
  })},
});
const year = new Date().getFullYear();
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<template>
  <footer class="mt-20 border-t border-slate-200 bg-white/80 backdrop-blur dark:bg-slate-900/60 dark:border-white/10">
    <div class="container mx-auto max-w-screen-xl px-4 py-10">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Sol: Marka -->
        <div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">{{ brand }}</div>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300/80">
            {{ tagline }}
          </p>
        </div>

        <!-- Orta: Hızlı bağlantılar -->
        <nav aria-label="Alt menü" class="md:justify-self-center">
          <ul class="grid gap-2 text-sm">
            <li v-for="(l, i) in links" :key="i">
              <a :href="l.href"
                 class="hover:underline underline-offset-4 text-gray-700 dark:text-gray-200">
                {{ l.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Sağ: Sosyal -->
        <div class="md:justify-self-end">
          <div class="flex items-center gap-3">
            <!-- LinkedIn -->
            <a :href="social.linkedin" target="_blank" rel="noopener"
               class="group inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-slate-200 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0A66C2]" aria-hidden="true">
                <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.33V9.75h3.42v1.47h.05c.48-.9 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.49v5.6ZM5.34 8.28a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9.75h3.56v10.7Z"/>
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>

            <!-- GitHub -->
            <a :href="social.github" target="_blank" rel="noopener"
               class="group inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-slate-200 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-900 dark:text-white" aria-hidden="true">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.57v-2.1c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.53.11-3.19 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.66.23 2.89.11 3.19.75.82 1.2 1.87 1.2 3.15 0 4.52-2.74 5.5-5.36 5.79.43.37.82 1.1.82 2.22v3.29c0 .32.21.68.81.56A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
              <span class="sr-only">GitHub</span>
            </a>

            <!-- Mail -->
            <a :href="`mailto:${social.mail}`"
               class="group inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-slate-200 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-emerald-600" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
              <span class="sr-only">E-posta</span>
            </a>

            <!-- Yukarı -->
            <button @click="toTop"
                    class="ml-1 inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-slate-200 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                    aria-label="Yukarı dön">
              <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true">
                <path fill="currentColor" d="M7 14l5-5 5 5H7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300/80">
        <p>© {{ year }} {{ brand }}. Tüm hakları saklıdır.</p>
        <p class="opacity-80">Built with Vue 3 & Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>
