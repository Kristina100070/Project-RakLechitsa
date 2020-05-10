<template>
  <div class="description">
    <div class="description__history">
      <h2 class="description__title">
        Истории людей, победивших рак, но не свои привычки
      </h2>
      <p class="description__subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <div class="description__button">
        <a href="" class="description__button-back"></a>
        <a href="" class="description__button-front"></a>
      </div>
    </div>
    <div class="description__video">
      <iframe class="description__iframe"></iframe>
      <p class="video__subtitle">
        Все видео вы можете найте на нашем
        <a href="#" class="description__link">YouTube канале</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.description {
  max-width: 1320px;
  display: flex;
  flex-direction: row;
}

.description__history {
  margin-top: 10px;
}

.description__button {
  margin-top: 150px;
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
  margin-left: 40px;
}

.video__subtitle {
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

.description__iframe {
  width: 867px;
  height: 447px;
  border: 0;
  background-color: #ededed;
  background-image: url('../../static/images/Subtract.png');
  background-position: center center;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .description {
    max-width: 1180px;
  }

  .description__title {
    font-size: 1.75em;
    line-height: 1.143;
  }

  .description__subtitle {
    font-size: 1em;
    line-height: 1.25;
  }

  .description__iframe {
    width: 773px;
    height: 400px;
    background-size: 76px 76px;
  }

  .video__subtitle {
    font-size: 0.75em;
    line-height: 1.33;
  }

  .description__button {
    margin-top: 124px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .description {
    max-width: 924px;
  }

  .description__title {
    font-size: 1.5em;
    line-height: 1.167;
  }

  .description__subtitle {
    font-size: 0.8em;
    line-height: 1.23;
  }

  .description__iframe {
    width: 606px;
    height: 324px;
  }

  .description__button {
    margin-top: 80px;
  }
}
</style>
