<template>
    <div class="jumbo">
        <div class="container">
            <h1>Tech Forum!</h1>
            <div>Discuss all the latest technology news and trends</div>
            <BtnComponent class="caps" content="get avada now!" chev=true />
        </div>
    </div>
</template>

<script>
import BtnComponent from './BtnComponent.vue';

export default {
    components: { BtnComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.jumbo {
    height: 80vh;
    background-image: url('/img/home_slider_bg.jpg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: local;
    padding-top: 4rem;
    @include flexcol;

    .container {
        h1 {
            font-size: 7rem;
        }

        div {
            margin: 2rem 0;
        }

        button {
            background-color: $blue;
            border: 0;
            width: fit-content;
            word-spacing: .2rem;
        }
    }
}
</style>