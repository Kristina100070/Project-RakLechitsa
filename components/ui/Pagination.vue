<template>
  <div class="pagination">
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
  </div>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 466px;
  margin: 140px auto 0;
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
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination__item {
    width: 50px;
    height: 50px;
  }
}
</style>
