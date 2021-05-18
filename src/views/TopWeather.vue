<template>
  <div class="container-top-weather">
    <FirstTopWeather v-bind:kota="namaKotaSatu" />
    <SecondTopWeather v-bind:kota="namaKotaDua" />
    <ThirdTopWeather v-bind:kota="namaKotaTiga" />
  </div>
</template>

<script>
import FirstTopWeather from "@/components/FirstTopWeather.vue";
import SecondTopWeather from "@/components/SecondTopWeather.vue";
import ThirdTopWeather from "@/components/ThirdTopWeather.vue";

export default {
  components: {
    FirstTopWeather,
    SecondTopWeather,
    ThirdTopWeather,
  },
  data() {
    return {
      namaKotaSatu: 'Jakarta',
      namaKotaDua: 'Bogor',
      namaKotaTiga: 'Medan'
    }
  }
};
</script>

<style lang="scss">
.container-top-weather {
  padding: 0 3.5rem;
  margin: 1.5rem 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // border: 1px solid black;
}
</style>