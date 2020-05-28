<template>
  <div>
    <cover />
    <description />
    <rectangle />
    <stories />
    <rectangle />
    <socialNetwork />
    <your-story />
    <statistics />
    <cover-about />
  </div>
</template>

<script>
import Container from '@/components/blocks/Container';
import Cover from '@/components/blocks/Cover';
import Description from '@/components/blocks/Description';
import Rectangle from '@/components/blocks/Rectangle';
import Stories from '@/components/blocks/Stories';
import SocialNetwork from '@/components/blocks/Social-network';
import YourStory from '@/components/blocks/YourStory';
import Statistics from '@/components/blocks/Statistics';
import CoverAbout from '@/components/blocks/CoverAbout';

export default {
  components: {
    cover: Cover,
    description: Description,
    rectangle: Rectangle,
    stories: Stories,
    socialNetwork: SocialNetwork,
    'your-story': YourStory,
    statistics: Statistics,
    'cover-about': CoverAbout,
    container: Container,
  },
};
</script>

<style></style>
