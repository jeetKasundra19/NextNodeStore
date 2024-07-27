<script>
import { ref } from 'vue'

const sidebarLinkList = ref([
  {
    id: '#section1',
    title: 'main',
    linkItems: [
      {
        id: '#link1',
        icon: '',
        title: 'dashboard',
        goToPath: '/',
        activePaths: ['/']
      },
      {
        id: '#link2',
        icon: '',
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
        icon: '',
        title: 'Posts',
        goToPath: '/',
        activePaths: ['/']
      },
      {
        id: '#link4',
        icon: '',
        title: 'Schedules',
        goToPath: '/',
        activePaths: ['/']
      },
      {
        id: '#link5',
        icon: '',
        title: 'Income',
        childLinks: [
          {
            id: '#sublink2',
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
        icon: '',
        title: 'settings',
        childLinks: [
          {
            id: '#sublink6',
            title: 'Profile',
            goToPath: '/',
            activePaths: ['/']
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <aside class="side--bar">
    <div class="flex items-center gap-3">
        
        <div></div>
    </div>
  </aside>
</template>

<style scoped>
.side--bar {
  @apply w-full h-full border-r border-solid border-border max-w-64 p-6 flex flex-col justify-between  space-y-6;
}
</style>
