<template>
  <main>
    <h1>DSGN 270 Lesson Plans</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        <nuxt-link :to="`dsgn-270/lessons/${lesson.slug}`">
          {{ lesson.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const lessons = await $content("dsgn-270/lessons").fetch();
    return {
      lessons,
    };
  },
};
</script>