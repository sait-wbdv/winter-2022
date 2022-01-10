<template>
  <div>
    <main>
      <h1>CPNT 264 Lesson Plans</h1>
      <ul>
        <li v-for="lesson in lessons" :key="lesson.id">
          <nuxt-link :to="`cpnt-264/lessons/${lesson.slug}`">
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
    const lessons = await $content("cpnt-264/lessons").fetch();
    return {
      lessons: lessons.sort((a,b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a - b;
      })
    };
  },
};
</script>