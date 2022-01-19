---
title: Colour, typography and visual hierarchy
description: Description here
date: 2022-01-19T15:00:00.000Z
released: true
homework:
  - title: Colour
    tasks:
      - title: Reading color hex codes
        link: https://www.youtube.com/watch?v=eqZqx6lRPe0
        description: An excellent video where a colour-blind designer explains how digital colour modes work.
      - title: Colour Harmonies using HSL
        link: https://chromatichq.com/insights/understanding-and-using-hsl-your-css
  - title: Typography
    tasks: 
      - title: Typography for Developers
        link: https://css-tricks.com/typography-for-developers/
      - title: Search - "best google font combinations"
        link: https://www.google.com/search?q=best+google+font+combinations
      - title: Google Fonts
        link: https://fonts.google.com/
        description: Find some favourite Google Fonts to style your text for CPNT 260.
---

## Housekeeping
- Tony will be contacting you for one-on-ones during lab time next week.
- [Link example](https://github.com/acidtone/code-journal#jan-1-2022) added to [Journal Submission Instructions](https://sait-wbdv.netlify.app/dsgn-270/assignments/journal/#submission-instructions)
- Request from the Registrar:
    - Check your MySAIT status to make sure you haven't been cancelled recently for non-payment.
- Anyone want SAIT WBDV hoodies?
    - Price: $55
    - Description: [Grey with a red SAIT block lettered logo and the program name embroidered underneath](https://lh5.googleusercontent.com/B9pzhnjJ6lsGIeE-cJAJSpFEfjFqXp1LskRpisuVTueMBEE4s0Wl-S1gDf2K7uFbAWkPsvytbot-3kIwfM6kr7d46RSK-WTVAFryaT4FhMsHnGH4t55Wnw4NUCGtOwNR2A=w1280).
    - 12 hoodie minimum for the program but there's no payment required to fill out the form.
    - [Order form](https://docs.google.com/forms/d/e/1FAIpQLSez_hRXUSxbbDgV3IMXCzhsLHig13KVhAwIg5zwkOOq4dTE5Q/viewform)
        - Note: The Web Developer program is waaaaaay down at the bottom of the list because they don't care about [Cognitive Load](https://www.nngroup.com/articles/scrolling-and-attention/).

---

## 1. Review
1. [Minimizing cognitive load](https://sait-wbdv.netlify.app/library/takeaways/design/minimizing-cognitive-load)
    - Example of high cognitive load: [Tony's `code-journal`](https://github.com/acidtone/code-journal) because of scrolling
2. [User Stories - A summary](https://gist.github.com/acidtone/6f8b416c4c409c60148581f7ec806c46)
3. [User Flows - A summary](https://gist.github.com/acidtone/aa85df7a330fd678d84167f0e59d889d)
4. [How to Draw a Wireframe (Even if You Can’t Draw)](https://www.nngroup.com/articles/draw-wireframe-even-if-you-cant-draw/)
5. [Figma Tutorial Video Playlist](https://www.youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4)
6. [Navigation Conventions](/library/takeaways/design/navigation)

## 2. Visual Hierarchy
### Materials
- Videos:
    - [Visual hierarchy - Part 12 of 43 of The Freelancer's Journey](https://www.youtube.com/watch?v=qZWDJqY27bw)
    - [Repetition - Part 13](https://www.youtube.com/watch?v=8zhhc5pzE9Y)
    - [Grid systems & alignment - Part 14](https://www.youtube.com/watch?v=9QRIjnMEXw8)
    - [Space in design - Part 15](https://www.youtube.com/watch?v=3dESVj7-XzI)
    - [Typography - Part 16](https://www.youtube.com/watch?v=yom0nogFN3k)

### Demo: WBDV website critique
We're hiring our Lab Facilitators soon! Let's add some Issues to the WBDV website repo to keep them busy by:
1. Critiquing the website's visual hierarchy:
    - Size and scale
    - Colour and contrast
    - Spacing
    - Typography
    - Grids and alignment
2. Annotating some screencaps to propose some fixes;
3. Submit the screencaps as GitHub Issues for our Facilitators to fix or for future 260/262 demos.

## 3. Colour
### Materials 
- Video: [Reading color hex codes](https://www.youtube.com/watch?v=eqZqx6lRPe0)
- [Colour Harmonies using HSL](https://chromatichq.com/insights/understanding-and-using-hsl-your-css)
- MDN: [Color contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)

### Demo: WBDV Utility Nav Colour Conversion
The "Help Desk" and "Live Stream" buttons should probably be different colours. 
1. Convert the blue hex code of the "Help Desk" button to HSL using the strategy from [Reading color hex codes](https://www.youtube.com/watch?v=eqZqx6lRPe0):
    1. 3-digit shorthand
    2. Line graph
    3. Hue from shape
    4. Lightness from total
    5. Saturation from range
2. We'll use a colour converter to check our result (no cheating!).
3. Let's pick a new colour for the "Help Desk" button using colour harmonies.
4. Using HSL, let's create some better hover and active colours for the global nav.

## 4. Typography
### Materials
- [Typography for Developers](https://css-tricks.com/typography-for-developers/)
- [Search - "best google font combinations"](https://www.google.com/search?q=best+google+font+combinations)
- [Google Fonts](https://fonts.google.com/)

### Demo: Typography and colour test page
The Visual Hierarchy video on Typography above has a [nice slide](https://youtu.be/yom0nogFN3k?t=209) that would make a good test page for fonts and colour. 

Let's build one in [Codepen](https://codepen.io/)! (If we have time)

---

## Lab Time
- An easy-to-create method for a website colour pallette:
    1. Find an image that that gives you a warm feeling inside, colour-wise.
    2. Upload it to the [Coolers Image Picker](https://coolors.co/image-picker)
    3. Export the pallette or open in their generator tool.
    4. Take each colour and convert them to HSL.
- Improve the visual hierarchy of the WBDV website by submitting an Issue. Include screencaps as needed.
- Select some Display and Text typefaces on [Google Fonts](https://fonts.google.com/) for future projects.
    - [Feel free to cheat](https://www.google.com/search?q=best+google+font+combinations)
- For Tony: reverse order of [`code-journal`](https://github.com/acidtone/code-journal) posts to reduce scrolling.

---

<home-work :home-work="homework">
</home-work>
