<template>
    <div class="allGames">
        <h1>{{ game.name }}</h1>
        <div class="mediaCarousel">
            <div class="gameTrailer">
                <iframe width="640" height="360" :src="`${game.trailerUrl}`"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="gameScreenshot">

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