<template>
  <div class="container-weather-search">
    <form action="" class="search-box" v-on:submit.prevent="searchWeather">
      <input
        type="text"
        class="search-bar"
        placeholder="Cari Kota"
        v-model="searchCity"
      />
      <div class="box-icon-search">
        <i class="fas fa-search"></i>
      </div>
    </form>

    <div class="wrapper-load">
      <div class="wrapper-spiner" v-if="!isBusy">
        <i class="fas fa-spinner fa-spin mySpiner"></i>
        <p>Tunggu ya...</p>
      </div>

      <div class="container-weather-info" v-else>
        <div class="box-city">
          <p class="city">{{ weather.cityName }}</p>
          <i class="fas fa-circle"></i>
          <p class="country">{{ weather.country }}</p>
        </div>

        <div class="wrapper-weather-report">
          <div class="wrapper-weather">
            <img
              src="@/assets/iconWeather/clouds.png"
              alt=""
              v-if="clouds"
              class="icon-weather"
            />
            <img
              src="@/assets/iconWeather/rain.png"
              alt=""
              v-if="rain"
              class="icon-weather"
            />
            <img
              src="@/assets/iconWeather/snow.png"
              alt=""
              v-if="snow"
              class="icon-weather"
            />
            <img
              src="@/assets/iconWeather/storm.png"
              alt=""
              v-if="storm"
              class="icon-weather"
            />
            <img
              src="@/assets/iconWeather/wind.png"
              alt=""
              v-if="wind"
              class="icon-weather"
            />
            <p class="weather-desc">{{ weather.description }}</p>
          </div>

          <div class="wrapper-other-information">
            <div class="space-dot">
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
            </div>

            <div class="box-date-time">
              <div class="date">
                <i class="far fa-calendar-alt"></i>
                <p>{{ weather.date }}</p>
              </div>

              <i class="fas fa-circle dot"></i>

              <div class="time">
                <i class="far fa-clock"></i>
                <p>{{ weather.time }}</p>
              </div>
            </div>
          </div>

          <div class="wrapper-weather-temp">
            <div class="box-temp">
              <div class="wrapper-temp-selcius">
                <p class="temp">{{ weather.weatherTemp }}&deg;</p>
                <p class="celcius">C</p>
              </div>
            </div>

            <p class="feel">Feels like {{ weather.feels }}&deg;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      api_key: "2f7dd1fdb078b57d20fc2d6f4b721878",
      url_base: "http://api.weatherstack.com/current?access_key=",
      query: "Seoul",
      searchCity: "",
      clouds: false,
      snow: false,
      rain: false,
      storm: false,
      wind: false,
      isBusy: false,
      weather: {
        cityName: "",
        country: "",
        description: "",
        weatherTemp: "",
        date: "",
        time: "",
        feels: "",
      },
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather: async function () {
      const baseURL = `${this.url_base}${this.api_key}&query=${this.query}`;
      //fetch weather
      try {
        const response = await axios.get(baseURL);
        const data = response.data;
        this.setWeather(data);
        this.isBusy = true;
      } catch (e) {
        console.log(e);
      }
    },
    searchWeather: async function () {
      const baseURL = `${this.url_base}${this.api_key}&query=${this.searchCity}`;
      //fetch weather
      try {
        const response = await axios.get(baseURL);
        const data = response.data;
        this.setWeather(data);
        this.isBusy = true;
      } catch (e) {
        console.log(e);
      }
    },

    setWeather: function (data) {
      console.log(data);
      this.weather.cityName = data.location.name;
      this.weather.country = data.location.country;
      this.weather.weatherTemp = data.current.temperature;
      this.weather.description = data.current.weather_descriptions[0];
      this.weather.feels = data.current.feelslike;

      let tanggalWaktu = data.location.localtime;
      let pecahin = tanggalWaktu.split(" ");
      let tanggal = pecahin[0];
      let waktu = pecahin[1];
      this.weather.date = tanggal;
      this.weather.time = waktu;

      let weatherCode = data.current.weather_code;

      //check snow
      if (
        weatherCode === 179 ||
        weatherCode === 182 ||
        weatherCode === 227 ||
        weatherCode === 230 ||
        weatherCode === 281 ||
        weatherCode === 284 ||
        weatherCode === 311
      ) {
        this.snow = true;
        this.rain = false;
        this.storm = false;
        this.wind = false;
        this.clouds = false;
      } else {
        this.clouds = true;
      }

      //check rain
      if (
        weatherCode === 176 ||
        weatherCode === 185 ||
        weatherCode === 263 ||
        weatherCode === 266 ||
        weatherCode === 293 ||
        weatherCode === 295 ||
        weatherCode === 296
      ) {
        this.snow = false;
        this.rain = true;
        this.storm = false;
        this.wind = false;
        this.clouds = false;
      } else {
        this.clouds = true;
      }

      //check storm
      if (
        weatherCode === 200 ||
        weatherCode === 295 ||
        weatherCode === 302 ||
        weatherCode === 305 ||
        weatherCode === 308 ||
        weatherCode === 356
      ) {
        this.snow = false;
        this.rain = false;
        this.storm = true;
        this.wind = false;
        this.clouds = false;
      } else {
        this.clouds = true;
      }

      //check wind
      if (weatherCode === 248 || weatherCode === 268) {
        this.snow = false;
        this.rain = false;
        this.storm = false;
        this.wind = true;
        this.clouds = false;
      } else {
        this.clouds = true;
      }

      //set clouds false when the other weather is true
      if (
        this.storm === true ||
        this.wind === true ||
        this.snow === true ||
        this.rain == true
      ) {
        this.clouds = false;
      } else {
        this.clouds = true;
      }

      console.log(weatherCode);
    },
  },
};
</script>

<style lang="scss">
.container-weather-search {
  width: 100%;
  padding: 0 3.5rem;
  // border: 1px solid magenta;

  .search-box {
    margin-top: 0.5rem;
    // border: 1px solid black;
    display: flex;

    .search-bar {
      flex: 1;
      // border: 1px solid blue;
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      color: var(--black);
      font-family: "Roboto", sans-serif;

      &::placeholder {
        color: var(--gray1);
      }
    }

    .box-icon-search {
      flex: 0.05;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--white);
      font-size: 0.8rem;
      background-color: var(--black);
    }
  }

  .wrapper-load {
    // border: 1px solid black;
    height: 254px;
    background-color: var(--white);
    margin-top: 1.5rem;
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
      // border: 1px solid magenta;
      color: var(--gray);

      .mySpiner {
        font-size: 1.2rem;
      }

      p {
        margin: 1rem 0;
        font-size: 0.8rem;
      }
    }

    .container-weather-info {
      padding: 2rem;
      height: 254px;
      background-color: var(--white);
      // border: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .box-city {
        width: 100%;
        // border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        margin-bottom: 1rem;

        i {
          margin: 0 1rem;
          font-size: 0.4rem;
          color: var(--gray1);
        }

        .country {
          color: var(--gray1);
        }
      }

      .wrapper-weather-report {
        display: flex;
        width: 100%;

        .wrapper-weather {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          // border: 1px solid blue;
          flex: 1;

          img {
            margin-bottom: 1rem;
            // border: 1px solid magenta;
            width: 8rem;
          }

          .weather-desc {
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-align: center;
            // border: 1px solid magenta;
          }
        }

        .wrapper-other-information {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // border: 1px solid magenta;
          position: relative;
          flex: 1.4;

          .space-dot {
            width: 100%;
            // border: 1px solid blue;
            display: flex;
            margin-top: -2rem;
            justify-content: center;
            align-self: center;

            i {
              margin: 0 2rem;
              font-size: 0.5rem;
              color: var(--gray1);
            }
          }

          .box-date-time {
            // border: 1px solid blue;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            i.dot {
              margin: 0 1.8rem;
              font-size: 0.4rem;
              color: var(--gray1);
            }

            .date,
            .time {
              display: flex;
              align-items: center;
              color: var(--gray1);

              i {
                margin-right: 0.5rem;
              }
            }
          }
        }

        .wrapper-weather-temp {
          // border: 1px solid blue;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          .box-temp {
            margin-bottom: 1rem;
            // border: 1px solid magenta;
            width: 8rem;
            height: 108.36px;
            display: flex;
            justify-content: center;
            align-items: center;

            .wrapper-temp-selcius {
              position: relative;
              // border: 1px solid green;
              font-size: 5.1rem;

              .celcius {
                position: absolute;
                font-size: 1.5rem;
                font-weight: 500;
                color: var(--gray1);
                bottom: 0.9rem;
                right: 0.6rem;
              }
            }
          }
          // .feel {
          //   // border: 1px solid blue;
          // }
        }
      }
    }
  }
}
</style>