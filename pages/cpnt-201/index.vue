<template>
  <div>
    <main>
      <h1>CPNT 201: Web Development Tools and Techniques</h1>
      <p><nuxt-link to="cpnt-201/assessments">Assessments</nuxt-link></p>
      <h2>Lesson Plans</h2>
      <ul>
        <li v-for="(lesson, index) in lessons" :key="lesson.id">
          <nuxt-link v-if="lesson.released" :to="`cpnt-201/lessons/${lesson.slug}`">
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
    const lessons = await $content("cpnt-201/lessons").fetch();
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