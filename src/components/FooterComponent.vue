<template>
    <div class="container">
        <!-- it is divided into 2 pts:
                links list part -->
        <div class="lists">
            <ul>
                <li class="bold caps">avada tech forum</li>
                <li class="gr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate nihil magnam,
                    ratione
                    deleniti deserunt quidem minima libero labore ea culpa repudiandae aliquid commodi accusamus
                    inventore vel veritatis consequuntur officiis</li>
            </ul>
            <ul v-for="(list, index) in store.footLinks" :key="index" class="chev">
                <li v-for="(item, index) in list" :key="index" :class="index == 0 ? 'bold caps' : 'item'">{{ item }}
                </li>
            </ul>
        </div>
        <!-- bottom bar for copy and socials -->
        <div class="bot-bar">
            <p>&#169; Copyright 2012 - 2022 | Avada Theme by <span class="emph">ThemeFusion</span> | All Rights Reserved
                |
                Powered by <span class="emph">WordPress</span></p>
            <div class="social">
                <span v-for="(elem, index) in store.social" :class="elem.class" :key="index" v-html="elem.icon"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/store';
export default {
    name: 'Footer Component',
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

.container {
    color: $dark;
}


.lists {
    padding: 4rem 0;
    @include flexrow;
    align-items: flex-start;
    width: 100%;

    ul {
        width: calc(100% / 4);
        padding: 0 1rem;

        li {
            font-size: 70%;
            padding: .7rem;
            font-weight: 600;
        }
    }

    .gr {
        color: $grey;
    }

    li.item {
        border-bottom: 1px solid lighten($color: $lightgrey, $amount: 20);
        cursor: pointer;

        &:before {
            font-family: 'Font Awesome 6 Free';
            content: '\f054';
            margin: 0 5px 0 -15px;
            color: $dark;
        }

        &:hover {
            color: $blue;
        }
    }

    .bold {
        font-weight: 700;
        font-size: 1rem;
    }
}

.bot-bar {
    height: 4rem;
    @include flexrow;
    justify-content: space-between;

    p {
        font-size: 70%;
        color: $grey;
        font-weight: 600;

        .emph {
            color: $dark;
        }
    }

    .social {
        span {
            display: inline-block;
            height: 2.5rem;
            font-size: 1rem;
            width: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
            margin: .3rem;
            border-radius: 50%;
            color: $white;
            cursor: pointer;
        }

        .vio {
            background-color: $facebook;

            &:hover {
                background-color: darken($color: $facebook, $amount: 20);
            }
        }

        .lightb {
            background-color: $lightblue;

            &:hover {
                background-color: darken($color: $lightblue, $amount: 20);
            }
        }

        .blue {
            background-color: $blue;

            &:hover {
                background-color: darken($color: $blue, $amount: 20);
            }
        }

        .yt {
            background-color: $youtube;

            &:hover {
                background-color: lighten($color: $youtube, $amount: 20);
            }
        }

    }
}
</style>