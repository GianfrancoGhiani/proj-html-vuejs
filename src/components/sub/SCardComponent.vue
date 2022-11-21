<template>
    <div class="wrapper">
        <img :src="elem.url" :alt="elem.name">
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
    name: 'SCardComponent',
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
    width: calc(100% / 3);
    padding: 1rem;
    text-align: left;

    img {
        max-width: 100%;
    }

    .details {
        font-size: 90%;
        color: $grey;
        font-weight: 500;

        .date {
            margin-bottom: .7rem;

            span {
                color: $dark;
            }
        }
    }
}
</style>