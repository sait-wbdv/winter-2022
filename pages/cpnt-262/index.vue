<template>
  <div>
    <main>
      <h1>CPNT 262 Lesson Plans</h1>
      <ul>
        <li v-for="lesson in lessons" :key="lesson.id">
          <nuxt-link :to="`cpnt-262/lessons/${lesson.slug}`">
            {{ lesson.title }}
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
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