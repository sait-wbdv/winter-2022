<template>
  <div>
    <main>
      <h1>{{ lesson.title }}</h1>
      <nuxt-content :document="lesson" />
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`cpnt-200/lessons/${params.slug}`).fetch();
      return {
        lesson,
      };
    } catch (e) {
      error("No lesson found");
    }
  },
};
</script>
