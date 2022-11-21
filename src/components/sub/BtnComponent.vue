<template>
    <button :class="class">{{ content }} <i v-show="chev" class="fa-solid fa-chevron-right"></i></button>
</template>

<script>
import { includeBooleanAttr } from '@vue/shared';
import { store } from '../../assets/store';
export default {
    name: "BtnComponent",
    props: {
        class: String,
        content: String,
        chev: Boolean
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
    padding: 0.5rem 0.7rem;
}
</style>