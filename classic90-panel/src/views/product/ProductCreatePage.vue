<script setup>
import { toTypedSchema } from '@vee-validate/zod'
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
    username: z.string().min(2).max(50)
  })
)

function onSubmit(values) {
  console.log('Form submitted!', values)
}
</script>

<template>
  <LayoutWrapper>
    <div class="grid grid-cols-3 gap-4">
      <Form class="col-span-2" :validation-schema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormDescription> This is your public display name. </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit"> Submit </Button>
      </Form>
    </div>
  </LayoutWrapper>
</template>
