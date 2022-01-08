<template>
<section>
  <h3> Terminology </h3>
  <dl>
    <div v-for="def in definitions" :key="def.id">
      <dt>{{ def.term }}</dt>
      <dd>{{ def.definition }}</dd>
    </div>
    <!-- brute force version -->
    <div v-for="def in userDefs" :key="def.id">
      <dt>{{ def.term }}</dt>
      <dd>{{ def.definition }}</dd>
    </div>
  </dl>
</section>
</template>
<script>
  import definitions from '~/static/data/definitions.json'

export default {
  data() {
   return {
     definitions
   }
  },
  props: {
   defReq: {
     type: Array
     // set required true when ready
   },
   userDefs: {
     type: Array
   }
  },
  computed: {
    defSearch() {
    }
  }
};

</script>