<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-card>` is
an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).
It is a customizable container that can hold many different forms of text or image content.
Consider it a refined framework for presenting images and accompanying blurbs, ideally suited for (but not limited to)
showcasing a curated collection containing an `image`, `title`, `text`, and a `cta` (call to action).

The card details are broken down into `title`, `description`, `cta`, and `disclaimer`.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-card use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-card>` element can be use in a variety of ways, including:

- Content Preview: Cards can be used to provide a preview of content. For example, on a blog, each card could represent
  a post with a title, an excerpt, and a link to read more.
- Navigation: Cards can also serve as navigation elements. Each card could represent a different page or section of the
  website, and clicking on the card would take the user to that section.
- Interactive Elements: Cards can be interactive, with elements like buttons, links, or forms. For example, a card could
  contain a short survey or a sign-up form.
- Product Display: In e-commerce, cards can be used to display products. Each card could contain an image of the
  product, its name, price, and a button to add it to the cart.
- User Profiles: On social media or team pages, cards can be used to display user or team member profiles. Each card
  could contain a photo, name, role, and a brief bio or description.
- Informational Cards: Cards can be used to display information in a more structured way. For example, on a weather app,
  each card could represent a day of the week with the day's weather conditions and temperature.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Inset *Container*

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset-container.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/inset-container.html -->
  <auro-card variant="inset-container">
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Inset Container</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset-container.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/inset-container.html -->

```html
<auro-card variant="inset-container">
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Inset Container</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Inset *Content*

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset-content.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/inset-content.html -->
  <auro-card variant="inset-content">
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Inset Content</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset-content.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/inset-content.html -->

```html
<auro-card variant="inset-content">
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Inset Content</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Bordered

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/bordered.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/bordered.html -->
  <auro-card variant="inset-content" border>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/bordered.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/bordered.html -->

```html
<auro-card variant="inset-content" border>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Icon

- **Note**: The width set on container to enable centering of image.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/icon.html -->
  <auro-card style="max-width: 375px; text-align: center" variant="inset-container">
    <img
      slot="image"
      alt="Random insert 0"
      class="inset-container-image"
      src="https://picsum.photos/100/50"
      style="
        width: unset;
        flex-grow: 0;
        margin-bottom: var(--ds-size-300);
      "
    />
    <auro-header slot="header" level="3" display="600">
      Card Title
    </auro-header>
    <div slot="description" style="margin-bottom: var(--ds-size-300);">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
    <p slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </p>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/icon.html -->

```html
<auro-card style="max-width: 375px; text-align: center" variant="inset-container">
  <img
    slot="image"
    alt="Random insert 0"
    class="inset-container-image"
    src="https://picsum.photos/100/50"
    style="
      width: unset;
      flex-grow: 0;
      margin-bottom: var(--ds-size-300);
    "
  />
  <auro-header slot="header" level="3" display="600">
    Card Title
  </auro-header>
  <div slot="description" style="margin-bottom: var(--ds-size-300);">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
  <p slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </p>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Rounded

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/round-image.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/round-image.html -->
  <auro-card>
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"
      style="border-radius: 50%; overflow: hidden; width: unset; margin: 0 auto;"
    />
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
    <p slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </p>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/round-image.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/round-image.html -->

```html
<auro-card>
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"
    style="border-radius: 50%; overflow: hidden; width: unset; margin: 0 auto;"
  />
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
  <p slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </p>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navigation.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/navigation.html -->
  <auro-card href="/">
    <img
      slot="image"
      src="https://picsum.photos/400/400"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
    <p slot="cta">
      More info
    </p>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navigation.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/navigation.html -->

```html
<auro-card href="/">
  <img
    slot="image"
    src="https://picsum.photos/400/400"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
  <p slot="cta">
    More info
  </p>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Centered Content

Content can be centered by assigning the `text-align: center` attribute to the `auro-card` element.
Similarly, the `auro-card` element can be assigned a `justify-content:center` and `align-items:center`
attributes to use flexbox to vertically and horizontally center the content within the `auro-card` container. That said, the centering options are not limited to these
examples and can be acheived by a number of means.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/center.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/center.html -->
  <auro-card
    style="
      text-align:center;
      justify-content:center;
      align-items:center;
      width: 400px;
    "
    variant="inset-container"
  >
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/200/200"
      alt="Random insert 0"
      style="max-width: 200px; overflow: hidden; width: unset; margin: 0 auto;"
    />
    <h3 slot="header">Centered Content</h3>
    <p slot="description" style="max-width: 200px;">
      This is centered description content. Also, notice the CTA and image are
      centered.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
  <!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/center.html) -->
  <!-- The below code snippet is automatically added from ./../../apiExamples/center.html -->
  ```html
  <auro-card
    style="
      text-align:center;
      justify-content:center;
      align-items:center;
      width: 400px;
    "
    variant="inset-container"
  >
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/200/200"
      alt="Random insert 0"
      style="max-width: 200px; overflow: hidden; width: unset; margin: 0 auto;"
    />
    <h3 slot="header">Centered Content</h3>
    <p slot="description" style="max-width: 200px;">
      This is centered description content. Also, notice the CTA and image are
      centered.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  ```
  <!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-card` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-card';
registerComponent('custom-card');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-card` element.

<div class="exampleWrapper">
  <auro-card variant="inset-content">
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Inset Container</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
  ```html

<custom-card variant="inset-content">
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Inset Container</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</custom-card>
  ```

</auro-accordion>
