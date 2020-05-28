<template>
  <container>
    <div class="stories">
      <h2 class="stories__title">Истории неизлечимых превычек</h2>
      <!--    Делаем карточку -->
      <ul class="stories__container">
        <li
          v-for="story in storiesToRender"
          :key="story.id"
          class="stories__item"
        >
          <story-card
            :src="defineImage(story.ImageUrl[0].formats)"
            :author="story.author"
            :text="story.title"
            @cardClick="goToDetail(story.id)"
          />
        </li>
      </ul>
      <!-- делаем пагинацию - разбивку по страничкам -->
      <!--    <pagination-->
      <!--      :totalItems="this.$store.state.stories.cards.length"-->
      <!--      :itemsPerPage="itemsPerPage"-->
      <!--      @onPageChanged="changeStartIndex"-->
      <!--    />-->
      <nuxt-link to="/stories" class="stories__link">Больше статей</nuxt-link>
    </div>
  </container>
</template>

<script>
import Storycard from '@/components/blocks/Storycard';
import Container from '~/components/blocks/Container';
export default {
  components: {
    'story-card': Storycard,
    container: Container,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
    defineImage(formats) {
      if (!formats.small || !formats.small.url) {
        return '@/assets/images/noavatar.png';
      }
      return `${this.baseUrl}${formats.small.url}`;
    },
  },

  data() {
    return {
      itemsPerPage: 8,
      startIndex: 0,
      baseUrl: process.env.baseUrl,
    };
  },

  computed: {
    storiesToRender() {
      const { stories } = this.$store.state;
      return stories.stories.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      );
    },
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
};
</script>

<style scoped>
.stories {
  padding: 100px 0;
}

.stories__title {
  font-weight: 600;
  font-size: 2em;
  line-height: 1.125;
  max-width: 413px;
}

.stories__container {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  margin: 70px 0;
  max-width: 1320px;
  padding: 0;
  list-style: none;
}

.stories__link {
  background-color: #fbfbfb;
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.25em;
  padding: 31px 0;
}

.stories__link:hover {
  background: rgba(0, 0, 0, 0.1);
  transition: 0.1s linear;
}

@media screen and (max-width: 1280px) {
  .stories {
    padding: 90px 0;
  }

  .stories__title {
    font-size: 1.75em;
    line-height: 1.14;
  }

  .stories__container {
    grid-row-gap: 60px;
  }

  .stories__link {
    padding: 29px 0;
  }
}

@media screen and (max-width: 1024px) {
  .stories {
    padding: 80px 0;
  }

  .stories__title {
    font-size: 1.5em;
    line-height: 1.167;
    max-width: 288px;
  }

  .stories__container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }

  .stories__link {
    font-size: 0.8em;
    padding: 17px 0;
  }
}

@media screen and (max-width: 768px) {
  .stories {
    padding: 80px 0;
  }

  .stories__title {
    font-size: 1.5em;
    line-height: 1.167;
    max-width: 380px;
    text-align: center;
    margin: 0 auto;
  }

  .stories__container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }

  .stories__link {
    font-size: 0.8em;
    padding: 17px 0;
  }
}

@media screen and (max-width: 320px) {
  .stories {
    padding: 50px 0;
  }

  .stories__title {
    font-size: 1.125em;
    line-height: 1.313;
  }

  .stories__container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }

  .stories__link {
    font-size: 0.8em;
    padding: 17px 0;
  }
}
</style>
