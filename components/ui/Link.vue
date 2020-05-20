<template>
  <a :href="url" :class="['link', className]" @click="$emit('lnkClick')">
    <slot></slot
  ></a>
</template>

<script>
export default {
  props: {
    className: String,
    url: String,
  },
};
</script>

<style scoped>
.link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #121212;
  text-decoration: none;
  margin-right: 30px;
}

@media screen and (max-width: 1439px) {
  .link {
    font-size: 18px;
    line-height: 24px;
  }
}
@media screen and (max-width: 1279px) {
  .link {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 1023px) {
  .link {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 779px) {
  .link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
