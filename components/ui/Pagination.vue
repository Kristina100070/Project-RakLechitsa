<template>
  <div class="pagination">
    <div
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
      @click="startIndex()"
    >
      Первая
    </div>
    <div
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
      v-if="index != 1"
      @click="onClickPreviousPage(index)"
    >
      &lsaquo;
    </div>
    <div
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
    >
      {{ index }}
    </div>
    <div
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
    >
      &rsaquo;
    </div>
    <div
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
      @click="lastIndex(index)"
    >
      Последняя
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startIndex: {
      type: Number,
      default: 0,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
    },
    onClickPreviousPage(index) {
      this.active = index;
      this.$emit('onPageChanged', index - 1);
    },
    startIndex(index) {
      this.active = index;
      this.$emit('onPageChanged', (index = 1));
    },
    lastIndex(index) {
      this.active = index;
      this.$emit('onPageChanged', (index = this.pagesCount));
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 140px auto 100px;
}
.pagination__item {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  margin-right: 10px;
  border: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination__item:last-child {
  margin-right: 0;
}
.pagination__item_active,
.pagination__item:hover {
  background-color: #f4f4f4;
}

@media screen and (max-width: 1280px) {
  .pagination {
    margin: 130px auto 90px;
  }
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination {
    margin: 130px auto 80px;
  }
  .pagination__item {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 320px) {
  .pagination {
    margin: 50px auto 98px;
  }
}
</style>
