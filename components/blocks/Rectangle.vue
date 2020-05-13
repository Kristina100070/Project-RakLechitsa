<template>
  <div class="rectangle">
    <slot
      ><h2 class="rectangle__title">
        И в отличие от рака,
        <span class="rectangle__title-span">#Этонелечится</span>
      </h2></slot
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rectangle {
  max-width: calc(100% - 120px);
  background-color: #613a93;
  border: 1px solid #000;
}

.rectangle__title {
  max-width: 800px;
  font-weight: normal;
  font-size: 1.875em;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  padding: 17px 0;
  margin: 0 auto;
}

.rectangle__title-span {
  font-weight: bold;
  font-size: 1.4em;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .rectangle {
    max-width: calc(100% - 100px);
  }

  .rectangle__title {
    font-size: 1.75em;
  }

  .rectangle__title-span {
    font-size: 1.35em;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .rectangle {
    max-width: calc(100% - 100px);
  }

  .rectangle__title {
    font-size: 1.5em;
    line-height: 1.7;
    padding: 11px 0;
  }

  .rectangle__title-span {
    font-size: 1.35em;
  }
}
</style>
