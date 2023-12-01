<template>
    <div class="flex justify-center items-center">
        <div class="flex flex-col py-4">
            <h1 class="text-center">Verify your identity</h1>
            <div>
                <div v-if="showInput" class="flex flex-col gap-6">
                    <input  type="password" class="rounded-full px-2 border focus:border-green-400 h-16" />
                        <UButton @click="verify" label="Verify" />
                </div>
                <div v-else>
                    <UButton @click="showButton" label="Click to verify your account" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const showInput = ref(false)
const showButton = () => {
    showInput.value = true
}

const status = ref(false)


const router = useRouter()
const verify = () => {
    status.value = true
    router.push('/dashboard')
}
</script>