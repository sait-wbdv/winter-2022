<template>
  <main>
    <h2>CPNT-200</h2>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        <nuxt-link :to="`cpnt-262/lessons/${lesson.slug}`">
          {{ lesson.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const lessons = await $content("cpnt-262/lessons").fetch();
    return {
      lessons,
    };
  },
};
</script>