<template>
    <!-- forum card component -->
    <div class="card-wrapper">
        <div class="card">
            <div class="card-body">
                <div class="ico-wrap">
                    <div class="icon" v-html="el.icon">
                    </div>
                </div>
                <h3 v-html="el.title"></h3>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../../assets/store.js';

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
@use '../../../assets/style/partials/variables' as*;
@use '../../../assets/style/partials/mixin' as*;

@keyframes iconover {
    0% {
        background: radial-gradient(23.65% 59.72% at 50% 50%, $salmon 60.42%, transparent 60.43%);
    }

    25% {
        background: radial-gradient(23.65% 59.72% at 50% 50%, transparent 55.73%, $salmon 69.79%, transparent 83.33%)
    }

    50% {
        background: radial-gradient(23.65% 59.72% at 50% 50%, transparent 63.54%, $salmon 69.79%, transparent 83.33%);
    }

    75% {
        background: radial-gradient(23.65% 59.72% at 50% 50%, transparent 67.71%, $salmon 69.79%, transparent 73.44%);

    }

    100% {
        background: radial-gradient(23.65% 59.72% at 50% 50%, transparent 61.98%, rgba(252, 140, 94, 0.63) 69.79%, transparent 73.44%);
    }
}

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

        .ico-wrap {
            height: 6.5rem;

            width: 100%;
            @include flexrow;
            justify-content: center;
        }

        &:hover .ico-wrap {
            animation: iconover .5s linear;
        }

        .icon {


            background-color: $salmon;
            font-size: 2.7rem;
            width: 4.5rem;
            height: 4.5rem;
            text-align: center;
            line-height: 4.5rem;
            border-radius: 50%;


        }

        &:hover h3 {
            color: $salmon;
        }

        h3 {
            color: $dark;
            text-transform: capitalize;
            padding: 1rem;
        }
    }
}
</style>