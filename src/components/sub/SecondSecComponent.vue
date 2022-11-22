<template>
    <section id="news">
        <div class="container">
            <div class="head">
                <div class="sec-title caps">phasellus eget metus</div>
                <h2>All the latest news</h2>
                <LineBreakComponent />
            </div>
            <div class="card-list">
                <VCardComponent v-for="(news, index) in store.products.news1" :key="index" :elem=news />
            </div>
        </div>
        <div class="sec-part">
            <div class="container">
                <EmphasizedComponent toph="featured article" h="cras malesuada et orci eget pharetra" :pIn="p"
                    url="/img/featured_article_1_bg.jpg" />
            </div>
            <div class="container">
                <div class="card-list">
                    <VCardComponent v-for="(news, index) in store.products.news2" :key="index" :elem="news" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LineBreakComponent from './LineBreakComponent.vue';
import VCardComponent from './VCardComponent.vue';
import EmphasizedComponent from './EmphasizedComponent.vue';

import { store } from '../../assets/store';


export default {
    name: "SecondSecComponent",
    components: { LineBreakComponent, VCardComponent, EmphasizedComponent },
    data() {
        return {
            store,
            p: 'In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed blandit dui, dolor at bibendum sadips ets ipsums dolores ficilis uns leo lectus.'

        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

#news {
    margin: 4rem 0;
}

.container {

    padding: 2rem 0;


    .head {
        @include flexcol;
        align-items: center;
        color: $dark;

        h2 {
            padding: 1.5rem;
        }

    }

    .card-list {
        margin: 0 -1rem;
        @include flexrow;
        align-items: flex-start;
        padding-top: 3rem;
    }
}
</style>