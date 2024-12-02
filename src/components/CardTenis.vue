<template>
  <div class="card bg-base-100 w-80 lg:w-96 shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ tenis.nome }}</h2>
      <p class="break-words text">{{ tenis.descricao }}</p>
      <div class="card-actions justify-start md:justify-center pt-2">
        <button class="btn btn-primary text-base-100 animate-none md:w-3/4">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { IDadosTenis } from "@/app/interface/IDadosTenis";
import type { PropType } from "vue";

export default {
  props: {
    tenis: { type: Object as PropType<IDadosTenis>, required: true },
  },
};
</script>
