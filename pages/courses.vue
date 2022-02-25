<template>
  <div>
    <main class="container mx-auto flex flex-col items-center">

      <h2 class="text-center">Courses</h2>
      <ul class="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center items-start w-full mb-12 list-none">
        <li v-for="course in courses" :key="course.id">
          <nuxt-link
            :to="course.course"
            class="flex rounded-md shadow-lg no-underline w-96 text-black bg-gray-300 hover:opacity-70 transition ease-in-out duration-400"
          >
            <div class="flex flex-col justify-center ml-4 order-2">
              <h3 class="text-3xl font-bold m-2">
                {{ course.course }}
              </h3>
              <p class="m-2">{{ course.title }}</p>
            </div>
            <img :src="course.image" alt="" class="w-52 min-h-32 h-48 object-cover rounded-l-lg" />
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [
        {
          course: 'cpnt-200',
          title: 'Content Management Systems',
          image: '/assets/images/site-ui/cpnt200-card.jpg',
        },
        {
          course: 'cpnt-201',
          title: 'Web Development Tools',
          image: '/assets/images/site-ui/cpnt201-card.jpg',
        },
        {
          course: 'cpnt-260',
          title: 'Web Page Fundamentals',
          image: '/assets/images/site-ui/cpnt260-card.jpg',
        },
        {
          course: 'cpnt-262',
          title: 'Client and Server Programming',
          image: '/assets/images/site-ui/cpnt262-card.jpg',
        },
        {
          course: 'cpnt-265',
          title: 'Business of the Web',
          image: '/assets/images/site-ui/cpnt265-card.jpg',
        },
        {
          course: 'dsgn-270',
          title: 'Design Fundamentals',
          image: '/assets/images/site-ui/dsgn270-card.jpg',
        },
      ],
    };
  },
};
</script>
