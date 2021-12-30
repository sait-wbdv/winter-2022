<template>
  <main>
    <h2>CPNT-200</h2>
    <ul>
      <li v-for="assignment in assignments" :key="assignment.id">
        <nuxt-link :to="`dsgn-270/assignments/${assignment.slug}`">
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
    return {
      assignments,
    };
  },
};
</script>