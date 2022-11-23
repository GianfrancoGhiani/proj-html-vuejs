<template>
    <main>
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
        <section>
            <SubscribeComponent />
        </section>
    </main>
</template>

<script>

import FirstSecComponent from './sub/FirstSecComponent.vue';
import SecondSecComponent from './sub/SecondSecComponent.vue';
import JumboComponent from './sub/JumboComponent.vue';
import { store } from '../assets/store.js'
import TutorialComponent from './sub/TutorialComponent.vue';
import RedirectComponent from './sub/utility/RedirectComponent.vue';
import ForumComponent from './sub/ForumComponent.vue';
import JoinComponent from './sub/JoinComponent.vue';
import SubscribeComponent from './sub/SubscribeComponent.vue';
export default {
    name: "MainComponent",
    components: { JumboComponent, FirstSecComponent, SecondSecComponent, TutorialComponent, RedirectComponent, ForumComponent, JoinComponent, SubscribeComponent },
    data() {
        return {
            store,
            scrolling: 0,
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;
@use '../assets/style/partials/mixin' as*;
</style>