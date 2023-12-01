<template>
    <div class="container mx-auto mt-6 p-2">
        <h1 class="text-center text-3xl leading-5 -tracking-wider">{{agridata[0].product}}</h1>
        <div class="flex justify-center items-center mt-2">
            <div class="py-12 ">
                <h2 class="mt-4 leading-6 underline underline-offset-8">Pest affecting this type of {{ agridata[0].category }} in {{ agridata[0].region }} region</h2>
                <p class="leading-6">{{ agridata[0].pest }}</p>
                <p class="underline underline-offset-8 leading-6">Ways of preventing {{ agridata[0].pest }} </p>
                <p class="text-align leading-10" v-for="(steps, index) in agridata[0].planting_steps">
                    - {{ steps }}
                </p>
                <p>Farmers are adviced to {{ agridata[0].planting_advice }}</p>
                <div class="mt-8 flex justify-end">
                    <UButton @click="back" label="Back" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import agriData from './../../constants/data'

const route = useRoute()
const router = useRouter()
const index = route.params.id

const agridata = agriData.filter(data => data.id == index)
const back = () => {
    router.push('/dashboard')
}
</script>