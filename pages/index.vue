<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products" :key:any="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'

const products = [
  { id: 1, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/7/800/800', price: 9999 },
  { id: 2, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/71/800/800', price: 9999 },
  { id: 3, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/72/800/800', price: 9999 },
  { id: 4, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/73/800/800', price: 9999 },
  { id: 5, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/74/800/800', price: 9999 },
  { id: 6, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/75/800/800', price: 9999 },
  { id: 7, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/76/800/800', price: 9999 },
  { id: 8, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/77/800/800', price: 9999 },
  { id: 9, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/78/800/800', price: 9999 },
  { id: 10, title: ' Title 1', description: 'This is a description', url: 'https://picsum.photos/id/79/800/800', price: 9999 },
]
</script>
