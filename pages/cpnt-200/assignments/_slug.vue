<template>
  <div>
    <header>
      <h1>{{ assignment.title }}</h1>
      <div class="info">
        <p v-for="assign in assignment.due" :key="assign.id">
          {{ assign.name }} <span v-if="assign.name">--</span> {{ assign.date }}
        </p>
        <p class="weight" v-if="assignment.weight">
          Weight: {{ assignment.weight }}
        </p>
      </div>
      <hr />
    </header>
    <main>
      <nuxt-content :document="assignment" />
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const assignment = await $content(
        `cpnt-200/assignments/${params.slug}`
      ).fetch();
      return {
        assignment
      };
    } catch (e) {
      error('No lesson found');
    }
  }
};
</script>

<style scoped>
main {
  max-width: 85%;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  text-align: center;
}
header h1 {
  font-weight: bold;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 3rem;
  margin-top: 1rem;
  border-radius: 6px;
  max-width: fit-content;
  background-color: #169bd4;
}
.info p {
  margin: 0.2rem;
}
.weight {
  margin: 0.5rem;
  font-weight: bold;
  align-self: center;
}
</style>
