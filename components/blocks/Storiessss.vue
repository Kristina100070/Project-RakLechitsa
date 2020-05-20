<template>
  <ul class="stories__container">
    <li v-for="card in cards" :key="card.id" class="stories__item">
      <story-card
        :src="card.image"
        :author="card.title"
        :text="card.subtitle"
        @cardClick="goToDetail(card.id)"
      />
    </li>
  </ul>
</template>

<script>
import Storycard from '@/components/blocks/Storycard';

export default {
  components: {
    'story-card': Storycard,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    storiesToRender() {
      const { stories } = this.$store.state;
      return stories.cards.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      );
    },
    cards() {
      return this.$store.getters['stories/getCards'];
    },
  },
};
</script>

<style scoped>
.stories__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin: 70px 0;
  max-width: 1320px;
  padding: 0;
  list-style: none;
}
</style>
