<template>
    <div class="allGames">
        <h1>Games</h1>
        <div class="game">
            <router-link v-for="game in games" :key="game.id" :to="game.slug" class="game-card">                
                <div class="game-img">
                    <img :src="`/images/${game.heroImage}`" :alt="game.name">
                </div>
                <div class="game-details">
                    <div class="game-title">{{ game.name }}</div>
                    <div class="game-tags">
                        <div v-for="tag in game.genre">{{ tag }}</div>
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