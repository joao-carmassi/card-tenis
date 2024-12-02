<template>
  <section class="hero bg-base-200 p-5 md:p-0 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1
          class="text-5xl md:text-6xl font-bold animate-in fade-in duration-1000 delay-150 fill-mode-both slide-in-from-left-24"
        >
          Hello there
        </h1>
        <p
          class="py-6 md:text-lg animate-in fade-in duration-1000 delay-300 fill-mode-both slide-in-from-left-24"
        >
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button
          @click="moveATela"
          class="btn btn-primary text-base-100 text-base animate-in fade-in hover:duration-300 duration-1000 delay-500 hover:delay-0 fill-mode-both"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    moveATela() {
      const containderCard = document.querySelector(
        "#containerCard"
      ) as HTMLInputElement;

      containderCard.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>
