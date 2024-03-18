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

### Default

The following `default` example, illustrates using the `image`, `description` and `cta` content slots. the `default` card has no restrictions or definition of containing layout, all widths are 100% to allow for flexibility of presentation. Width of the image and/or width of the `description` content will determine the overall width of the element in its parental container.

Notice in the second example, there is a CSS constraint of `max-width: 300px` to allow the text in the `description` to wrap at the desired width.

As illustrated there is a lot of layout flexibility afforded to users.

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

The `auro-card` custom element, with its `href` attribute, creates a `auro-hyperlink` element to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The second example illustrates the accessible icon when using the `target` attribute.

Additionally notice the navigation card with the QR code icon. See in this example how the CSS part of `imageWrapper` was used to add additional margin spacing to the top of the icon placement.

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

Text can be centered by assigning the `text-align: center` attribute to the `auro-card` element. Similarly, elements within `auro-card` can be centered with the `justify-content:center` and/or `align-items:center` attributes to use flexbox to vertically and horizontally center the content within the `auro-card` container.

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

These cards are loosely based on the "Typography" example images from [alaskaair.com](https://alaskaair.com) and serve as a way to show that complex card-like layouts are possible with `auro-card` beyond what we show here.

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
