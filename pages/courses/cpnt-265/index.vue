<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <li v-for="post in posts" :key="post.id"></li>
      <nuxt-link :to="`cpnt-265/${params.slug}`">
        {{ post.title }}
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-265");
    return {
      posts,
    };
  },
};
</script>