<template>
  <div>
    <main>
      <h1>Vue Tests</h1>
      <section>
        <h2>Core</h2>
        <p>???</p>
      </section>
      <section>
        <h2>Plugins</h2>
        <p>Youtube embed</p>
        <p>Codepen embed</p>
        <p>Whatevers</p>
      </section>
      <section>
        <h2>Code highlighting by line</h2>
        <pre>
          <code>
  const fetchData = async function() {
      try {
          const response = await fetch('not-a-real-url');
          if (!response.ok) { 
              // Throw error to catch()
              throw new Error(response.statusText);
          }
          const data = await response.json();

          console.log(data);
          
      } catch (error) {
          // Handle any rejected Promise in the `try` block
          console.log(error);
      }
  }

  fetchData();
          </code>
        </pre>
      </section>
    </main>
  </div>
</template>