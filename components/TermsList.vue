<template>
<section>
  <h3>{{ definitions.title }}</h3>
  <dl>
    <div v-for="def in sortedDefinitions" :key="def.id">
      <dt>{{ def.term }}</dt>
      <dd>{{ def.definition }}</dd>
    </div>
  </dl>
</section>
</template>
<script>

  props: {
    defRequested: {
      type: {
        type: Array
      }
    },
    computed: {
      sortedDefinitions() {
        let output = [];
        this.defRequested.forEach(term => {
         this.globalDefinitions.forEach(def => {
          if (term.term === def.term) {
            output.push(def)
          }
         }) 
        })
        return output;
      }
    }
  }
}
</script>