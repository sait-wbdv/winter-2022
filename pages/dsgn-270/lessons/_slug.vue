<template>
  <div>
    <section class="assignments">
      <div class="assignment-box" v-for="assignment in lesson.assignments" :key="assignment.id">
        <a :href="assignment.link">
          <h3>{{ assignment.name }}</h3>
          <p>Due: {{ assignment.due }}</p>
          <p>{{ assignment.type }}</p>
        </a>
      </div>
    </section>
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
      const lesson = await $content(`dsgn-270/lessons/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e) {
      error('No lesson found');
    }
  }
};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
header {
  text-align: center;
}
h1 {
  font-weight: bold;
}
.assignments {
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.assignment-box {
  background-color: #dd9084;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;
}
.assignment-box h3 {
  max-width: 16ch;
  margin: 0.5rem;
  font-weight: bold;
}
.assignment-box a:hover {
  background-color: #d83f27;
}
.assignment-box a {
  padding: 1rem 3rem;
  color: inherit;
  text-decoration: none;
}
.assignment-box p {
  margin: 0.3rem;
}
</style>
