<script setup>
import {
  House,
  CircleHelp,
  LogOut,
  Settings,
  User,
  ReceiptText,
  ShoppingBasket,
  ChartColumn
} from 'lucide-vue-next'
import { ref } from 'vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const sidebarLinkList = ref([
  {
    id: '#section1',
    title: 'main',
    linkItems: [
      {
        id: '#link1',
        icon: House,
        title: 'dashboard',
        goToPath: '/',
        activePaths: ['/']
      },
      {
        id: '#link2',
        icon: User,
        title: 'audience',
        childLinks: [
          {
            id: '#sublink1',
            title: 'link 1',
            goToPath: '/',
            activePaths: ['/']
          }
        ]
      },
      {
        id: '#link3',
        icon: ReceiptText,
        title: 'Posts',
        goToPath: '/',
        activePaths: ['/']
      },
      {
        id: '#link4',
        icon: ShoppingBasket,
        title: 'Product',
        goToPath: '/create-product',
        activePaths: ['/']
      },
      {
        id: '#link5',
        icon: ChartColumn,
        title: 'Income',
        childLinks: [
          {
            id: '#sublink',
            title: 'Earnings',
            goToPath: '/',
            activePaths: ['/']
          },
          {
            id: '#sublink3',
            title: 'Refunds',
            goToPath: '/',
            activePaths: ['/']
          },
          {
            id: '#sublink4',
            title: 'Declines',
            goToPath: '/',
            activePaths: ['/']
          },
          {
            id: '#sublink5',
            title: 'Payouts',
            goToPath: '/',
            activePaths: ['/']
          }
        ]
      }
    ]
  },
  {
    id: '#section2',
    title: 'Settings',
    linkItems: [
      {
        id: '#link6',
        icon: Settings,
        title: 'settings',
        childLinks: [
          {
            id: '#sublink6',
            title: 'Available Color',
            goToPath: '/',
            activePaths: ['/']
          }
        ]
      }
    ]
  }
])

const openCollapsible = ref('') // Track the currently open collapsible

const toggleCollapsible = (id) => {
  openCollapsible.value = openCollapsible.value === id ? '' : id
}
</script>

<template>
  <aside class="side--bar">
    <div class="w-full space-y-6">
      <div class="flex items-center gap-3.5">
        <Avatar>
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="space-y-0.5">
          <p class="uppercase text-xs">Product Manager</p>
          <h3 class="text-base font-semibold">Andrew Smith</h3>
        </div>
      </div>
      <ul class="w-full list-none">
        <li
          class="w-full border-t border-solid border-border py-4"
          v-for="(item, index) in sidebarLinkList"
          :key="index"
        >
          <p class="uppercase text-xs tracking-wider pl-1.5">{{ item.title }}</p>
          <ul class="w-full space-y-1.5 mt-2.5">
            <li class="w-full" v-for="(link, linkIndex) in item.linkItems" :key="linkIndex">
              <RouterLink :to="link.goToPath" class="sidebar--link" v-if="link.goToPath">
                <div class="flex items-center gap-3">
                  <component :is="link.icon" v-if="link.icon" />
                  <p class="title">{{ link.title }}</p>
                </div>
              </RouterLink>
              <Collapsible :open="openCollapsible === link.id" v-else>
                <CollapsibleTrigger class="sidebar--link" @click="toggleCollapsible(link.id)">
                  <div class="flex items-center gap-3">
                    <component :is="link.icon" v-if="link.icon" />
                    <p class="title">{{ link.title }}</p>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent class="pl-5 ml-5 border-l pt-2 border-border">
                  <RouterLink
                    :to="child.goToPath"
                    class="sidebar--link"
                    v-for="(child, i) in link.childLinks"
                    :key="i"
                  >
                    <div class="flex items-center gap-3">
                      <p class="title">{{ child.title }}</p>
                    </div>
                  </RouterLink>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="space-y-2">
      <RouterLink to="/" class="sidebar--link">
        <div class="flex items-center gap-3">
          <CircleHelp />
          <p class="title">Help</p>
        </div>
      </RouterLink>
      <RouterLink to="/" class="sidebar--link text-red-600">
        <div class="flex items-center gap-3">
          <LogOut />
          <p class="title">Logout Account</p>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped>
.side--bar {
  @apply w-full h-full border-r border-solid border-border max-w-72 p-6 flex flex-col justify-between  space-y-6 overflow-y-auto;
}

.sidebar--link {
  @apply w-full flex items-center justify-between gap-1 py-2.5 px-3 rounded-lg transition-all;
}

.sidebar--link svg {
  @apply w-5 h-5;
}

.sidebar--link:hover,
.sidebar--link.active {
  @apply bg-accent;
}

.sidebar--link .title {
  @apply capitalize text-base;
}
</style>
