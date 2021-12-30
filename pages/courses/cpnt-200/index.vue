<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <p>{{ $route.path }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`cpnt-200/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
      </li>
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