<template>
  <div class="stories content__stories">
    <h2 class="stories__title">Истории неизлечимых превычек</h2>
    <div class="stories__container">
      Контейнер для карточек
    </div>
    <a href="" class="stories__link"
      ><p class="stories__link-text">Больше статей</p></a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories {
  max-width: 1320px;
}

.stories__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  max-width: 413px;
}

.stories__container {
  margin: 70px 0;
}

.stories__link {
  background-color: #fbfbfb;
  text-decoration: none;
  color: #000;
  display: flex;
}

.stories__link-text {
  font-weight: normal;
  font-size: 1em;
  line-height: 1.25em;
  text-align: center;
  margin: auto;
  padding: 31px 0;
}

.stories__link:hover {
  background: rgba(0, 0, 0, 0.1);
  transition: 0.1s linear;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .stories {
    max-width: 1180px;
  }

  .stories__title {
    font-size: 1.75em;
    line-height: 1.14;
  }

  .stories__link-text {
    padding: 29px 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    .stories {
      max-width: 924px;
    }

    .stories__title {
      font-size: 1.5em;
      line-height: 1.167;
      max-width: 288px;
    }

    .stories__link-text {
      font-size: 0.8em;
      padding: 17px 0;
    }
  }
}
</style>
