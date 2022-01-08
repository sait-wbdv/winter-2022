<template>
  <nav aria-label="Pagination Navigation">
    <ul>
      <li v-for="lesson in schedule" :key="lesson.id">{{ lesson }}</li>
    </ul>
  </nav>
</template>

<script>

export default {
  computed: {
    schedule () {
      // placeholder init
      this.$store.commit("initLessons", [1, 2, 3]);
      console.log(this.$store.state.lessons);

      return this.$store.state.lessons;
    }
  }
}
</script>