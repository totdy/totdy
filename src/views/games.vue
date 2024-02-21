<template>
    <div class="allGames">
        <h1 class="text-2xl mb-5">Games</h1>
        <div class="flex flex-row flex-wrap gap-5 justify-evenly">
            <router-link v-for="game in games" :key="game.id" :to="{ name: 'game', params: { gameSlug: game.slug } }"
                class="flex flex-col flex-wrap gap-y-3 md:max-w-72 max-w-full rounded-xl overflow-hidden ">
                <div class="rounded-xl overflow-hidden h-52">
                    <img :src="`/images/${game.heroImage}`" :alt="game.name"
                        class="transition-all w-full h-auto relative md:-top-1/4 -top-1/2 hover:scale-150 ">
                </div>
                <div class="flex flex-col px-2 gap-y-2">
                    <div class=" text-xl">{{ game.name }}</div>
                    <div class="flex flex-row flex-wrap gap-1">
                        <div v-for="tag in game.genre"
                            class="border border-gray-400 text-gray-400 rounded-xl w-fit px-2 py-1">{{ tag }}</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

import sourceData from '../data.json';

export default {
    data() {
        return {
            games: sourceData.games
        };
    }
}
</script>