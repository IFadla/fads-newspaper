<template>
  <div class="container-navbar">
    <p class="title-nav">{{$route.params.title}}</p>
    <div class="wrapper-item">
      <router-link class="item" :to="{name: 'Berita', params: {title: 'PILIH BERITA'}}">Berita</router-link>
      <router-link class="item" :to="{name: 'InfoDeveloper', params: {title: 'INFO DEVELOPER'}}">Info Developer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {

  }

};
</script>

<style lang="scss">
.container-navbar {
  // border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  padding: 1.2rem;

  .title-nav {
    font-weight: 800;
    color: rgba(84, 83, 83, 0.2);
  }

  .wrapper-item {
    width: 36%;
    display: flex;
    font-size: .9rem;
    justify-content: space-between;

    .item {
      color: var(--gray);
      text-decoration: none;
    }

    .router-link-active {
      color: var(--black);
      font-weight: 500;
    }
  }
}
</style>