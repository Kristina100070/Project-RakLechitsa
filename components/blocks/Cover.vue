<template>
  <div class="cover">
    <h1 class="cover__title">#Раклечится</h1>
    <a href="" class="cover__button-link"
      ><img src="../../static/images/Polygon-3.png" class="cover__button"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  min-height: 50vh;
  width: 100%;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 689px;
  position: relative;
  overflow: hidden;
}

.cover__title {
  position: absolute;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
  text-transform: uppercase;
}

.cover__button-link {
  position: absolute;
  left: 48%;
  top: 92%;
  width: 36px;
  height: 12px;
}

@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 320px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
