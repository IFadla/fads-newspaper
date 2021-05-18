<template>
  <div class="wrapper-loader-first-top">
    <div class="wrapper-spiner" v-if="!isBusy">
      <i class="fas fa-spinner fa-spin mySpiner"></i>
      <p>Tunggu ya...</p>
    </div>
    <div class="container-first-top-weather" v-else>
      <div class="wrapper-weather">
        <div class="temp-country">
          <div class="box-temp">
            <div class="wrapper-temp-selcius">
              <p class="temp">{{ weather.weatherTemp }}&deg;</p>
              <p class="celcius">C</p>
            </div>
          </div>

          <div class="city-country">
            <p class="city">{{ weather.cityName }}</p>
            <div class="country">
              {{ weather.country }}
            </div>
          </div>
        </div>

        <div class="weather">
          <img
            src="@/assets/iconWeather/clouds.png"
            alt=""
            v-if="true"
            class="icon-weather"
          />
          <div class="weather-desc">
            {{ weather.description }}
          </div>
        </div>
      </div>

      <div class="wrapper-time">
        <i class="far fa-clock"></i>
        <p class="time">{{ weather.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["kota"],
  data() {
    return {
      api_key: "2f7dd1fdb078b57d20fc2d6f4b721878",
      url_base: "http://api.weatherstack.com/current?access_key=",
      query: this.kota,
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
        time: "",
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
    setWeather: function (data) {
      console.log(data);
      this.weather.cityName = data.location.name;
      this.weather.country = data.location.country;
      this.weather.weatherTemp = data.current.temperature;
      this.weather.description = data.current.weather_descriptions[0];

      let tanggalWaktu = data.location.localtime;
      let pecahin = tanggalWaktu.split(" ");
      let waktu = pecahin[1];
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
.wrapper-loader-first-top {
  flex: 1;
  max-width: 31%;
  padding: 1rem;
  background-color: var(--white);
  // border: 1px solid magenta;
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

  .container-first-top-weather {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .wrapper-weather {
      width: 100%;
      // border: 1px solid blue;
      display: flex;

      .temp-country {
        flex: 1;
        // border: 1px solid green;

        .box-temp {
          margin-bottom: 1rem;
          // border: 1px solid magenta;
          display: flex;
          align-items: center;

          .wrapper-temp-selcius {
            position: relative;
            // border: 1px solid green;
            font-size: 2.5rem;

            .celcius {
              position: absolute;
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--gray1);
              bottom: 0.4rem;
              right: 0.2rem;
            }
          }
        }

        .city-country {
          // border: 1px solid black;
          .country {
            font-size: 0.8rem;
            color: var(--gray1);
            margin-top: 0.2rem;
            width: 88px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            // border: 1px solid green;
            margin-bottom: 0.5rem;
            text-align: left;
          }
        }
      }

      .weather {
        flex: 1;
        // border: 1px solid pink;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img {
          // border: 1px solid magenta;
          width: 4.6rem;
        }

        .weather-desc {
          width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // border: 1px solid green;
          margin-bottom: 0.5rem;
          text-align: center;
        }
      }
    }

    .wrapper-time {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      color: var(--gray1);
      // border: 1px solid blue;

      i {
        margin-right: 0.4rem;
      }
    }
  }
}
</style>