<template>
  <div class="container-info-dev">
    <div class="wrapper-info-dev">
      <div class="flag">
        <img src="@/assets/id-icon.png" alt="">
        <p>ID</p>
      </div>

      <div class="container-image">
        <img src="../assets/ava-dev.png" alt="" class="image" />
      </div>

      <div class="wrapper-detail-dev">
        <p class="name">Fadla Ichsan</p>
        <p class="job">Frontend Developer</p>
      </div>
    </div>

    <div class="wrapper-social-media">
      <a href="#" class="link-sosmed">
        <div class="box-media github">
          <i class="fab fa-github"></i>
          <p class="title-github">GitHub</p>
        </div>
      </a>

      <a href="#" class="link-sosmed">
        <div class="box-media instagram">
          <i class="fab fa-instagram"></i>
          <p class="title-instagram">Instagram</p>
        </div>
      </a>

      <a href="#" class="link-sosmed">
        <div class="box-media linkedin">
          <i class="fab fa-linkedin"></i>
          <p class="title-linkedin">LinkedIn</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-info-dev {
  // border: 1px solid magenta;
  padding: 1.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  .wrapper-info-dev {
    background-color: var(--white1);
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .flag {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      margin: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gray);
      font-weight: 500;
      font-size: .9rem;
      // border: 1px solid magenta;

      img {
        width: 1.1rem;
        margin-right: .4rem;
      }
    }

    .container-image {
      width: 145px;
      height: 145px;
      border-radius: 100%;
      margin-bottom: 2rem;
      overflow: hidden;

      .image {
        width: 145px;
        height: 145px;
      }
    }

    .wrapper-detail-dev {
      text-align: center;

      .name {
        font-weight: 700;
      }

      .job {
        color: var(--gray);
        margin-top: 0.2rem;
        font-size: 0.9rem;
      }
    }
  }

  .wrapper-social-media {
    display: flex;
    justify-content: space-evenly;

    .link-sosmed {
      text-decoration: none;
      font-size: 0.9rem;
      color: var(--gray);

      &:hover {
        color: var(--black);
        transition: 0.3s ease;
      }

      .box-media {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;

        i {
          margin-right: .4rem;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>