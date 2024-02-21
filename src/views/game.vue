<template>
    <div class="game flex flex-col gap-y-5">
        <h1 class="text-2xl">{{ game.name }}</h1>
        <h2 class="text-lg">{{ game.shortDescription }}</h2>
        <div class="overflow-auto snap-x">
            <div class="flex flex-row *:shrink-0 *:snap-center divide-x-2">
                <iframe width="576" height="324" :src="`${game.trailerUrl}`" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <div class=" max-w-xl" v-for="screenshot in game.screenshots">
                    <img :src="`/images/screenshots/${screenshot}`" alt="game screenshot">
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row *:basis-1/2">
            <div>
                {{ game.longDescription }}
            </div>
            <div>
                <div>genre {{ game.genre }}</div>
                <div>engine {{ game.engine }}</div>
                <div>localization {{ game.localization }}</div>
                <div>platform {{ game.platform }}</div>
            </div>
        </div>
    </div>
</template>

<script>

import sourceData from '../data.json';

export default {
    computed: {
        destination() {
            return this.$route.params.gameSlug;
        },
        game() {
            return sourceData.games.find(game => game.slug === this.destination);
        }
    }
}

</script>