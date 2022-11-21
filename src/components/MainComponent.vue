<template>
    <JumboComponent />
    <FirstSecComponent />
    <SecondSecComponent />
</template>

<script>
import FirstSecComponent from './sub/FirstSecComponent.vue';
import SecondSecComponent from './sub/SecondSecComponent.vue';

import JumboComponent from './sub/JumboComponent.vue';

export default {
    name: "MainComponent",
    components: { JumboComponent, FirstSecComponent, SecondSecComponent }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;
@use '../assets/style/partials/mixin' as*;
</style>