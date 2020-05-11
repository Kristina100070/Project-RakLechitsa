<template>
  <div class="lead">
    <h1 class="lead__title">#Раклечится</h1>
    <a href="" class="lead__button-link"
      ><img src="../../static/images/Polygon-3.png" class="lead__button"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.lead {
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lead__title {
  font-weight: 800;
  font-size: 5.75em;
  line-height: 1.2;
  padding-top: 290px;
  padding-bottom: 237px;
  color: #fff;
  text-transform: uppercase;
}

.lead__button-link {
  display: block;
  margin-bottom: 40px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .lead__title {
    font-size: 5.75em;
    line-height: 1;
    padding-top: 263px;
    padding-bottom: 211px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .lead__title {
    padding-top: 223px;
    padding-bottom: 171px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .lead__title {
    font-size: 4em;
    line-height: 1.2;
    padding-top: 351px;
    padding-bottom: 300px;
  }
}
</style>
