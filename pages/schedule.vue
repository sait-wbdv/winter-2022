<template>
  <main>
    <h1>Program Schedule</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
          {{ lesson.title }}
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const values = await Promise.all(
      [
        $content("cpnt-201/lessons").fetch(),
        $content("dsgn-270/lessons").fetch(),
        $content("cpnt-260/lessons").fetch(),
        $content("cpnt-262/lessons").fetch(),
        $content("cpnt-200/lessons").fetch(),
        $content("cpnt-265/lessons").fetch()
      ]
      
    )
    const lessons = [].concat.apply([],values)

    return {
      lessons,
    };
  },
};
</script>