<template>
    <div class="container">
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
        return {};
    },
    props: {
        toph: String,
        h: String,
        pIn: String
    },
    components: { BtnComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables.scss' as*;
@use '../../assets/style/partials/mixin.scss' as*;

.container {
    min-height: 500px;
    height: 50vh;
    background-image: url('/img/featured_article_1_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 2rem auto;
    position: relative;

    .wrapper {
        position: absolute;
        bottom: 6rem;
        left: 6rem;
        right: 6rem;



        h2 {
            font-size: 3rem;
            padding: 2rem 0;

            text-transform: capitalize;
        }

        p {
            padding: 2rem 0;
            font-size: 90%;
        }

        button {
            background-color: $dark;
        }
    }
}
</style>