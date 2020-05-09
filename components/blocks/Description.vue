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
    </div>
    <div class="description__video">
      <iframe width="867px" height="450px"></iframe>
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
.description__title {
  max-width: 413px;
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  color: #000;
}
.description__subtitle {
  max-width: 340px;
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
  margin-top: 10px;
  font-weight: normal;
  font-size: 0.75em;
  line-height: 1.33;
  color: #666666;
}

.description__link {
  color: #666666;
}
</style>
