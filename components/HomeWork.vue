<template>
  <section>
    <article v-for="topic in homeWork" :key="topic.id">
      <h3>{{ topic.title }}</h3>
      <ul>
        <li v-for="task in topic.tasks" :key="task.id">
          <a :href="task.link">{{ task.title }}</a>
          <p>{{ task.description }}</p>
        </li>
      </ul>
    </article v-if="$slots">
      <slot></slot>
    </article>
  </section>
  </section>
</template>

<script>
export default {
  props: {
    homeWork: {
      type: Array
    }
  },
}
</script>
