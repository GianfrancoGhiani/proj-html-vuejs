<template>
    <!-- logo+navbar section -->
    <section class="top-bar">
        <div class="container">
            <div class="logo"><img src="/img/logo.png" alt="logo"></div>
            <ul class="menu">
                <li v-for="(elem, index) in store.topMenu" :key="index" :class="index === 0 ? 'active' : 'item'"><a
                        href="#">{{ elem }}</a>
                    <div></div>
                </li>
                <li>
                    <BtnComponent class="caps" content="join us" chev="false" />
                </li>
            </ul>
        </div>
    </section>
    <!-- scroll to top button -->
    <section>
        <div class="btn-to-top">
            <button @click="store.scrollTo()" :style="store.displaying()">
                <i class=" fa-solid fa-chevron-up"></i></button>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/store';
import BtnComponent from './sub/utility/BtnComponent.vue';
export default {
    name: "Header Component",
    data() {
        return {
            store,
        };
    },

    methods: {



    },
    components: { BtnComponent }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;
@use '../assets/style/partials/mixin' as*;

.top-bar {
    height: 4rem;
    background-color: $blue;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5000;


    .container {
        @include flexrow;
        justify-content: space-between;
        height: 100%;

        .logo {
            height: 3rem;

            img {
                max-height: 100%;
            }
        }

        .menu {
            @include flexrow;

            li {
                font-size: 90%;
                cursor: pointer;

                position: relative;
                line-height: 4rem;

                padding: 0 0.7rem;
                text-transform: capitalize;
                transition: transform 200ms linear;

                &.item:hover {
                    transform: scale(1.05);

                }

                &.active {

                    box-shadow: inset 4px 0px 3px -2px $lightblue, inset -4px 0px 3px -2px $lightblue;

                    div {

                        position: absolute;
                        top: 4rem;
                        left: 0;
                        width: 70px;
                        height: 10px;
                        background: conic-gradient(from 0deg at 50% 100%, #27AABE 0deg, #27AABE 50deg, rgba(41, 171, 190, 0) 50deg, rgba(217, 217, 217, 0) 310deg, #27AABE 310deg, #27AABE 360deg);
                    }
                }

                a {
                    line-height: 4rem;
                }


            }

        }


    }

    .caps {
        background-color: $dark;
    }
}

.btn-to-top {
    position: fixed;
    bottom: 0;
    right: 2rem;

    button {
        cursor: pointer;

        border: 0;
        padding: 1rem;
        border-radius: .5rem .5rem 0 0;
        background-color: $lightgrey;
        transition: background-color 200ms, color 200ms;

        &:hover {
            background-color: $grey;
            color: $white;
        }
    }


}
</style>