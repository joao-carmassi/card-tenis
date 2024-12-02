<template>
  <header>
    <NavPrincipal />
  </header>
  <main>
    <HeroHome />
    <ContainerCard />
  </main>
  <footer>
    <FooterMain />
  </footer>
</template>

<script lang="ts">
import ContainerCard from "./components/ContainerCard.vue";
import FooterMain from "./components/FooterMain.vue";
import HeroHome from "./components/HeroHome.vue";
import NavPrincipal from "./components/NavPrincipal.vue";

export default {
  components: { NavPrincipal, HeroHome, ContainerCard, FooterMain },
};
</script>
