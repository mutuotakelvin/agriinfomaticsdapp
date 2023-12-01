<template>
    <div class="flex justify-between container mx-auto m-4 p-4 items-center">
        <h1 class="text-2xl font-bold">Agi<span class="text-green-500">Info</span></h1>
        <div class="flex gap-4 items-center">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <Button class="rounded-lg px-3 bg-green-400 text-white" @click="changeStatus">
                {{ status == true ? 'Verified' : 'Verify' }}
            </Button>
        </div>
    </div>
</template>
<script setup>
const status = ref(false)
const router = useRouter()

const changeStatus = () => {
    status.value = true
    router.push('/accounts/verification')
}
</script>