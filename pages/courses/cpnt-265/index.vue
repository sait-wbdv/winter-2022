<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <nuxt-link
        :to="`cpnt-265/${params.slug}`"
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
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-265");
    return {
      posts,
    };
  },
};
</script>