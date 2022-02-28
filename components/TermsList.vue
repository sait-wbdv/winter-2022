<template>
  <section>
    <h3>Terminology</h3>
    <dl class="mx-2">
      <div v-for="def in defSearch" :key="def.id">
        <dt>{{ def.term }}</dt>
        <dd>{{ def.definition }}</dd>
      </div>
    </dl>
  </section>
</template>
<script>
export default {
  data() {
    return {
      definitions: definitions,
    };
  },
  props: {
    searchTerms: {
      type: Array,
    },
  },
  computed: {
    defSearch() {
      return this.definitions.definitions.filter((word) => {
        return this.searchTerms.includes(word.term);
      });
    },
  },
};
</script>
