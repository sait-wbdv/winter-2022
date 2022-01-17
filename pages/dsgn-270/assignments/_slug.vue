<template>
  <div>
    <main>
      <h1>{{ assignment.title }}</h1>
      <nuxt-content :document="assignment" />
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const assignment = await $content(
        `dsgn-270/assignments/${params.slug}`
      ).fetch();
      return {
        assignment,
      };
    } catch (e) {
      error("No lesson found");
    }
  },
};
</script>
