<template>
  <div class="stories__story">
    <img class="story__image" src="'../../static/images/pr4545.jpg" />
    <h2 class="story__title">Владимир Тен</h2>
    <p class="story__subtitle">
      Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
    </p>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.stories__story {
  max-width: 300px;
}
.story__image {
  width: 300px;
  height: 300px;
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
</style>
