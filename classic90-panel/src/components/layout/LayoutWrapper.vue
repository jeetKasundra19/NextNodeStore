<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import SideBar from './SideBar.vue'
import Header from './Header.vue'
</script>

<template>
  <main class="w-full h-dvh flex items-stretch overflow-hidden">
    <SideBar />
    <div class="w-full h-full">
      <Header />
      <ScrollArea class="w-full h-full bg-accent pb-12">
        <div class="p-2.5">
          <slot></slot>
        </div>
      </ScrollArea>
    </div>
  </main>
</template>
