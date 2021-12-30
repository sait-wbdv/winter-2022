<template>
  <main>
    <h1>CPNT 201 Assessments</h1>
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
    const assignments = await $content("cpnt-200/assignments").fetch();
    return {
      assignments,
    };
  },
};
</script>