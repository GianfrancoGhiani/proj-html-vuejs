<template>
    <div class="grey">
        <div class="container">
            <h2>Subscribe to out Newsletter</h2>
            <div class="input">
                <input type="email" name="mail" id="mail" placeholder="Insert your email*" v-model="email">
                <BtnComponent class="caps" content="send" chev="false" @click="getEmail()" />
                <div class="error" v-show="store.error">Insert a valid email address (wich contains at least a @)
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BtnComponent from './BtnComponent.vue';
import { store } from '../../assets/store';
export default {
    name: "SubscribeComponent",
    components: { BtnComponent },
    data() {
        return {
            email: null,
            store,
        }
    },
    methods: {
        getEmail() {

            if ((this.email.split('').includes('@'))) {
                store.userEmail = this.email;
                store.error = false;
                this.email = null;
            } else {
                store.error = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as*;
@use '../../assets/style/partials/mixin' as*;

.container {
    @include flexcol;
    align-items: center;
    color: $dark;
    height: 300px;

    .input {
        width: 70%;
        position: relative;

        input {

            width: 60%;
            margin: 2rem;
            padding: 1rem;

        }

        button {
            background-color: $dark;
            width: 30%;
            padding: 1rem 3rem;

        }

        .error {
            font-weight: 600;
            border-radius: .2rem;
            font-style: italic;
            padding: .5rem;
            position: absolute;
            bottom: -.5rem;
            left: 2rem;
            color: $salmon ;
            background-color: lighten($color: $youtube, $amount: 10);

        }

    }

}
</style>