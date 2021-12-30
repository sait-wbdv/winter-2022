<template>
  <div>
    <h2>{{ lesson.title }}</h2>
    <nuxt-content :document="lesson" />
  </div>
</template>
<script>
export default defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`cpnt-200/${params.slug}`).fetch();
      return {
        lesson,
      };
    } catch (e) {
      error("No lesson found");
    }
  },
});
</script>
