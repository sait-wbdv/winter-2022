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
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content(`help/${params.slug}`).fetch();
      return {
        page,
      };
    } catch (e) {
      error("Page not found.");
    }
  },
};
</script>
