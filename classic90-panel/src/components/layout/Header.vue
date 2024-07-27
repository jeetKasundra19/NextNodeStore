<script setup>
import { ChevronRight, ChevronLeft } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/theme/ModeToggle.vue'
</script>

<template>
  <header class="header">
    <div class="flex items-stretch gap-2">
      <Button variant="outline" size="icon">
        <ChevronLeft class="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight class="w-4 h-4" />
      </Button>
    </div>
    <div class="flex items-stretch gap-2">
      <ModeToggle />
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply w-full border-b border-solid border-border flex items-center justify-between gap-1.5 py-1.5 px-2.5;
}
</style>
