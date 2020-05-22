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
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 76px);
  position: relative;
  overflow: hidden;
}

.lead__title {
  font-weight: 800;
  font-size: 5.75em;
  line-height: 1.2;
  color: #fff;
  text-transform: uppercase;
}

.lead__button-link {
  position: absolute;
  left: 48%;
  top: 92%;
  width: 36px;
  height: 12px;
}

@media screen and (max-width: 1280px) {
  .lead {
    min-height: calc(100vh - 72px);
  }

  .lead__title {
    font-size: 5.75em;
    line-height: 1;
  }
}

@media screen and (max-width: 1024px) {
  .lead {
    min-height: calc(100vh - 72px);
  }

  .lead__title {
    font-size: 5.75em;
    line-height: 1;
  }
}

@media screen and (max-width: 768px) {
  .lead {
    min-height: calc(100vh - 72px);
  }

  .lead__title {
    font-size: 4em;
    line-height: 1.2;
  }
}

@media screen and (max-width: 620px) {
  .lead__title {
    font-size: 3.25em;
    line-height: 1.22;
  }
}

@media screen and (max-width: 475px) {
  .lead__title {
    font-size: 2.8em;
    line-height: 1.22;
  }
}

@media screen and (max-width: 400px) {
  .lead__title {
    font-size: 2.25em;
    line-height: 1.22;
  }
}

@media screen and (max-width: 320px) {
  .lead {
    min-height: calc(100vh - 64px);
  }

  .lead__title {
    font-size: 2.25em;
    line-height: 1.22;
  }
}
</style>
