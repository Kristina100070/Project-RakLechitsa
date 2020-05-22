<template>
  <div>
    <main class="content">
      <lead />

      <description />

      <rectangle />

      <stories />

      <rectangle>
        <slot
          ><h2 class="rectangle__title rectangle__title_more-broadly">
            Рассказывайте ваши истории в инстаграмм
            <span class="rectangle__title-span">#Этонелечится</span>
          </h2></slot
        >
      </rectangle>

      <socialNetwork />

      <yourStory />

      <statistics />

      <coverLead />

      <!--      <section class="cover content__cover">-->
      <!--        <h2 class="cover__title">#Раклечится</h2>-->
      <!--        <div class="cover__about">-->
      <!--          <div class="cover__heading">-->
      <!--            <h2 class="cover__text-title">О проекте</h2>-->
      <!--            <p class="cover__text-subtitle">-->
      <!--              Этот проект был создан благотворительным фондом Константина-->
      <!--              Хабенского.-->
      <!--            </p>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </section>-->
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
import CoverLead from '@/components/blocks/Cover-lead';

export default {
  components: {
    lead: Lead,
    description: Description,
    rectangle: Rectangle,
    stories: Stories,
    socialNetwork: SocialNetwork,
    yourStory: YourStory,
    statistics: Statistics,
    coverLead: CoverLead,
  },
};
</script>

<style></style>
