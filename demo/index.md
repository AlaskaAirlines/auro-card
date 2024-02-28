<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-card>` is highly customizable [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) is a type of UI design component that display content and actions about a single topic.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-card use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-card>` element can be use in a variety of ways, including:

- **Navigation**: Cards can be used for navigation purposes.
- **Featured information**: Cards can be used to display featured information or related content.
- **Content containers**: Cards can be used to organize information consistently within a page.
- **Grouping information**: Cards can be used to group information.
- **Providing a visual hierarchy**: Cards can provide a clear visual hierarchy, organizing information into brief, self-contained units.
- **Providing an overview**: Cards can serve as an overview and an entry point for more detailed information.
- **Providing a summary:** Cards can present a summary and link to additional details.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

The following `default` example, illustrates using the `image`, `description` and `cta` content slots. the `default` card has no restrictions or definition of containing layout, all widths are 100% to allow for flexibility of presentation. Width of the image and/or width of the `description` content will determine the overall width of the element in its parental container.

Notice in the second example, there is a CSS constraint of `max-width: 300px` to allow the text in the `description` to wrap at the desired width.

As illustrated there is a lot of layout flexibility afforded to users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
    <auro-card>
      <img
        slot="image"
        src="https://picsum.photos/300/300?random=0"
        alt="Random insert"/>
      <h3 slot="header">Card Title</h3>
      <p slot="description">
        Context goes here.
      </p>
      <div slot="cta">
        <auro-hyperlink href="/" nav target="_blank">
          More info
        </auro-hyperlink>
      </div>
    </auro-card>
    <auro-card style="max-width: 300px">
      <img
        slot="image"
        src="https://picsum.photos/300/200?random=1"
        alt="Random insert"/>
      <h3 slot="header">Card Title</h3>
      <p slot="description">
        Context goes here. Use this area to communicate more information to your users.
      </p>
      <div slot="cta">
        <auro-hyperlink href="/" nav target="_blank">
          More info
        </auro-hyperlink>
      </div>
    </auro-card>
    <auro-card style="max-width: 100px">
      <img
        slot="image"
        src="https://picsum.photos/100/300?random=1"
        alt="Random insert"/>
      <h3 slot="header">Title</h3>
      <p slot="description">
        Context goes here.
      </p>
      <div slot="cta">
        <auro-hyperlink href="/" nav target="_blank">
          More info
        </auro-hyperlink>
      </div>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card>
    <img
      slot="image"
      src="https://picsum.photos/300/300?random=0"
      alt="Random insert"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <auro-card style="max-width: 300px">
    <img
      slot="image"
      src="https://picsum.photos/300/200?random=1"
      alt="Random insert"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Use this area to communicate more information to your users.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <auro-card style="max-width: 100px">
    <img
      slot="image"
      src="https://picsum.photos/100/300?random=1"
      alt="Random insert"/>
    <h3 slot="header">Title</h3>
    <p slot="description">
      Context goes here.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Inset *Container* or *Content*

The following examples make use of the `inset-container` or `inset-content` variants. As the name implies, the inset variants will add inner padding either on the whole card or only in the `description` and `cta` content slots.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/inset.html) -->
<!-- The below content is automatically added from ./../../apiExamples/inset.html -->
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card variant="inset-container" style="max-width: 300px">
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=0"
      alt="Random insert"/>
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
  <auro-card variant="inset-content" style="max-width: 300px">
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=1"
      alt="Random insert"/>
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
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/inset.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/inset.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card variant="inset-container" style="max-width: 300px">
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=0"
      alt="Random insert"/>
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
  <auro-card variant="inset-content" style="max-width: 300px">
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=1"
      alt="Random insert"/>
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
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Bordered

Illustrated below is the `border` attribute. This feature defines a single boarder around the whole `<auro-card>` element with a pre-defined rounded corner.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/bordered.html) -->
<!-- The below content is automatically added from ./../../apiExamples/bordered.html -->
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card variant="inset-container" style="max-width: 300px" border>
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=3"
      alt="Random insert"/>
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
  <auro-card variant="inset-content" style="max-width: 300px" border>
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=4"
      alt="Random insert"/>
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
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/bordered.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/bordered.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card variant="inset-container" style="max-width: 300px" border>
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=3"
      alt="Random insert"/>
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
  <auro-card variant="inset-content" style="max-width: 300px" border>
    <img
      slot="image"
      src="https://picsum.photos/200/300?random=4"
      alt="Random insert"/>
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
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navigation.html) -->
<!-- The below content is automatically added from ./../../apiExamples/navigation.html -->
<auro-card href="/" style="max-width: 300px">
  <img
    slot="image"
    src="https://picsum.photos/300/100"
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
<auro-card href="/" style="max-width: 300px">
  <img
    slot="image"
    src="https://picsum.photos/300/100"
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

### Centered Content

Text can be centered by assigning the `text-align: center` attribute to the `auro-card` element.
Similarly, elements within `auro-card` can be centered with the `justify-content:center` and/or `align-items:center`
attributes to use flexbox to vertically and horizontally center the content within the `auro-card` container. That said, the centering options are not limited to these
examples and can be achieved by a number of means.

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

### Complex cards

These cards are loosely based on the "Typography" example images [here](https://alaskaair.com) and serve as a way to
show
that complex card-like layouts are possible with `auro-card` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles - this is to show that you don't have to use
inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/typography-cards.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/typography-cards.html -->
  <style>
    .complex-card-wrapper {
      display: flex;
      padding: 2rem;
    }
    .white-card-example {
      background: var(--ds-color-background-lightest, #ffffff);
    }
    .blue-card-example {
      background: var(--ds-color-background-darker, #01426a);
      color: #fff;
    }
    .white-card-example, .blue-card-example {
      flex: 1;
      padding: 2rem 1.5rem;
    }
    .white-card-example::part(content), .blue-card-example::part(content) {
      padding: 2rem 3rem 0;
    }
    .white-card-example::part(cta), .blue-card-example::part(cta) {
      display: flex;
      justify-content: center;
    }
    .white-card-example::part(header), .blue-card-example::part(header) {
      font-size: 1.5rem;
    }
  </style>
  <div
    class="complex-card-wrapper"
  >
    <auro-card
      class="white-card-example"
    >
      <div slot="header" style="margin-bottom: 1.5rem;">
        <span>Seattle, WA (SEA) to</span>
        <p>Los Angeles (LAX)</p>
      </div>
      <p slot="description">
        Los Angeles is a sprawling Southern California city and the center of
        the nation’s film and television industry.
      </p>
      <div slot="cta">
        <auro-hyperlink type="cta" href="/" nav>
          Book a Flight
        </auro-hyperlink>
      </div>
    </auro-card>
    <auro-card
      class="blue-card-example"
    >
      <div slot="header" style="margin-bottom: 1.5rem;">
        <span>Seattle, WA (SEA) to</span>
        <p>Los Angeles (LAX)</p>
      </div>
      <p slot="description">
        Los Angeles is a sprawling Southern California city and the center of
        the nation’s film and television industry.
      </p>
      <div slot="cta">
        <auro-hyperlink type="cta" href="/" nav>
          Book a Flight
        </auro-hyperlink>
      </div>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/typography-cards.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/typography-cards.html -->

```html
<style>
  .complex-card-wrapper {
    display: flex;
    padding: 2rem;
  }
  .white-card-example {
    background: var(--ds-color-background-lightest, #ffffff);
  }
  .blue-card-example {
    background: var(--ds-color-background-darker, #01426a);
    color: #fff;
  }
  .white-card-example, .blue-card-example {
    flex: 1;
    padding: 2rem 1.5rem;
  }
  .white-card-example::part(content), .blue-card-example::part(content) {
    padding: 2rem 3rem 0;
  }
  .white-card-example::part(cta), .blue-card-example::part(cta) {
    display: flex;
    justify-content: center;
  }
  .white-card-example::part(header), .blue-card-example::part(header) {
    font-size: 1.5rem;
  }
</style>
<div
  class="complex-card-wrapper"
>
  <auro-card
    class="white-card-example"
  >
    <div slot="header" style="margin-bottom: 1.5rem;">
      <span>Seattle, WA (SEA) to</span>
      <p>Los Angeles (LAX)</p>
    </div>
    <p slot="description">
      Los Angeles is a sprawling Southern California city and the center of
      the nation’s film and television industry.
    </p>
    <div slot="cta">
      <auro-hyperlink type="cta" href="/" nav>
        Book a Flight
      </auro-hyperlink>
    </div>
  </auro-card>
  <auro-card
    class="blue-card-example"
  >
    <div slot="header" style="margin-bottom: 1.5rem;">
      <span>Seattle, WA (SEA) to</span>
      <p>Los Angeles (LAX)</p>
    </div>
    <p slot="description">
      Los Angeles is a sprawling Southern California city and the center of
      the nation’s film and television industry.
    </p>
    <div slot="cta">
      <auro-hyperlink type="cta" href="/" nav>
        Book a Flight
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
