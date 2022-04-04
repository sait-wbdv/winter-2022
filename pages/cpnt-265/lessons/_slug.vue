<template>
  <div>
    <main>
      <h1>{{ lesson.title }}</h1>
      <nuxt-content v-if="lesson.released" :document="lesson" />
      <h2 v-else>Lesson not published</h2>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`cpnt-265/lessons/${params.slug}`).fetch();
      return {
        lesson,
      };
    } catch (e) {
      error("No lesson found");
    }
  },
};
</script>
