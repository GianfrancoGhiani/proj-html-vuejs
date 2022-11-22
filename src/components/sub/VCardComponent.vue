<template>
    <div class="wrapper">
        <div class="card-img"><img :src="elem.url" :alt="elem.name"></div>
        <div class="text">
            <h4 class="name">{{ elem.name }}</h4>
            <div class="details">
                <div class="date">{{ elem.date }} | <span>Comments: {{ elem.comments_counter }}</span></div>
                <div class="descr">{{ elem.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/store';
export default {
    //vertical card component
    name: 'VCardComponent',
    props: {
        elem: Object
    },
    data() {
        return {
            store,
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.wrapper {
    cursor: pointer;

    width: calc(100% / 3);
    padding: 1rem;
    text-align: left;
    font-size: .8rem;
    color: $dark;

    .name {
        font-weight: 800;
    }

    .card-img {
        overflow: hidden;

        img {
            max-width: 100%;
            transform: scale(1.25);
            transition: transform .4s ease-in-out .15s;

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    .details {
        font-size: 90%;
        color: $grey;
        font-weight: 600;

        .date {
            margin-bottom: .7rem;

            span {
                color: $dark;
            }
        }
    }
}
</style>