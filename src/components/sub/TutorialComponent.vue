<template>
    <div class="container" id="tutorial">
        <div class="wrapper ">
            <section class="big">
                <EmphasizedComponent toph="reviewed product"
                    h="mauris viverra atisan ipsum eget felis prims efficitur varius" :pIn="p"
                    url="/img/featured_article_2_bg.jpg" />
            </section>
            <section class="list">
                <h3>Tutorials &amp; Guides</h3>
                <LineBreakComponent />
                <div class="card-list">
                    <HCardComponent v-for="(elem, index) in store.tutorial" :key="index" :elem="elem" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/store.js';
import EmphasizedComponent from './EmphasizedComponent.vue';
import LineBreakComponent from './LineBreakComponent.vue';
import HCardComponent from './HCardComponent.vue';


export default {
    name: 'TutorialComponent',
    components: { EmphasizedComponent, LineBreakComponent, HCardComponent },
    data() {
        return {
            store,
            p: 'In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed blandit dui, dolor at bibendum.'
        }
    },
}   
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

#tutorial {
    margin: 4rem auto;

}

.wrapper {

    @include flexrow;
    align-items: flex-start;

    .big {
        width: 65%;
        font-size: 80%;
    }

    .list {
        padding-left: 2em;
        @include flexcol;

        width: 35%;
        color: $dark;

        h3 {
            padding: 1.5em 0;
            font-size: 1.5rem;
        }

        .card-list {
            max-width: 100%;
            font-size: 70%;
            margin-top: 1rem;
        }
    }
}
</style>