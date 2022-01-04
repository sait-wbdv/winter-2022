<template>
  <main>
    <h1>Program Schedule</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
          Week {{lesson.week}}: <nuxt-link :to="`${lesson.course}/lessons/${lesson.slug}`">{{ lesson.label }} - {{ lesson.title }}</nuxt-link>
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
    let week = 1; // Week of WBDV Program (1-15)
    let firstMon = new Date(2022, 0, 10, 8, 0, 0, 0); // First Monday of the semester

    // Loop through lessons and add some properties
    lessons = lessons.map((item) => {
      let itemDate = new Date (item.date)
      itemDate = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate() + 1, 8, 0, 0, 0);

      // Step 3. Else: subtract `firstMon` from `currentDate`, divide by 7 and round down (`currentWeek`)
      // Step 4. If `week` !== `currentWeek`, set `week` = `currentWeek`
      // Step 5. Set `item.week` = `week`
      item.week = week + (Math.floor((itemDate.getTime() - firstMon.getTime()) / 24 / 60 / 60 / 1000 / 7));

      // Set course, type and day from directory info
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