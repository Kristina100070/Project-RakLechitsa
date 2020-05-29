<template>
  <input class="search-input" type="search" />
</template>

<script>
export default {};
</script>

<style scoped>
.search-input {
  width: 1074px;
  height: 52px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin-right: 20px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
}

@media screen and (max-width: 1280px) {
  .search-input {
    width: 934px;
    height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .search-input {
    width: 696px;
    height: 46px;
  }
}

@media screen and (max-width: 768px) {
  .search-input {
    width: 460px;
    height: 46px;
  }
}

@media screen and (max-width: 320px) {
  .search-input {
    width: 238px;
    height: 46px;
    margin-right: 6px;
  }
}
</style>
