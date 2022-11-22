<template>
    <div class="card-wrapper">
        <div class="card">
            <div class="card-body">
                <div class="icon" v-html="el.icon">
                </div>
                <h3 v-html="el.title"></h3>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/store.js';

export default {
    name: 'ForumCComponent',
    data() {
        return {
            store,
        }
    },
    props: {
        el: Object
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.card-wrapper {
    width: calc(100% / 4);
    cursor: pointer;
    height: 250px;
    padding: 1rem;

    .card {
        width: 100%;
        height: 100%;
        background-color: $white;
        position: relative;
        border-top: 4px solid $blue;
    }

    .card-body {
        @include flexcol;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        .icon {


            background-color: $salmon;
            font-size: 2.7rem;
            width: 4.5rem;
            height: 4.5rem;
            text-align: center;
            line-height: 4.5rem;
            border-radius: 50%;


        }

        h3 {
            color: $dark;
            text-transform: capitalize;
            padding: 1rem;
        }
    }
}
</style>