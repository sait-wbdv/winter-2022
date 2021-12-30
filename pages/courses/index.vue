<template>
  <div>
    <h2>Courses</h2>
    <ul>
      <li>
        <nuxt-link to="courses/cpnt-200">CPNT-200</nuxt-link>
      </li>
      <li>
        <nuxt-link to="courses/cpnt-201">CPNT-201</nuxt-link>
      </li>
      <li>
        <nuxt-link to="courses/cpnt-260">CPNT-260</nuxt-link>
      </li>
      <li>
        <nuxt-link to="courses/cpnt-262">CPNT-262</nuxt-link>
      </li>
      <li>
        <nuxt-link to="courses/cpnt-265">CPNT-265</nuxt-link>
      </li>
      <li>
        <nuxt-link to="courses/dsgn-270">DSGN-262</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.options.routes.forEach((route) => {
      this.courses.push({ name: route.name, path: route.path });
    });
  },
  data() {
    return {
      courses: [],
    };
  },
};
</script>