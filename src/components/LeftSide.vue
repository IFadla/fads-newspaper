<template>
  <div class="container-left-side">
    <HeaderPapper />
    <SocialMedia />
    <Weather />
  </div>
</template>

<script>
import HeaderPapper from "@/components/HeaderPapper.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import Weather from "@/views/Weather.vue";

export default {
  components: {
    HeaderPapper,
    SocialMedia,
    Weather
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="scss">
.container-left-side {
  flex: 1;
  border-radius: 1rem 0 0 1rem;
  height: calc(100vh - 2rem);
  background-color: var(--white1);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>