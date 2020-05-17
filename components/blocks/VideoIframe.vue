<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.video-iframe {
  width: 100%;
  padding-bottom: calc(150 * 100% / 289);
  position: relative;
}
iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
