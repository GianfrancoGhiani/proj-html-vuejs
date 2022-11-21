<template>
    <section class="top-bar">
        <div class="container">
            <div class="logo"><img src="/img/logo.png" alt="logo"></div>
            <ul class="menu">
                <li v-for="(elem, index) in store.topMenu" :key="index" :class="index === 0 ? 'active' : ''"><a
                        href="#">{{ elem }}</a>
                    <div></div>
                </li>
                <li>
                    <BtnComponent class="caps" content="join us" :chev=false />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/store';
import BtnComponent from './sub/BtnComponent.vue';
export default {
    name: "Header Component",
    data() {
        return {
            store,
        };
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

                position: relative;

                padding: 0 0.7rem;
                text-transform: capitalize;

                &.active {
                    div {
                        position: absolute;
                        top: 4rem;
                        left: 0;
                        width: 80px;
                        height: 28px;
                        // background: radial-gradient(40.25% 100% at 50% 0%, #74DEF4 0%, #74DEF4 99.99%, transparent 100%);
                    }
                }

                a {
                    line-height: 4rem;
                }

                button {
                    background-color: $dark;
                }
            }

        }
    }
}
</style>