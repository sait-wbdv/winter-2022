<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <p>{{ $route.path }}</p>
    <ul>
      <nuxt-link
        :to="`cpnt-200/${post.slug}`"
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.title }}
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("cpnt-200").fetch();
    return {
      posts,
    };
  },
};
</script>