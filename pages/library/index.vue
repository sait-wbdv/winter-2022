<template>
  <div>
    <aside>
      <nav aria-label="Local Navigation">
        <h3>Core Topics</h3>
        <ul>
          <li><nuxt-link to="/library/open-content">HTML</nuxt-link></li>
          <li><nuxt-link to="/library/open-content">CSS</nuxt-link></li>
          <li><nuxt-link to="/library/open-content">Javascript</nuxt-link></li>
        </ul>
        <h3>Extras</h3>
        <ul>
          <li><nuxt-link to="/library/open-content">Open Content</nuxt-link></li>
          <li><nuxt-link to="/library/courses">Popular Courses</nuxt-link></li>
        </ul>
      </nav>
    </aside>
    <main>
      <h1>WBDV Library</h1>
      <p>A collection of links, resources and documentation that serve as this program's textbook.</p>

      <h2>Core Topics</h2>
      <section class="gallery">
        <nuxt-link to="/library/html" class="html">
          <article>
            <h3>HTML</h3>
            <img src="~/assets/images/html5.svg" alt="HTML logo">
          </article>
        </nuxt-link>
        <nuxt-link to="/library/css" class="css">
          <article>
            <h3>CSS</h3>
            <img src="~/assets/images/css3-alt.svg" alt="CSS logo">
          </article>
        </nuxt-link>

        <nuxt-link to="/library/js" class="js">
          <article>
            <h3>Javascript</h3>
            <img src="~/assets/images/js.svg" alt="Javascript logo">
          </article>
        </nuxt-link>

      </section>

    </main>
  </div>
</template>