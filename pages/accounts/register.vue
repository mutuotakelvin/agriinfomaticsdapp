<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { reactive } from 'vue';

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
    <div class="container mx-auto w-[50%]">
        <h1>Register to continue</h1>
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>
      
          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
      
          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
    </div>
</template>

