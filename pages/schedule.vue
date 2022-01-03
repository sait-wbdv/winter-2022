<template>
  <main>
    <h1>Program Schedule</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
          <nuxt-link :to="`${lesson.course}/lessons/${lesson.slug}`">{{ lesson.label }} - {{ lesson.title }}</nuxt-link>
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
    // Step 1. Declare base `week` and `startDate`
    lessons = lessons.map(item => {
      // Step 2. If first `item`: set `startDate` to Monday of first week of `item.date`, set `week` to 1
      // Step 3. Else: subtract `startDate` from `currentDate`, divide by 7 and round down (`currentWeek`)
      // Step 4. If `week` !== `currentWeek`, set `week` = `currentWeek`
      // Step 5. Set `item.week` = `week`


      // TODO: what's the most efficient way to remove the multiple split() calls?
      item.course = item.dir.split('/')[1];
      item.type = item.dir.split('/')[2];
      item.day = parseInt(item.slug.split("-")[1]);
      item.label = `${item.course.split('-')[0].toUpperCase()} ${item.course.split('-')[1]} Day ${item.day}`

      return item;
    })

    // TODO: why isn't vue-luxon working?
    // console.log(this.$luxon("2020-10-05T14:48:00.000Z"));

    return {
      lessons,
    };
  },

};
</script>