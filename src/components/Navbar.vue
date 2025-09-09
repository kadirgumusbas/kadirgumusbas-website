<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/85 dark:bg-gray-900/70 backdrop-blur border-b border-black/5 dark:border-white/10' : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Marka -->
        <RouterLink to="/" class="text-2xl font-bold">
          <span class="highlight">K</span>adir <span class="highlight">G</span>ümüşbaş
        </RouterLink>

        <!-- Mobil menü -->
        <button class="md:hidden focus:outline-none" @click="open = !open" aria-label="Menü">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Desktop menü -->
        <ul class="hidden md:flex items-center gap-6">
          <li><a href="" class="nav-link">Ana Sayfa</a></li>
          <li><a href="#hakkimda" class="nav-link">Hakkımda</a></li>
          <li><a href="#deneyimler" class="nav-link">Deneyimler</a></li>
          <li><a href="#projeler" class="nav-link">Projeler</a></li>
          <li>
            <a href="/abdulkadirGumusbas.pdf" download
               class="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 ring-1 ring-brand-600/20 shadow-sm">
              Özgeçmiş indir
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobil panel -->
      <div v-if="open" class="md:hidden pt-3">
        <ul class="flex flex-col gap-2 border-t border-black/5 dark:border-white/10 pt-3">
          <li><RouterLink to="/" class="nav-link" @click="open=false">Ana Sayfa</RouterLink></li>
          <li><RouterLink to="/about" class="nav-link" @click="open=false">Hakkımda</RouterLink></li>
          <li><RouterLink to="/projects" class="nav-link" @click="open=false">Projeler</RouterLink></li>
          <li><RouterLink to="/skills" class="nav-link" @click="open=false">Yetenekler</RouterLink></li>
          <li>
            <a href="/abdulkadirGumusbas.pdf" download
               class="mt-1 inline-flex w-fit px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500">
              Özgeçmiş indir
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const open = ref(false)
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 8 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
