<template>
  <div class="container-header-paper">
    <div class="brand-paper">
      <p class="f">F</p>
    </div>
    <p class="title-header">LAPORAN CUACA</p>
  </div>
</template>

<style lang="scss">
.container-header-paper {
  // border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 1.2rem;

  .brand-paper {
    background-color: var(--black);
    color: var(--white);
    font-weight: 700;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  .title-header {
    font-weight: 800;
    color: rgba(84, 83, 83, 0.2);
  }
}
</style>