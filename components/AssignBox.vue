<template>
  <article
    class="flex flex-col align-center max-w-lg py-2 px-4 bg-blue-400 border-2 rounded-lg"
  >
    <h3 class="text-3xl font-bold underline mb-3">
      Assignment: {{ info.title }}
    </h3>
    <ul class="list-none m-0">
      <li class="text-2xl"><strong>Due:</strong> {{ info.due }}</li>
      <li class="text-2xl"><strong>Details</strong>: {{ info.description }}</li>
      <li class="flex justify-end m-2">
        <a
          :href="info.link"
          class="bg-red-500 rounded-md py-2 px-4 w-min block text-right text-white no-underline font-bold"
          >Assignment</a
        >
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  props: {
    info: {
      type: Object
    }
  }
};
</script>
