<template>
  <container>
    <div class="rectangle">
      <slot>
        <h2 class="rectangle__title">
          И в отличие от рака,
          <span class="rectangle__title-span">#Этонелечится</span>
        </h2></slot
      >
    </div>
  </container>
</template>

<script>
import Container from '@/components/blocks/Container';

export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.rectangle {
  margin: 0 auto;
  background-color: #613a93;
  border: 1px solid #000;
}

.rectangle__title {
  max-width: 800px;
  font-weight: normal;
  font-size: 1.875em;
  line-height: 1.2;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding: 17px 0;
  margin: 0 auto;
}

.rectangle__title-span {
  font-weight: bold;
  font-size: 1.4em;
}

@media screen and (max-width: 1280px) {
  .rectangle__title {
    font-size: 1.75em;
  }

  .rectangle__title-span {
    font-size: 1.35em;
  }
}

@media screen and (max-width: 1024px) {
  .rectangle__title {
    font-size: 1.5em;
    line-height: 1.7;
    padding: 11px 0;
  }
  .rectangle__title-span {
    font-size: 1.35em;
  }
}

@media screen and (max-width: 768px) {
  .rectangle__title {
    max-width: 444px;
    font-size: 1.375em;
    line-height: 1.2;
    padding: 12px 0;
  }

  .rectangle__title-span {
    font-size: 1.48em;
  }

  .rectangle__title_more-broadly {
    max-width: 628px;
  }
}

@media screen and (max-width: 420px) {
  .rectangle__title {
    max-width: 220px;
    font-size: 1em;
    line-height: 1.12;
    padding: 15px 0;
  }

  .rectangle__title-span {
    font-size: 1.4em;
  }
}

@media screen and (max-width: 320px) {
  .rectangle__title {
    max-width: 220px;
    font-size: 1em;
    line-height: 1.12;
    padding: 15px 0;
  }

  .rectangle__title-span {
    font-size: 1.4em;
  }
}
</style>
