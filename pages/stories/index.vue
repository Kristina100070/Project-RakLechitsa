<template>
  <main class="stories">
    <!-- это заголовок страницы -->
    <h2 class="stories-title">
      Истории неизлечимых привычек
    </h2>
    <!-- делаем поиск по страничке -->
    <form class="search">
      <searchinput v-model="appliedStoriesName" class="search-input" />
      <searchbutton
        @click="appliedStoriesName = storiesName"
        class="search-button"
        >Поиск</searchbutton
      >
    </form>

    <!-- делаем функцию карточек -->
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
    <pagination
      :totalItems="this.$store.state.stories.stories.length"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </main>
</template>

<script>
import Button from '@/components/ui/Button';
import Searchinput from '@/components/ui/Searchinput';
import Pagination from '@/components/ui/Pagination';
import Storycard from '@/components/blocks/Storycard';

export default {
  components: {
    searchbutton: Button,
    searchinput: Searchinput,
    pagination: Pagination,
    'story-card': Storycard,
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
        return `@/assets/images/noavatar.png`;
      }
      return `${this.baseUrl}${formats.small.url}`;
    },
  },

  data() {
    return {
      itemsPerPage: 16,
      startIndex: 0,
      baseUrl: process.env.baseUrl,
      storiesName: '',
      appliedStoriesName: '',
    };
  },

  computed: {
    initiallyFilteredStories() {
      const { stories } = this.$store.state;
      if (!this.appliedStoriesName || this.appliedStoriesName === '') {
        return stories.stories;
      }
      return stories.stories.filter(
        (item, idx) => item.author.indexOf(this.appliedStoriesName) > -1
      );
    },
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
  // async fetch({ store, params }) {
  //  await  this.$store.dispatch('stories/fetchStories');
  //  },
  mounted() {
    if (process.browser) {
      if (window.innerWidth <= 320) {
        return this.stories.filter((item, idx) => idx < 9);
      } else {
        if (window.innerWidth <= 768) {
          return this.stories.filter((item, idx) => idx < 12);
        } else {
          return this.stories.filter((item, idx) => idx < 16);
        }
      }
    }
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
  .stories__container {
    grid-template-columns: repeat(auto-fill, 265px);
    grid-row-gap: 60px;
  }
  .search {
    margin-top: 50px;
  }
  .search-button {
    height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (max-width: 1024px) {
  .stories-title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
    margin-top: 80px;
  }
  .stories__container {
    grid-template-columns: repeat(auto-fill, 208px);
    grid-row-gap: 46px;
    grid-column-gap: 30px;
  }
  .search-button {
    width: 208px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media (min-width: 321px) and (max-width: 768px) {
  .stories {
    padding-left: 40px;
    padding-right: 40px;
  }
  .stories-title {
    max-width: 380px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
  }
  .stories__container {
    grid-template-columns: repeat(auto-fill, 216px);
    grid-row-gap: 40px;
    grid-column-gap: 20px;
  }
  .search-button {
    width: 208px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 320px) {
  .stories {
    padding-left: 15px;
    padding-right: 15px;
  }
  .stories-title {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
    margin-top: 50px;
  }
  .stories__container {
    grid-template-columns: repeat(auto-fill, 290px);
    grid-row-gap: 30px;
    grid-column-gap: 0;
  }
  .search-button {
    color: transparent;
    background-image: url('../../static/images/searchsvg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
  }
}
</style>
