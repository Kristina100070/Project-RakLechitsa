<template>
  <container>
    <section class="social-network">
      <div class="social-network__content">
        <h2 class="social-network__title">Инстаграм</h2>
        <p class="social-network__subtitle">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="social-network__container">
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
        <div class="social-network__image"></div>
      </div>
    </section>
  </container>
</template>

<script>
import Container from '~/components/blocks/Container';

export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.social-network {
  padding: 100px 0;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*grid-column-gap: 110px;*/
}

.social-network__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  text-decoration-line: underline;
  margin-top: 10px;
}

.social-network__subtitle {
  padding-top: 32px;
  font-size: 1.125em;
  line-height: 1.2;
  max-width: 345px;
  color: #666;
}

.social-network__container {
  display: grid;
  grid-template-columns: 195px 195px 195px 195px;
  gap: 30px;
}

.social-network__image {
  background-color: #f7f7f7;
  width: 195px;
  height: 195px;
}

@media screen and (max-width: 1280px) {
  .social-network {
    padding: 90px 0;
  }

  .social-network__title {
    font-size: 1.75em;
    line-height: 1.143;
  }

  .social-network__subtitle {
    padding-top: 30px;
    font-size: 1.125em;
    line-height: 1.2;
  }

  .social-network__container {
    display: grid;
    grid-template-columns: 171px 171px 171px 171px;
    gap: 27px;
  }

  .social-network__image {
    background-color: #f7f7f7;
    width: 171px;
    height: 171px;
  }
}

@media screen and (max-width: 1024px) {
  .social-network {
    padding: 80px 0;
  }

  .social-network__title {
    font-size: 1.5em;
    line-height: 1.167;
  }

  .social-network__subtitle {
    padding-top: 20px;
    font-size: 0.8em;
    line-height: 1.231;
    max-width: 260px;
  }

  .social-network__container {
    margin-left: 60px;
    display: grid;
    grid-template-columns: 136px 136px 136px 136px;
    gap: 20px;
  }

  .social-network__image {
    background-color: #f7f7f7;
    width: 136px;
    height: 136px;
  }
}

@media screen and (max-width: 768px) {
  .social-network {
    padding: 80px 0;
  }

  .social-network {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-network__title {
    margin-top: 0;
    font-size: 1.5em;
    line-height: 1.167;
  }

  .social-network__subtitle {
    padding-top: 26px;
    font-size: 0.8em;
    line-height: 1.231;
    max-width: 380px;
  }

  .social-network__container {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 157px 157px 157px 157px;
    gap: 20px;
  }

  .social-network__image {
    background-color: #f7f7f7;
    width: 157px;
    height: 157px;
  }
}

@media screen and (max-width: 320px) {
  .social-network {
    padding: 50px 0;
  }

  .social-network__title {
    margin-top: 0;
    font-size: 1.125em;
    line-height: 1.167;
  }

  .social-network__subtitle {
    padding-top: 16px;
    font-size: 0.8em;
    line-height: 1.231;
    max-width: 290px;
  }

  .social-network__container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 140px 140px;
    gap: 10px;
  }

  .social-network__image {
    background-color: #f7f7f7;
    width: 140px;
    height: 140px;
  }
}
</style>
