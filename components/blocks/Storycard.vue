<template>
  <div class="story" @click="$emit('cardClick')">
    <img :src="src" :alt="author" class="story__image" />
    <p class="story__title">{{ author }}</p>
    <p class="story__subtitle">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['src', 'author', 'text', 'link'],
};
</script>

<style scoped>
.story {
  max-width: 300px;
  cursor: pointer;
}
.story__image {
  width: 300px;
  height: 300px;
  object-fit: cover;
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

@media screen and (max-width: 1280px) {
  .story__image {
    width: 265px;
    height: 265px;
  }
}
@media screen and (max-width: 1024px) {
  .story__image {
    width: 208px;
    height: 208px;
  }
}
@media screen and (max-width: 768px) {
  .story__image {
    width: 216px;
    height: 216px;
  }
}

@media screen and (max-width: 320px) {
  .story__image {
    width: 290px;
    height: 290px;
  }
}
</style>
