<template>
  <main>
    <h1>CPLN 240 Lesson Plans</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        <nuxt-link :to="`cpln-240/lessons/${lesson.slug}`">
          {{ lesson.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const lessons = await $content("cpln-240/lessons").fetch();
    return {
      lessons,
    };
  },
};
</script>