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
    let week; // Week of WBDV Program (1-15)
    let startDate; // Date of first lesson 
    let firstMon; // Date of the monday of week 1

    // Loop through lessons and add some properties
    lessons = lessons.map((item, index) => {
      const currentDateArr = item.date.split('-') // YYYY-MM-DD
      const currentDate = new Date(Date.UTC(currentDateArr[0], currentDateArr[1], currentDateArr[2], 0, 0, 0))
      // Step 2. If first `item`: 
      if (index === 0) {
        // first item
        week = 1;
        startDate = currentDate;

        // set `startDate` to Monday of first week of `item.date`
        if (startDate.getDay() === 1) {
          // Monday
          firstMon = startDate;
        } else if (startDate.getDay() === 0) {
          // Sunday
          firstMon = new Date(startDate - (60 * 60 * 24 * 6));
        } else {
          // Tuesday-Saturday (2-6)
          firstMon = new Date(startDate - (60 * 60 * 24 * (startDate.getDay() - 1)));
        }
        console.log(item.date, startDate.getDay(), firstMon.getDay())
        console.log(startDate, firstMon)
      } else {
        // Not the first item
        // Step 3. Else: subtract `firstMon` from `currentDate`, divide by 7 and round down (`currentWeek`)
        // Step 4. If `week` !== `currentWeek`, set `week` = `currentWeek`
        week = week + (Math.floor((currentDate - firstMon) / 24 / 60 / 60 / 7))
      }

      // Step 5. Set `item.week` = `week`
      item.week = week;

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