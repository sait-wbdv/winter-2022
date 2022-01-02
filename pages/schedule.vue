<template>
  <main>
    <h1>Program Schedule</h1>
    <ul>
      <!-- Step 4: Prepend Course and Day to title -->
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
    // concatenate each list of course lessons into one
    let lessons = [].concat.apply([],values)

    // Sort by date
    lessons = lessons.sort((a,b) => {
      a = new Date(a.date);
      b = new Date(b.date);
      return a - b;
    })

    console.log(lessons);

    // Step 1: .map on lessons
    lessons = lessons.map(item => {
      item.course = item.dir.split('/')[1];
      item.type = item.dir.split('/')[2];
      
      return item;
    })

    // Step 2: split lesson.dir -> course code and item type (lesson); add to lesson item
    // Step 3: split slug -> day-01 -> Day 1; add to lesson item


    // TODO: why isn't vue-luxon working?
    // console.log(this.$luxon("2020-10-05T14:48:00.000Z"));

    return {
      lessons,
    };
  },
};
</script>