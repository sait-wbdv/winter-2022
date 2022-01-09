<template>
  <main>
    <h1>DSGN 270 Assessments</h1>
    <h2>Code Journal</h2>

    <h2>Assignments</h2>
    <ul>
      <li v-for="assignment in assignments" :key="assignment.id">
        <nuxt-link :to="`assignments/${assignment.slug}`">
          {{ assignment.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const assignments = await $content("dsgn-270/assignments").fetch();
    const journal = await $content("dsgn-270/code-journal.md").fetch();
    return {
      assignments,
    };
  },
};
</script>