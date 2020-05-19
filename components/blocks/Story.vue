<template>
  <div class="story">
    <div class="story__container">
      <img src="" alt="" class="story__photo" />
      <!-- <div class="story__title-container">-->
      <h2 class="story__title">
        Александр Тарханов: «Я не могу победить свою пунктуальность в отличии от
        рака»
      </h2>
      <div class="story__link-container">
        <nxt-link href="" class="story__link">{{ link_text }}</nxt-link>
        <p class="story__date">{{ date }}</p>
      </div>
      <!-- </div>-->
    </div>
    <p class="story__text">
      Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
      ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
      злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
      перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
      «Значит, точно проиграем». Такая болезненная пунктуальность уже не
      лечится».
    </p>
    <nxt-link href="" class="story__link">{{ link_text_long }}</nxt-link>
  </div>
</template>

<script>
import Link from '@/components/ui/Link';
export default {
  components: {
    'nxt-link': Link,
  },
  data() {
    return {
      link_text: 'Поделитесь ↗',
      date: '20 апреля 2018',
      link_text_long: 'Поделитесь этой статьей в своих социальных сетях ↗',
    };
  },
};
</script>

<style>
.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 0;
  align-items: center;
}
.story__container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
}
.story__photo {
  width: 580px;
  height: 580px;
  background: #ededed;
  grid-row-start: 1;
  grid-row-end: 3;
}

.story__photo:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.story__title {
  font-size: 38px;
  line-height: 126%;
  color: #000000;
  display: inline-block;
  align-content: flex-start;
}
.story__link-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  align-items: end;
}
.story__link {
  font-size: 18px;
  line-height: 133%;
  color: #121212;
  text-decoration: none;
  text-align: center;
}
.story__text {
  margin: 130px auto 70px;
  font-size: 22px;
  line-height: 136%;
  color: #000000;
  max-width: 780px;
}
.story__date {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
@media screen and (max-width: 1439px) {
  .story__photo {
    width: 518px;
    height: 518px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }
  .story__text {
    margin-top: 120px;
    font-size: 20px;
    line-height: 28px;
  }
  .story__date {
    font-size: 18px;
    line-height: 24px;
  }
}
@media screen and (max-width: 1279px) {
  .story__photo {
    width: 407px;
    height: 407px;
  }
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .story__text {
    margin-top: 90px;
    font-size: 18px;
    line-height: 20px;
  }
  .story__date {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 1023px) {
  .story__photo {
    width: 420px;
    height: 420px;
  }
  .story__title {
    font-size: 30px;
    line-height: 38px;
  }
  .story__text {
    margin-top: 100px;
    font-size: 18px;
    line-height: 27px;
  }
  .story__date {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 779px) {
  .story__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .story__link-container {
    order: 3;
    width: 84%;
  }
  .story__photo {
    width: 290px;
    height: 290px;
    order: 2;
  }
  .story__title {
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    order: 1;
  }
  .story__text {
    margin-top: 40px;
    font-size: 13px;
    line-height: 16px;
  }
  .story__date {
    font-size: 13px;
    line-height: 16px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
