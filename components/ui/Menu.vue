<template>
  <div>
    <nav class="menu">
      <a href="" class="menu_link">Главная</a>
      <a href="" class="menu_link">Истории</a>
      <Button @btnClick="$emit('btnClick')" className="button_menu">{{
        text
      }}</Button>
    </nav>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    Button,
  },
  data() {
    return {
      text: 'Рассказать историю',
    };
  },
};
</script>

<style scoped>
.menu_link {
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  color: #121212;
}
.menu_link:last-of-type {
  margin-right: 0;
}
</style>
