<template>
  <div class="stories content__stories">
    <h2 class="stories__title">Истории неизлечимых превычек</h2>
    <div class="stories__container">
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title">Владимир Тен</h2>
        <p class="story__subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title">Владимир Тен</h2>
        <p class="story__subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
      <div class="stories__story">
        <div class="story__image"></div>
        <h2 class="story__title"></h2>
        <p class="story__subtitle"></p>
      </div>
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
.stories__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  max-width: 413px;
}

.stories__container {
  margin: 70px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
}

.stories__story {
  max-width: 300px;
}

.story__image {
  width: 300px;
  height: 300px;
  background-image: url('../../static/images/pr4545.jpg');
}

.story__title {
  margin-top: 17px;
  font-weight: 600;
  font-size: 1.375em;
  line-height: 1;
}

.story__subtitle {
  margin-top: 14px;
  font-weight: normal;
  font-size: 0.875em;
  line-height: 1.286;
  color: #666;
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
  .stories__title {
    font-size: 1.75em;
    line-height: 1.14;
  }

  .stories__container {
    grid-row-gap: 60px;
  }

  .stories__story {
    max-width: 265px;
  }

  .story__image {
    width: 265px;
    height: 265px;
  }

  .stories__link-text {
    padding: 29px 0;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .stories__title {
    font-size: 1.5em;
    line-height: 1.167;
    max-width: 288px;
  }

  .stories__container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }

  .stories__story {
    max-width: 208px;
  }

  .story__image {
    width: 208px;
    height: 208px;
  }

  .story__title {
    margin-top: 16px;
    font-size: 1.125em;
  }

  .story__subtitle {
    margin-top: 16px;
    font-size: 0.813em;
    line-height: 1.231;
  }

  .stories__link-text {
    font-size: 0.8em;
    padding: 17px 0;
  }
}
</style>
