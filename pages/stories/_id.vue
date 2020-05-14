<template>
  <story />
</template>

<script>
import Story from '@/components/blocks/Story';
export default {
  components: {
    story: Story,
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
