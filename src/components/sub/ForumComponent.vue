<template>
    <div class="grey">
        <div class="container">
            <div class="head">
                <div class="sec-title caps">phasellus eget metus</div>
                <h2>Forum Sections</h2>
                <LineBreakComponent />
            </div>
            <div class="list">
                <ForumCComponent v-for="(icon, index) in store.forumIcons" :key="index" :el=icon />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/store.js';
import ForumCComponent from './utility/ForumCComponent.vue';
import LineBreakComponent from './utility/LineBreakComponent.vue';


export default {
    name: "ForumComponent",
    data() {
        return {
            store,
        };
    },
    components: { ForumCComponent, LineBreakComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.bg {
    background-color: $notwhite;
}

.container {
    padding: 5rem 0;

    .head {
        color: $dark;
        @include flexcol;
        align-items: center;
        padding-bottom: 2rem;


        h2 {
            margin: 2rem
        }
    }

    .list {
        @include flexrow;
        flex-wrap: wrap;

    }
}
</style>