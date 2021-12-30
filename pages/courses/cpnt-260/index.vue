<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <nuxt-link
        :to="`cpnt-260/${post.slug}`"
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
    const posts = await $content("cpnt-260").fetch();
    return {
      posts,
    };
  },
};
</script>