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
        <TutorialComponent />
    </section>
    <section>
        <RedirectComponent redirect="read our blog" />
    </section>
    <section>
        <ForumComponent />
    </section>
    <section>
        <RedirectComponent redirect="go to our forum" />
    </section>
    <section>
        <JoinComponent />
    </section>
</template>

<script>

import FirstSecComponent from './sub/FirstSecComponent.vue';
import SecondSecComponent from './sub/SecondSecComponent.vue';

import JumboComponent from './sub/JumboComponent.vue';
import EmphasizedComponent from './sub/EmphasizedComponent.vue';
import { store } from '../assets/store.js'
import SCardComponent from './sub/SCardComponent.vue';
import TutorialComponent from './sub/TutorialComponent.vue';
import RedirectComponent from './sub/RedirectComponent.vue';
import ForumComponent from './sub/ForumComponent.vue';
import JoinComponent from './sub/JoinComponent.vue';
export default {
    name: "MainComponent",
    components: { JumboComponent, FirstSecComponent, SecondSecComponent, EmphasizedComponent, SCardComponent, TutorialComponent, RedirectComponent, ForumComponent, JoinComponent },
    data() {
        return {
            store,


        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;
@use '../assets/style/partials/mixin' as*;
</style>