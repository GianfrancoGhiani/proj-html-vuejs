<template>
    <section id="paragraph">
        <div class="container">
            <div class="sec-title caps">avada forum is the place to be</div>
            <p>In quis lectus sed leo elementum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis,
                sed
                blandit dui finibus. dolor at, bibendum purus. Donec vehicula nec tortor ac finibus.</p>
        </div>

    </section>
</template>

<script>
export default {
    name: 'FirstSecComponent',

}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

section {
    background-color: lighten($color: $lightgrey, $amount: 10);


    .container {
        color: $grey;
        padding: 4rem 0;
        width: 40%;
        text-align: center;

        .caps {
            margin: 1.5rem 0;
        }
    }
}
</style>