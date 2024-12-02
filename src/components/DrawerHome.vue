<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content text-end">
      <!-- Page content here -->
      <label
        for="my-drawer-4"
        class="drawer-button btn text-base-100 animate-none btn-primary"
        >Open drawer</label
      >
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="menu flex flex-col justify-evenly bg-base-100 text-base-content min-h-full w-1/2 md:w-80 p-4"
      >
        <!-- Sidebar content here -->
        <li v-for="(botao, index) in botoes" :key="index">
          <BotaoTenis :tenis="botao" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import baixaDadosTenis from "@/app/service/baixaDadosTenis";
import BotaoTenis from "./BotaoTenis.vue";
import type { IDadosTenis } from "@/app/interface/IDadosTenis";

export default {
  components: { BotaoTenis },
  data() {
    return {
      botoes: [] as IDadosTenis[] | Promise<IDadosTenis[]>,
    };
  },
  async created() {
    this.botoes = await baixaDadosTenis();
  },
};
</script>
