<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { Info, DollarSign } from 'lucide-vue-next'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
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
</script>

<template>
  <LayoutWrapper>
    <div class="grid grid-cols-3 gap-4 p-1.5">
      <Form class="col-span-2 space-y-4" :validation-schema="formSchema" @submit="onSubmit">
        <div class="w-full rounded-lg bg-background p-3.5 space-y-3.5">
          <div class="space-y-1.5">
            <h4 class="font-semibold text-lg tracking-wide">Product Details</h4>
            <p></p>
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
        <div class="w-full rounded-lg bg-background p-3.5 space-y-3.5">
          <div class="space-y-1.5">
            <h4 class="font-semibold text-lg tracking-wide">Product Price</h4>
            <p></p>
          </div>
          <div class="space-y-3.5">
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
            
          </div>
        </div>
      </Form>
    </div>
  </LayoutWrapper>
</template>
