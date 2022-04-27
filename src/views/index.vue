<template>
  <DefaultLayout>
    <section class="w-full px-6 pb-12 antialiased bg-white bg">
      <div class="mx-auto container">
        <NavBar />
        <div
          class="container py-24 md:py-36 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-normal text-left text-gray-900 md:text-center sm:leading-none"
          >
            <span class="inline md:block">Spend more time Building</span>
            <span
              class="relative mt-2 bg-clip-text gradient md:inline-block pl-3"
            >
              and less time Coding</span
            >
          </h1>
          <div
            class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-4xl md:text-center lg:text-lg"
          >
            An Open Source Project that is focused on helping you spend less
            time on coding UI designs and more time building the actual
            application by providing already made components and pages
          </div>
          <div class="flex flex-col items-center mt-12 text-center">
            <span class="relative flex flex-wrap w-full md:w-auto gap-4">
              <router-link to="/" class="btn"> Get Started </router-link>
              <router-link to="/stage" class="btn"> Stage </router-link>
              <router-link to="/components" class="btn">
                components
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import DefaultLayout from "../layouts/defaultLayout.vue";
</script>

<style scoped>
.bg {
  background-blend-mode: lighten;
}

.gradient {
  text-align: center;
  color: #4f46e5;
  background-image: -webkit-linear-gradient(92deg, #3426f3, #feab3a);
  background-clip: text;
  text-fill-color: transparent;
  animation: hue 10s infinite linear;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
