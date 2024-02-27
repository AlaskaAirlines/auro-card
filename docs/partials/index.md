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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
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

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navigation.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navigation.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>




















<!-- this content should be repurposed as alternatives to explore the various types of content supported. -->

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
