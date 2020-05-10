<template>
  <div class="container">
    <main class="content">
      <lead class="content__lead" />

      <description class="content__description" />

      <rectangle class="content__rectangle" />

      <stories class="content__stories" />

      <section class="rectangle content__rectangle">
        <h2 class="rectangle__title">
          Рассказывайте ваши истории в инстаграмм #Этонелечится
        </h2>
      </section>

      <socialNetwork />

      <yourStory />

      <statistics />

      <section class="cover content__cover">
        <h2 class="cover__title">#Раклечится</h2>
        <div class="cover__about">
          <div class="cover__heading">
            <h2 class="cover__text-title">О проекте</h2>
            <p class="cover__text-subtitle">
              Этот проект был создан благотворительным фондом Константина
              Хабенского.
            </p>
          </div>

          <div class="cover__lead">
            <h3 class="cover__lead-title">Рак Лечится</h3>
            <p class="cover__lead-subtitle">Фонд Хабенского</p>
            <div class="cover__lead-text">
              <p class="cover__lead-paragraph">
                Есть вещи, которые не лечатся. Особенности характера, страстные
                увлечения, привычки, ставшие частью нашего «я», фобии, которые
                мы приобрели в детстве. Список можно продолжать до
                бесконечности, но одна болезнь в него точно не войдет. Эта
                болезнь — рак. Рак лечится, и лучшее доказательство — люди с их
                неизлечимыми особенностями, которые сумели победить рак.
              </p>
              <p class="cover__lead-paragraph">
                Рак лечится — проект Благотворительного Фонда Константина
                Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
                изменить отношение людей к раку и заставить каждого поверить:
                онкологическое заболевание — это не приговор.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Lead from '@/components/blocks/Lead';
import Description from '@/components/blocks/Description';
import Rectangle from '@/components/blocks/Rectangle';
import Stories from '@/components/blocks/Stories';
import SocialNetwork from '@/components/blocks/Social-network';
import YourStory from '@/components/blocks/Your-story';
import Statistics from '@/components/blocks/Statistics';

export default {
  components: {
    lead: Lead,
    description: Description,
    rectangle: Rectangle,
    stories: Stories,
    socialNetwork: SocialNetwork,
    yourStory: YourStory,
    statistics: Statistics,
  },
};
</script>

<style>
.content__lead {
  margin: 0 auto;
}

.content__description {
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 74px;
}

.content__rectangle {
  margin: 0 auto;
}

.content__stories {
  margin: 0 auto;
  padding-top: 100px;
}
</style>
