<template>
  <button class="pagination-button">
    <a href="" class="pagination-link">
      <slot class="pagination-page">
        Х
      </slot>
    </a>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.pagination-button {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  margin-right: 10px;
  border: 0;
}
.pagination-button:hover {
  cursor: pointer;
}

.pagination-page {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
}

.pagination-link {
  text-decoration: none;
  color: #181818;
}
</style>
