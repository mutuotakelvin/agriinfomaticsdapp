<template>
    <div class="container mx-auto">
        <div class="flex items-center px-4 m-4">
            <div class="w-[50%]">
                <h1 class="text-3xl font-semibold w-[40%] tracking-widest leading-10">Blockchain for <span class="text-yellow-400">Sustainable</span> Agriculture</h1>
                <UButton>Get Started</UButton>
            </div>
            <div class="w-[50%] h-80">
                <img src="../assets/images/farm.jpg" class=""/>
            </div>
        </div>
        <div class="flex  items-center px-4 m-4 mt-8">
            <div class="w-[50%] h-80">
                <img src="../assets/images/farm1.jpg" class=""/>
            </div>
            <div class="w-[50%] flex justify-end">
                <h1 class="text-3xl font-semibold w-[40%] tracking-widest leading-10">Blockchain for <span class="text-yellow-400">Sustainable</span> Agriculture</h1>
            </div>
        </div>
        <div class="flex items-center px-4 m-4 mb-5">
            <div class="w-[50%]">
                <h1 class="text-3xl font-semibold w-[40%] tracking-widest leading-10">Blockchain for <span class="text-yellow-400">Sustainable</span> Agriculture</h1>
            </div>
            <div class="w-[50%] h-80">
                <img src="../assets/images/farm2.jpg" class=""/>
            </div>
        </div>
        <div class="mt-4 my-5 py-2 ">
            <h2 class="text-center text-2xl font-medium">FQA</h2>
            <Accordian />
        </div>
    </div>
</template>
<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>