<template>
    <section id="news">
        <div class="container">
            <div class="head">
                <div class="sec-title caps">phasellus eget metus</div>
                <h2>All the latest news</h2>
                <LineBreakComponent />
            </div>
            <div class="card-list">
                <SCardComponent v-for="(news, index) in store.products" :key="index" :elem=news />
            </div>
        </div>

    </section>
</template>

<script>
import LineBreakComponent from './LineBreakComponent.vue';
import SCardComponent from './SCardComponent.vue';
import { store } from '../../assets/store';


export default {
    name: "SecondSecComponent",
    components: { LineBreakComponent, SCardComponent },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.container {
    color: $dark;
    padding: 4rem 0;
    text-align: center;

    .head {
        @include flexcol;
        align-items: center;

        h2 {
            padding: 1.5rem;
        }

    }

    .card-list {
        @include flexrow;
        padding-top: 3rem;
    }
}
</style>