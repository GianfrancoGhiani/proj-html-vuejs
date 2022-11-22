<template>
    <section>
        <JumboComponent />
    </section>
    <section>
        <FirstSecComponent />
    </section>
    <section>
        <SecondSecComponent />
    </section>
    <section>
        <EmphasizedComponent toph="featured article" h="cras malesuada et orci eget pharetra" :pIn="p" />
    </section>

</template>

<script>

import FirstSecComponent from './sub/FirstSecComponent.vue';
import SecondSecComponent from './sub/SecondSecComponent.vue';

import JumboComponent from './sub/JumboComponent.vue';
import EmphasizedComponent from './sub/EmphasizedComponent.vue';
import { store } from '../assets/store.js'
export default {
    name: "MainComponent",
    components: { JumboComponent, FirstSecComponent, SecondSecComponent, EmphasizedComponent },
    data() {
        return {
            store,
            p: 'In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed blandit dui, dolor at bibendum sadips ets ipsums dolores ficilis uns leo lectus.'

        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;
@use '../assets/style/partials/mixin' as*;
</style>