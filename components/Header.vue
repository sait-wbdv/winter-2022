<template>
  <header class="page-header">
    <!-- Wrap this in a link and add image -->
    <div>
    <nuxt-link to="/" class="flex items-center px-4 py-2 no-underline text-black">
    <img class="sait-logo" src="~/assets/images/sait-logo.png" alt="SAIT Logo">
    <div>
      <p class="site-name">Web Developer Fast Track</p>
      <p class="tagline">Winter 2022</p>
    </div>
    </nuxt-link>
    </div>
    <nav class="primary" arial-label="Primary Navigation">
      <ul class="flex justify-end">
        <li><nuxt-link to="/courses">Courses</nuxt-link></li>
        <li><nuxt-link to="/assignments">Assignments</nuxt-link></li>
        <li><nuxt-link to="/library">Library</nuxt-link></li>
        <li><nuxt-link to="/house-rules" class="whitespace-nowrap">House Rules</nuxt-link></li>
      </ul>
    </nav>
    <nav class="utility xs:hidden sm:block" arial-label="Utility Navigation">
      <ul class="flex justify-center items-end flex-wrap gap-2 whitespace-nowrap">
        <li><nuxt-link to="/help" class="block">Help Desk</nuxt-link></li>
        <li><a href="
https://sait-ca.zoom.us/j/85143721031" target="_blank" class="block">Live Stream</a></li>
      </ul>
    </nav>
  </header>
</template>