<template>
  <header class="page-header">
    <!-- Wrap this in a link and add image -->
    <nuxt-link to="/"><img class="sait-logo" src="~/assets/images/sait-logo.png" alt="SAIT Logo"></nuxt-link>
    <div>
      <p class="site-name">Web Developer Fast Track</p>
      <p class="tagline">Winter 2022</p>
    </div>
    <nav class="primary" arial-label="Primary Navigation">
      <ul>
        <li><nuxt-link to="/courses">Courses</nuxt-link></li>
        <li><nuxt-link to="/assignments">Assignments</nuxt-link></li>
        <li><nuxt-link to="/library">Library</nuxt-link></li>
        <li><nuxt-link to="/house-rules">House Rules</nuxt-link></li>
      </ul>
    </nav>
    <nav class="utility" arial-label="Utility Navigation">
      <ul>
        <li><nuxt-link to="/help">Help Desk</nuxt-link></li>
        <li><a href="
https://sait-ca.zoom.us/j/85143721031" target="_blank">Live Stream</a></li>
      </ul>
    </nav>
  </header>
</template>