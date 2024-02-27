<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-card use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Inset *Container*

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset-container.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset-container.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Inset *Content*

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset-content.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset-content.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Bordered

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/bordered.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Icon

- **Note**: The width set on container to enable centering of image.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/icon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/icon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Rounded

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/round-image.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/round-image.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Navigation

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navigation.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navigation.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Centered Content

Text can be centered by assigning the `text-align: center` attribute to the `auro-card` element.
Similarly, elements within `auro-card` can be centered with the `justify-content:center` and/or `align-items:center`
attributes to use flexbox to vertically and horizontally center the content within the `auro-card` container. That said, the centering options are not limited to these
examples and can be achieved by a number of means.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/center.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/center.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Complex cards

These cards are loosely based on the "Typography" example images [here](https://alaskaair.com) and serve as a way to
show
that complex card-like layouts are possible with `auro-card` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles - this is to show that you don't have to use
inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/typography-cards.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/typography-cards.html) -->
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
