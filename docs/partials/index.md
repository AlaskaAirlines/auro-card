<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-card use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

The following `default` example, illustrates using the `image`, `description` and `cta` content slots. The `default` card has no restrictions or definition of containing layout, all widths are 100% to allow for flexibility of presentation. Width of the image and/or width of the `description` content will determine the overall width of the element in its parental container.

For `<auro-card>` content, while there is flexibility with use, the default preference illustrated uses the `<auro-header>` element using the `display="500"` attribute and value. A basic `<p>` element can be used for the body copy. For the `cta` slot, use either the default `<auro-hyperlink>` or `<auro-hyperlink>` with the `type="cta"` type attribute and value as illustrated in the second example.

Notice in the second example, there is a CSS constraint of `max-width: 300px` to allow the text in the `description` to wrap at the desired width. Similarly the third example has a constraint of `max-width: 150px`. As illustrated there is a lot of layout flexibility afforded to users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/default.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/default.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Inset *Container* or *Content*

The following examples make use of the `inset-container` or `inset-content` variants. As the name implies, the inset variants will add inner padding either on the whole card or only in the `description` and `cta` content slots.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Bordered

Illustrated below is the `border` attribute. This feature defines a single boarder around the whole `<auro-card>` element with a pre-defined rounded corner.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Navigation

The `<auro-card>` custom element, with its `href` attribute, creates a `<auro-hyperlink>` element to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The second example illustrates the accessible icon when using the `target` attribute.

Additionally notice the navigation card with the QR code icon. See in this example how the `variant="inset-stretch"` was used to add additional margin spacing to the top and bottom of the content placement in the card.

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

Text can be centered by assigning the `text-align: center` attribute to the `<auro-card>` element. Similarly, elements within `<auro-card>` can be centered with the `justify-content:center` and/or `align-items:center` attributes to use flexbox to vertically and horizontally center the content within the `<auro-card>` container.

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

These cards are loosely based on the "Typography" example images from [alaskaair.com](https://alaskaair.com) and serve as a way to show that complex card-like layouts are possible with `<auro-card>` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles - this is to show that you don't have to use inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/typography-cards.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/typography-cards.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-card` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import { AuroCard } from './src/auro-card.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-card', AuroCard);
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-card` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
