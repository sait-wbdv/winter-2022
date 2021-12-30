<template>
  <main>
    <h2>CPNT-200</h2>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        <nuxt-link :to="`lessons/${lesson.slug}`">
          {{ lesson.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const lessons = await $content("cpnt-265/lessons").fetch();
    return {
      lessons,
    };
  },
};
</script>