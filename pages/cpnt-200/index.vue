<template>
  <div>
    <main>
      <h1>CPNT 200 Lesson Plans</h1>
      <ul>
        <li v-for="(lesson, index) in lessons" :key="lesson.id">
          <nuxt-link v-if="lesson.released" :to="`cpnt-200/lessons/${lesson.slug}`">
            Day {{ index + 1 }}: {{ lesson.title }}
          </nuxt-link>
          <span v-else>
            Day {{ index + 1 }}: {{ lesson.title }}
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const lessons = await $content("cpnt-200/lessons").fetch();
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