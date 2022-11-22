<template>
    <div class="bg">
        <div class="container">
            <h1>Hey! Join to our Community</h1>
            <p>Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus. Curabitur feugiat vulputate purus
                ipsums dolores ficilis uns etra.</p>
            <BtnComponent class="caps" content="sign up" chev="true" />
        </div>
    </div>
</template>

<script>
import BtnComponent from './BtnComponent.vue';

export default {
    name: "JoinComponent",
    components: { BtnComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.bg {
    background-image: url('/img/join_now_cta_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    position: relative;

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            font-size: 4rem;
        }

        p {
            margin: 2rem auto;
            max-width: 70%;
        }

        button {
            padding: 1rem 2rem;
            background-color: $lightblue;
        }
    }
}
</style>