<template>
  <main>
    <h2>{{ posts.title }}</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`cpnt-262/${params.slug}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("cpnt-262").fetch();
    return {
      posts,
    };
  },
};
</script>