<template>
  <main class="stories">
    <h2 class="stories-title">
      Истории неизлечимых привычек
    </h2>
    <form class="search">
      <searchinput class="search-input" />
      <searchbutton>Поиск</searchbutton>
    </form>
    <section id="cards" class="cards">
      <!-- делаем функцию карточек -->
      место для карточек
      <!-- делаем пагинацию - разбивку по страничкам -->
      <ul class="pagination">
        <li>
          <vue-ads-pagination class="pagination-button">1</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">2</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">3</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">4</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">5</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">6</vue-ads-pagination>
        </li>
        <li>
          <vue-ads-pagination class="pagination-button">7</vue-ads-pagination>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
//импортнуть хедер
import Button from '@/components/ui/Button';
import Searchinput from '@/components/ui/Searchinput';
import VueAdsPageButton from '@/components/ui/VueAdsPageButton';
//сюда импортировать карточки, не забыть прописать в компоненты и на страничку
//импортнуть футер

export default {
  components: {
    searchbutton: Button,
    searchinput: Searchinput,
    'vue-ads-pagination': VueAdsPageButton,
  },
};
</script>

<style scoped>
.stories {
  padding-left: 60px;
  padding-right: 60px;
}
.stories-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin-top: 100px;
}
.search {
  display: flex;
  margin-top: 60px;
  padding: 0;
}
.pagination {
  list-style: none;
  display: flex;
  max-width: 466px;
  margin: 140px auto 0;
}

@media screen and (max-width: 1280px) {
  .stories {
    padding-left: 50px;
    padding-right: 50px;
  }
  .stories-title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
    margin-top: 90px;
  }
  .search {
    margin-top: 50px;
  }
}
</style>
