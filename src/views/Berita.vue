<template>
  <div class="container-berita">
    <div class="wrapper-spiner" v-if="!isBusy">
      <i class="fas fa-spinner fa-spin mySpiner"></i>
      <p>Tunggu ya...</p>
    </div>
    <div
      class="container-card"
      v-for="article in articles"
      :key="article.id"
      @click="navTo(article.url)"
    >
      <div class="wrapper-published">
        <p class="published">Published at</p>
        <i class="fas fa-circle"></i>
        <p class="date">{{ article.publishedAt }}</p>
        <i class="fas fa-circle"></i>
        <p class="papper-brand">{{ article.source.name }}</p>
      </div>

      <div class="wrapper-title">
        <p class="title">
          {{ article.title }}
        </p>
      </div>

      <div class="wrapper-image">
        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          alt=""
          class="image"
        />

        <div v-if="!article.urlToImage" class="wrapper-error-image">
          <i class="far fa-image"></i>
          <p class="no-image">No Image</p>
        </div>
      </div>

      <div class="wrapper-description">
        <p class="description">
          {{ article.description }}
        </p>
        <p v-if="!article.description">Deskripsi tidak ada</p>
      </div>

      <div class="wrapper-read-more">
        <p class="read">Baca Berita</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "hallo",
      articles: [],
      isBusy: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=ba8cb79187544f9a9f03e3a38a19e5e0"
      );
      this.isBusy = true;
      this.articles = response.data.articles;
      this.checkStatus(response);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navTo(url) {
      window.open(url);
    },
    checkStatus(res) {
      if (res.status == 200) {
        console.log("Yahoow!");
      }
    },
  },
};
</script>

<style lang="scss">
.container-berita {
  padding: 1.2rem;
  height: 100%;
  overflow-y: scroll;
  position: relative;

  .wrapper-spiner {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--gray);

    .mySpiner {
      font-size: 1.2rem;
    }

    p {
      margin: 1rem 0;
      font-size: .8rem;
    }
  }

  .container-card {
    padding: 1.2rem;
    background-color: var(--white1);
    margin-bottom: 1rem;
    cursor: pointer;

    .wrapper-published {
      display: flex;
      margin-bottom: 0.5rem;
      align-items: center;
      font-size: 0.8rem;
      color: var(--gray);

      i {
        font-size: 0.4rem;
        margin: 0 0.5rem;
      }
    }

    .wrapper-title {
      font-family: "Merriweather", serif;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .wrapper-image {
      margin: 1rem 0;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--white);

      .image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        filter: grayscale(100%) brightness(110%);
      }

      .wrapper-error-image {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        i {
          font-size: 2rem;
          color: var(--gray);
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    .wrapper-description {
      margin-bottom: 1.5rem;
    }

    .wrapper-read-more {
      font-size: 0.9rem;
      font-weight: 500;

      .read {
        position: relative;
      }

      .read::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 20px;
        height: 2px;
        background-color: var(--black);
      }
    }
  }
}
</style>