<template>
  <div>
    <nav class="menu">
      <link-menu />
      <Button @btnClick="$emit('btnClick')" className="button_menu">{{
        text
      }}</Button>
    </nav>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import LinkMenu from '@/components/ui/LinkMenu';
export default {
  components: {
    Button,
    'link-menu': LinkMenu,
  },
  data() {
    return {
      text: 'Рассказать историю',
    };
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}
</style>
