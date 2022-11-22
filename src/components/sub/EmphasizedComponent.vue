<template>
    <div class="big-wrapp" :style=bgImg>
        <div class="wrapper">
            <div class=" sec-title caps"> {{ toph }}</div>
            <h2>{{ h }}</h2>
            <p>{{ pIn }}</p>
            <BtnComponent class="caps" content="read more" chev="true" />
        </div>

    </div>
</template>

<script>
import BtnComponent from './BtnComponent.vue';

export default {
    name: "EmphasizedComponent",
    data() {
        return {
            bgImg: `background-image: url(${this.url})`
        };
    },
    props: {
        toph: String,
        h: String,
        pIn: String,
        url: String
    },
    components: { BtnComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables.scss' as*;
@use '../../assets/style/partials/mixin.scss' as*;

.big-wrapp {
    color: $white;
    min-height: 500px;
    height: 50vh;
    // background-image: url('/img/featured_article_1_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;

    .wrapper {
        position: absolute;
        bottom: 6em;
        left: 6em;
        right: 6em;



        h2 {
            font-size: 3em;
            padding-top: 2em;

            text-transform: capitalize;
        }

        p {
            padding: 2em 0;
            font-size: 90%;
        }

        button {
            background-color: $dark;
        }
    }
}
</style>