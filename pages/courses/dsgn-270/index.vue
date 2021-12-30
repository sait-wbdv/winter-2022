<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <li v-for="post in posts" :key="post.id"></li>
      <nuxt-link :to="`dsgn-270/${params.slug}`">
        {{ post.title }}
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("dsgn-270").fetch();
    return {
      posts,
    };
  },
};
</script>