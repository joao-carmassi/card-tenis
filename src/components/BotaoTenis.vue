<template>
  <button
    @click="trocaCorClick"
    :class="estilos"
    class="btn mx-2 0 border-primary border-1 hover:btn-primary tect-base-100"
  >
    {{ tenis.nome }}
  </button>
</template>

<script lang="ts">
import type { IDadosTenis } from "@/app/interface/IDadosTenis";
import type { PropType } from "vue";

export default {
  data() {
    return {
      estilos: "bg-base-100",
      clicado: false,
    };
  },
  props: {
    tenis: { type: Object as PropType<IDadosTenis>, required: true },
  },
  methods: {
    trocaCorClick() {
      if (!this.clicado) {
        this.estilos = "btn-primary text-base-100";
        this.clicado = !this.clicado;
      } else {
        this.estilos = "bg-base-100";
        this.clicado = !this.clicado;
      }
    },
  },
};
</script>
