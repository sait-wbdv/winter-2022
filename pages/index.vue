<template>
  <main>
    <h1>Program Schedule</h1>
    <section v-for="(week, index) in schedule" :key="week.id">
      <h2>Week {{ index + 1 }}</h2>
      <ul>
        <li v-for="lesson in week" :key="lesson.id">
          <time>{{ $dayjs(lesson.date).format('MMM D') }}</time>: 
          <nuxt-link v-if="lesson.released" :to="`${lesson.course}/lessons/${lesson.slug}`">{{ lesson.label }} - {{ lesson.title }}</nuxt-link>
          <span v-else>{{ lesson.label }} - {{ lesson.title }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'

export default {
  async asyncData({ $content, $dayjs }) {
    // DayJS plugin test
    $dayjs.extend(utc);
    $dayjs.extend(timezone);
    console.log($dayjs.tz.guess());

    const values = await Promise.all(
      [
        $content("cpnt-264/lessons").fetch(),
        $content("cpln-240/lessons").fetch(),
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
    
    let week = 1; // First week of WBDV Program (1-15)
    let prevWeek = 1; // Week number of previous item
    let firstMon = new Date(2022, 0, 10, 8, 0, 0, 0); // First Monday of the semester
    let schedule = []; // array of weeks 1-15
    let weekDetails = []; // Assigned to `schedule` when week num changes; reset for the next week

    // Loop through lessons and add some properties
    lessons = lessons.map((item, index) => {
      // Add week number
      let itemDate = new Date (item.date);

      // TODO: find a better way to compensate for timezone; adding a day will break when month turns over?
      itemDate = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate() + 1, 8, 0, 0, 0);
      item.week = week + (Math.floor((itemDate.getTime() - firstMon.getTime()) / 24 / 60 / 60 / 1000 / 7));

      // Set course, type and day from directory info
      // TODO: what's the most efficient way to remove the multiple split() calls?
      item.course = item.dir.split('/')[1];
      item.type = item.dir.split('/')[2];
      item.day = parseInt(item.slug.split("-")[1]);
      item.label = `${item.course.split('-')[0].toUpperCase()} ${item.course.split('-')[1]} Day ${item.day}`

      if (item.week === prevWeek) {
        weekDetails.push(item);
        if (index === lessons.length - 1) {
          // Assumption for last item: last week isn't one lesson day
          schedule.push(weekDetails);
        }
      } else {
        // Assumption: sequence of weeks is unbroken week === prevWeek + 1
        schedule.push(weekDetails);

        weekDetails = [];
        weekDetails.push(item);
        prevWeek = item.week;
      }

      return item;
    })

    console.log(schedule);

    // TODO: why isn't vue-luxon working?
    // console.log(this.$luxon("2020-10-05T14:48:00.000Z"));

    return {
      schedule,
      $dayjs
    };
  },

};
</script>