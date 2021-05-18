<template>
  <div class="container-app">
    <LeftSide />
    <RightSide />
  </div>
</template>

<script>
import RightSide from "@/components/RightSide.vue";
import LeftSide from "@/components/LeftSide.vue";

export default {
  components: {
    RightSide,
    LeftSide
  },
  data() {
    return {
      
    }
  }
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --black : #191818;
  --gray : #545353;
  --gray1 : #C6C6C6;
  --white : #FFFFFF;
  --white1 : #f7f7f7;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--white);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--white1);
}

body {
  padding: 1rem;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  // border: 1px solid magenta;
}

.container-app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
