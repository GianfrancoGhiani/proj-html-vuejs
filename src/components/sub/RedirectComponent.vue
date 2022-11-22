<template>
    <div id="redirect">
        <h4 class="caps">{{ redirect }} <i class="fa-solid fa-long-arrow-alt-right"></i></h4>
    </div>
</template>

<script>
export default {
    name: 'RedirectComponent',
    props: { redirect: String }

}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

#redirect {
    cursor: pointer;
    background-color: $dark;
    padding: 2.5rem;
    text-align: center;
    transition: background-color .5s ease-out;

    &:hover {
        background-color: darken($color: $lightblue, $amount: 20);
    }
}
</style>