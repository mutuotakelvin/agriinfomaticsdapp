<template>
    <div class="m-6 p-6 flex flex-wrap gap-4">
        <div class="rounded-lg p-2 bg-white w-40" v-for="(data, index) in agriData" :key="index">
            <h1 class="text-black">{{ data.product }}</h1>
            <p class="text-black">Crop yeild: {{ data.yield }}</p>
            <p class="text-black">Price per unit: {{ data.price_per_unit }}</p>
            <div class="mt-4 flex justify-end">
                <button class="bg-green-500 text-white p-1 rounded-lg" @click="viewDetails(data.id)">View</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import agriData from './../../constants/data'

const router = useRouter()

const viewDetails = (id) => {
    router.push(`/produce/${id}`)
}

</script>