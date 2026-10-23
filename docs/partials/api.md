<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Bordered

Add the `border` attribute to draw a thin border with rounded corners around the whole card.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Centered content

Add the `center` attribute to center the text. To center the image and call to action too, set `align-items: center` on the card, as the first example does.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/center.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/center.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Navigation

Add `href` to make the whole card a link to a web page, file, email address, or location in the same page. URLs that run script, such as `javascript:`, are removed. The card wraps its content in an `<auro-hyperlink>`. When you set `target="_blank"`, as in the second example, the card shows an icon that signals the link opens in a new tab.

The third example places a QR code icon in the `image` slot and uses `variant="inset-stretch"` to add space above the icon and below the text.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/navigation.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/navigation.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Variants

The following examples use the `inset-container` and `inset-content` variants. Use `inset-container` to pad the whole card, image included. Use `inset-content` to pad only the header, description, and call to action, so the image stays edge to edge.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Complex cards

These cards are loosely based on the "Typography" example images from [alaskaair.com](https://alaskaair.com) and serve as a way to show that complex card-like layouts are possible with `<auro-card>` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles. This shows that you don't have to use inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/typography-cards.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/typography-cards.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Grid

When cards are placed together in a row or grid, each card's `cta` slot drops to the bottom of the card so the call-to-action buttons line up across the row regardless of how much content each card holds.

This requires no extra configuration: place the cards in a CSS `grid` or `flex` row, both of which stretch their items to equal height by default, and the alignment happens automatically.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/grid.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/grid.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
