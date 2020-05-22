<template>
  <container>
    <div class="description">
      <div class="description__history">
        <h2 class="description__title">
          Истории людей, победивших рак, но не свои привычки
        </h2>
        <p class="description__subtitle">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
        <div class="description__button">
          <a href="" class="description__button-back"></a>
          <a href="" class="description__button-front"></a>
        </div>
      </div>
      <div class="description__video">
        <video-iframe :url="item.video" />
        <p class="description__subtitle-video">
          Все видео вы можете найте на нашем
          <a href="#" class="description__link">YouTube канале</a>.
        </p>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '@/components/blocks/Container';
import VideoIframe from '@/components/blocks/VideoIframe';
export default {
  components: {
    'video-iframe': VideoIframe,
    container: Container,
  },
  data() {
    return {
      item: { video: 'https://www.youtube.com/embed/RDfiGspcI8o' },
    };
  },
};
</script>

<style scoped>
.description {
  padding: 100px 0 74px;
  display: flex;
}

.description__history {
  margin-top: 10px;
}

.description__button {
  margin-top: 153px;
  display: flex;
  flex-direction: row;
}

.description__button-back {
  display: block;
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  background-image: url('../../static/images/Polygon_7.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

.description__button-front {
  display: block;
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  background-image: url('../../static/images/Polygon_8.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

.description__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  color: #000;
}

.description__subtitle {
  max-width: 350px;
  font-weight: normal;
  font-size: 1.125em;
  line-height: 1.2;
  color: #666;
  margin-top: 32px;
}

.description__video {
  width: 867px;
  height: 447px;
  margin-left: 40px;
}

.description__subtitle-video {
  margin-top: 5px;
  font-weight: normal;
  font-size: 0.75em;
  line-height: 1.33;
  color: #666666;
}

.description__link {
  color: #666666;
}

.description__link:hover {
  opacity: 0.7;
  transition: 0.1s linear;
}

@media screen and (max-width: 1280px) {
  .description {
    padding: 90px 0 64px;
  }

  .description__title {
    font-size: 1.75em;
    line-height: 1.143;
  }

  .description__subtitle {
    font-size: 1em;
    line-height: 1.25;
  }

  .description__video {
    width: 867px;
    height: 400px;
    margin-left: 40px;
  }

  .description__subtitle-video {
    font-size: 0.75em;
    line-height: 1.33;
  }

  .description__button {
    margin-top: 124px;
  }
}

@media screen and (max-width: 1024px) {
  .description {
    padding: 80px 0 54px;
  }

  .description__title {
    font-size: 1.5em;
    line-height: 1.167;
  }

  .description__subtitle {
    font-size: 0.8em;
    line-height: 1.23;
  }

  .description__button {
    margin-top: 83px;
  }

  .description__video {
    width: 867px;
    height: 314px;
    margin-left: 40px;
  }

  @media screen and (max-width: 768px) {
    .description {
      padding: 80px 0 44px;
      flex-direction: column;
      align-items: center;
    }

    .description__history {
      margin-top: 0;
    }

    .description__button {
      margin-top: 0;
      display: flex;
      flex-direction: row;
    }

    .description__button-back {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #fbfbfb;
      background-image: url('../../static/images/Polygon_7.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }

    .description__button-front {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #fbfbfb;
      background-image: url('../../static/images/Polygon_8.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }

    .description__title {
      max-width: 380px;
      font-weight: 600;
      font-size: 1.5em;
      line-height: 1.167;
      color: #000;
    }

    .description__subtitle {
      max-width: 380px;
      font-weight: normal;
      font-size: 0.8em;
      line-height: 1.23;
      color: #666;
      margin-top: 26px;
    }

    .description__video {
      width: 580px;
      height: 300px;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .description__subtitle-video {
      margin-top: 20px;
      font-weight: normal;
      font-size: 0.75em;
      line-height: 1.33;
      color: #666666;
    }

    .description__link {
      color: #666666;
    }

    .description__link:hover {
      opacity: 0.7;
      transition: 0.1s linear;
    }
  }

  @media screen and (max-width: 320px) {
    .description {
      padding: 50px 0;
    }

    .description__history {
      margin-top: 0;
    }

    .description__button {
      margin-top: 0;
      display: flex;
      flex-direction: row;
    }

    .description__button-back {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #fbfbfb;
      background-image: url('../../static/images/Polygon_7.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }

    .description__button-front {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #fbfbfb;
      background-image: url('../../static/images/Polygon_8.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }

    .description__title {
      max-width: 380px;
      font-weight: 600;
      font-size: 1.5em;
      line-height: 1.167;
      color: #000;
    }

    .description__subtitle {
      max-width: 380px;
      font-weight: normal;
      font-size: 0.8em;
      line-height: 1.23;
      color: #666;
      margin-top: 26px;
    }

    .description__video {
      width: 290px;
      height: 150px;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .description__subtitle-video {
      margin-top: 20px;
      font-weight: normal;
      font-size: 0.75em;
      line-height: 1.33;
      color: #666666;
    }

    .description__link {
      color: #666666;
    }

    .description__link:hover {
      opacity: 0.7;
      transition: 0.1s linear;
    }
  }
}
</style>
