<template>
    <button :class="class">{{ content }} <i v-show="chev == 'true'" class="fa-solid fa-chevron-right"></i></button>
</template>

<script>
import { includeBooleanAttr } from '@vue/shared';
import { store } from '../../assets/store';
export default {
    name: "BtnComponent",
    props: {
        class: String,
        content: String,
        chev: String
    },
    data() {
        return {
            store,
        };
    },
    components: { includeBooleanAttr }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

button {
    cursor: pointer;
    color: $white;
    padding: .7em 1.5em;
}
</style>