<template>
  <div class="container-social-media">
      <a href="#" class="item-sosmed">Instagram / </a>
      <a href="#" class="item-sosmed">&nbsp; Facebook / </a>
      <a href="#" class="item-sosmed">&nbsp; Twitter  </a>
  </div>
</template>

<style lang="scss">
.container-social-media {
  // border: 1px solid magenta;
  position: absolute;
  display: flex;
  justify-content: center;
  transform: rotate(-90deg);
  transform-origin: top left;
  left: 1.2rem;
  right: 0;
  top: 70vh;
  width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: .9rem;

  .item-sosmed {
    text-decoration: none;
    color: var(--gray);
  }
}
</style>