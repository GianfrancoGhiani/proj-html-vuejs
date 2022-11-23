<template>
  <header>
    <HeaderComponent />
  </header>
  <main @mouseover="store.scrollPoint()">
    <MainComponent />
  </main>
  <footer @mouseover="store.scrollPoint()">
    <FooterComponent />
  </footer>
</template>

<script>
import { store } from './assets/store';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  components: { HeaderComponent, MainComponent, FooterComponent },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>