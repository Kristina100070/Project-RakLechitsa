<template>
  <div class="story">
    <div class="story__container">
      <img src="" alt="" class="story__photo" />
      <div class="story__title-container">
        <h2 class="story__title">
          Александр Тарханов: «Я не могу победить свою пунктуальность в отличии
          от рака»
        </h2>
        <div class="story__link-container">
          <a href="" class="story__link">Поделитесь ↗</a>
          <p class="story__link story__date">20 апреля 2018</p>
        </div>
      </div>
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
    <a href="" class="story__link"
      >Поделитесь этой статьей в своих социальных сетях ↗</a
    >
  </div>
</template>

<style>
.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 0;
  align-items: center;
}
.story__container {
  display: flex;
  flex-direction: row;
}
.story__photo {
  width: 580px;
  height: 580px;
  background: #ededed;
  margin-right: 60px;
}
.story__title-container {
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.story__title {
  font-size: 38px;
  line-height: 126%;
  color: #000000;
}
.story__link-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
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
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
