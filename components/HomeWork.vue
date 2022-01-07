<template>
  <section>
    <!-- Create template for homework content -->
      <!-- article -->
        <!-- title  --> 
        <!-- list of links-->
        <!-- embedded videos at full screen + links, only links at <half screen size -->
  </section>
</template>

<script>
export default {
    // load an array from the frontmatter
    // use conditionals in the template to render different layouts depending on content supplied
      // can use a conditional or a computed property to select the correct article layout this would access the prop
  props: {
    homeWork: {
      type: Array
    } 
  }
}
</script>
