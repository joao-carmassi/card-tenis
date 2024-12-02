<template>
  <section id="containerCard" class="bg-base-300 w-full p-10 lg:p-20">
    <ul
      v-if="dadosTenis.length"
      class="flex justify-center items-center flex-wrap gap-14 lg:gap-20"
    >
      <li v-for="(tenis, index) in dadosTenis" :key="index">
        <CardTenis :tenis="tenis" />
      </li>
    </ul>
    <p v-else class="text-lg">*Nenhum tenis foi encontrado*</p>
  </section>
</template>

<script lang="ts">
import baixaDadosTenis from "@/app/service/baixaDadosTenis";
import CardTenis from "./CardTenis.vue";
import type { IDadosTenis } from "@/app/interface/IDadosTenis";

export default {
  components: { CardTenis },
  data() {
    return {
      dadosTenis: [] as IDadosTenis[],
    };
  },
  async created() {
    this.dadosTenis = await baixaDadosTenis();
  },
};
</script>
