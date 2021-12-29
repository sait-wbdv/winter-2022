<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <nuxt-link v-for="post in posts" :key="post.slug">
        {{ post.title }}
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts,
    };
  },
};
</script>