<script setup>
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Info } from 'lucide-vue-next'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

const formSchema = toTypedSchema(
  z.object({
    product_name: z.string().min(2).max(50)
  })
)

function onSubmit(values) {
  console.log('Form submitted!', values)
}

const totalSizesList = ref([
  {
    id: 'size_small',
    size: 'small (s)'
  },
  {
    id: 'size_medium',
    size: 'medium (m)'
  },
  {
    id: 'size_large',
    size: 'Large (l)'
  },
  {
    id: 'size_xl',
    size: 'extra large (XL)'
  },
  {
    id: 'size_xxl',
    size: 'double extra (XXl)'
  }
])
</script>

<template>
  <LayoutWrapper>
    <div class="grid grid-cols-3 gap-4 p-1.5">
      <Form class="col-span-2 space-y-4" :validation-schema="formSchema" @submit="onSubmit">
        <div
          class="w-full rounded-lg bg-background p-3.5 space-y-5 border border-solid border-border"
        >
          <div class="space-y-1">
            <h4 class="font-semibold text-lg tracking-wide">Product Details</h4>
            <p class="opacity-60 text-sm">About Product information for customer experience</p>
          </div>
          <div>
            <FormField v-slot="{ componentField }" name="product_name">
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="ex. Denim Skirt..." v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  <Info :size="14" class="inline-block mr-1" /> This is your public display for the
                  Product name. To display the name in uppercase or lowercase, enter it here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        <div
          class="w-full rounded-lg bg-background p-3.5 space-y-5 border border-solid border-border"
        >
          <div class="space-y-1">
            <h4 class="font-semibold text-lg tracking-wide">Product Price</h4>
            <p class="opacity-60 text-sm">About Product Price for customer experience</p>
          </div>
          <div class="space-y-8">
            <div class="grid grid-cols-2 gap-4">
              <FormField v-slot="{ componentField }" name="product_original_price">
                <FormItem>
                  <FormLabel>Product Original Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="ex. 120" v-bind="componentField" />
                  </FormControl>
                  <FormDescription>
                    <Info :size="14" class="inline-block mr-1" /> Enter your product's original
                    price here. This price will be displayed in Dollars ($).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="product_discounted_price">
                <FormItem>
                  <FormLabel>Product Discounted Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="ex. 80" v-bind="componentField" />
                  </FormControl>
                  <FormDescription>
                    <Info :size="14" class="inline-block mr-1" /> Enter your product's discounted
                    price here. This price will be displayed in Dollars ($).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <p class="text-base max-w-[640px]">
                  This is option is if customer seen this product and again come this product price
                  drop as per set limit (set your limited price)
                </p>
                <Switch />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <FormField v-slot="{ componentField }" name="product_original_price">
                  <FormItem>
                    <FormLabel>Set Limited Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex. 120" v-bind="componentField" />
                    </FormControl>
                    <FormDescription>
                      <Info :size="14" class="inline-block mr-1" /> this price show this limited
                      price show in customer in product Original to this price(in discounted price)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full rounded-lg bg-background p-3.5 space-y-5 border border-solid border-border"
        >
          <div class="space-y-1">
            <h4 class="font-semibold text-lg tracking-wide">Product Size</h4>
            <p class="opacity-60 text-sm">About Product Size for customer experience</p>
          </div>
          <div class="space-y-4">
            <ToggleGroup type="multiple" class="justify-start">
              <ToggleGroupItem
                class="border border-border uppercase tracking-wide text-xs px-4 h-auto py-1.5"
                :value="size.id"
                v-for="(size, i) in totalSizesList"
                :key="i"
              >
                {{ size.size }}
              </ToggleGroupItem>
            </ToggleGroup>
            <ul class="space-y-2 bg-accent rounded-lg border border-border px-3.5 py-4">
              <li class="grid grid-cols-3 gap-4">
                <FormField v-slot="{ componentField }" name="product_name">
                  <FormItem>
                    <FormLabel>Size Quality</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex. 40..." v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="product_name">
                  <FormItem>
                    <FormLabel>Size Original Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex. 150..." v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="product_name">
                  <FormItem>
                    <FormLabel>Size Discounted Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex. 120..." v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </li>
            </ul>
          </div>
        </div>
      </Form>
    </div>
  </LayoutWrapper>
</template>
