<script setup>
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Info } from 'lucide-vue-next'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import colorJson from '@/lib/colorJson'
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
          <div class="space-y-6">
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
            <FormField v-slot="{ componentField }" name="product_description">
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    v-bind="componentField"
                    placeholder="ex. Description text goes here...

this is pure cotton material"
                    class="resize-none min-h-32"
                  />
                </FormControl>
                <FormDescription>
                  <Info :size="14" class="inline-block mr-1" /> This is your public display for the
                  product description. Please enter this text exactly as it appears here.
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
            <h4 class="font-semibold text-lg tracking-wide">Product Variants</h4>
            <p class="opacity-60 text-sm">About Product variants for customer Choose</p>
          </div>
          <div>
            <ToggleGroup type="multiple" variant="outline" class="flex-wrap justify-start">
              <ToggleGroupItem
                :value="item.colorHexCode"
                v-for="(item, index) in colorJson"
                :key="index"
                class="capitalize"
              >
                <div
                  class="min-w-4 min-h-4 rounded-full mr-2.5"
                  :style="{ backgroundColor: item.colorHexCode }"
                ></div>
                {{ item.color }}
              </ToggleGroupItem>
            </ToggleGroup>
            <div class=""></div>
          </div>
        </div>
      </Form>
    </div>
  </LayoutWrapper>
</template>
