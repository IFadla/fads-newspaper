<template>
  <div class="container-right-side">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      
    }
  }

};
</script>

<style lang="scss">
.container-right-side {
  flex: 0.6;
  background-color: white;
  border-radius: 0 1rem 1rem 0;
  height: calc(100vh - 2rem);
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
}
</style>