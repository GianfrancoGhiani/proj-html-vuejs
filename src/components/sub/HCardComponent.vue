<template>
    <div class="lit-wrapper">
        <img :src="elem.url" :alt="elem.name">
        <div class="text">
            <h4 class="name">{{ elem.name }}</h4>
            <div class="details">
                <div class="date">{{ elem.date }} | <span>Comments: {{ elem.comments_counter }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //horizontal card component
    name: 'HCardComponent',
    props: {
        elem: Object
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.lit-wrapper {
    transition: background-color 300ms ease-in-out;

    &:hover {
        background-color: $notwhite;
    }

    cursor: pointer;

    @include flexrow;
    align-items: center;

    img {
        max-width: 100%;
        width: 40%;
        margin: 1rem 0.3rem;
    }
}
</style>