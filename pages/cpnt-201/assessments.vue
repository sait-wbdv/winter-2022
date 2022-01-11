<template>
  <div>
    <main>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("cpnt-201/assessments").fetch();
    return {
      page,
    };
  },
};
</script>