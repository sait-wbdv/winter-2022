<template>
  <section class="border-solid border-2 border-black rounded-2xl p-4 m-6 flex flex-col mx-auto">
    <article v-for="topic in homeWork" :key="topic.id" class="my-1">
      <h3>{{ topic.title }}</h3>
      <ul>
        <li v-for="task in topic.tasks" :key="task.id">
          <a :href="task.link">{{ task.title }}</a>
          <p>{{ task.description }}</p>
        </li>
      </ul>
    </article>
    <article>
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
