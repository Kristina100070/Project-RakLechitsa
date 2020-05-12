<template>
  <input
    :class="[input, className]"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
  />
</template>

<script>
export default {
  props: ['type', 'placeholder', 'name', 'required', 'className'],
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #e8e8e8;
  height: 24px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
}
.unput_bottom-border {
  border: none;
  padding: 12px 0;
  border-bottom: 1px solid #e7e7e7;
}
</style>
