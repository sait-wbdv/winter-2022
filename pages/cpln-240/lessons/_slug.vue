<template>
  <div>
    <h1>{{ lesson.title }}</h1>
    <nuxt-content :document="lesson" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`cpln-240/lessons/${params.slug}`).fetch();
      return {
        lesson,
      };
    } catch (e) {
      error("No lesson found");
    }
  },
};
</script>
