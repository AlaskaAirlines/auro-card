<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
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

- Navigation: Cards can be used for navigation purposes.
- Featured information: Cards can be used to display featured information or related content.
- Content containers: Cards can be used to organize information consistently within a page.
- Grouping information: Cards can be used to group information.
- Providing a visual hierarchy: Cards can provide a clear visual hierarchy, organizing information into brief, self-contained units.
- Providing an overview: Cards can serve as an overview and an entry point for more detailed information.
- Providing a summary: Cards can present a summary and link to additional details.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

The following `default` example, illustrates using the `image`, `description` and `cta` content slots. The `default` card has no restrictions or definition of containing layout, all widths are 100% to allow for flexibility of presentation. Width of the image and/or width of the `description` content will determine the overall width of the element in its parental container.

For `<auro-card>` content, while there is flexibility with use, the default preference illustrated uses the `<auro-header>` element using the `display="500"` attribute and value. A basic `<p>` element can be used for the body copy. For the `cta` slot, use either the default `<auro-hyperlink>` or `<auro-hyperlink>` with the `type="cta"` type attribute and value as illustrated in the second example.

Notice in the second example, there is a CSS constraint of `max-width: 300px` to allow the text in the `description` to wrap at the desired width. Similarly the third example has a constraint of `max-width: 150px`. As illustrated there is a lot of layout flexibility afforded to users.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/default.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/default.html -->
  <div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
    <auro-card>
      <img
        slot="image"
        src="https://picsum.photos/300/300?random=0"
        alt="Random insert"/>
      <auro-header slot="header" level="2" display="500">Display card title here</auro-header>
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
      <auro-header slot="header" level="2" display="500">Display card title here</auro-header>
      <p slot="description">
        Context goes here. Use this area to communicate more information to your users.
      </p>
      <div slot="cta">
        <auro-hyperlink href="/" nav target="_blank" type="cta">
          More info
        </auro-hyperlink>
      </div>
    </auro-card>
    <auro-card style="max-width: 150px">
      <img
        slot="image"
        src="https://picsum.photos/150/250?random=1"
        alt="Random insert"/>
      <auro-header slot="header" level="2" display="500">Display title</auro-header>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/default.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/default.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
  <auro-card>
    <img
      slot="image"
      src="https://picsum.photos/300/300?random=0"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Display card title here</auro-header>
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
    <auro-header slot="header" level="2" display="500">Display card title here</auro-header>
    <p slot="description">
      Context goes here. Use this area to communicate more information to your users.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" nav target="_blank" type="cta">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
  <auro-card style="max-width: 150px">
    <img
      slot="image"
      src="https://picsum.photos/150/250?random=1"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Display title</auro-header>
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
      src="https://picsum.photos/200/200?random=0"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Inset 'Container'</auro-header>
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
      src="https://picsum.photos/200/200?random=1"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Inset 'Content'</auro-header>
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
      src="https://picsum.photos/200/200?random=0"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Inset 'Container'</auro-header>
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
      src="https://picsum.photos/200/200?random=1"
      alt="Random insert"/>
    <auro-header slot="header" level="2" display="500">Inset 'Content'</auro-header>
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
    <auro-header slot="header" level="2" display="500">Inset Container</auro-header>
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
      <auro-header slot="header" level="2" display="500">Inset Content</auro-header>
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
    <auro-header slot="header" level="2" display="500">Inset Container</auro-header>
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
      <auro-header slot="header" level="2" display="500">Inset Content</auro-header>
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

The `<auro-card>` custom element, with its `href` attribute, creates a `<auro-hyperlink>` element to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The second example illustrates the accessible icon when using the `target` attribute.

Additionally notice the navigation card with the QR code icon. See in this example how the `variant="inset-stretch"` was used to add additional margin spacing to the top and bottom of the content placement in the card.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/navigation.html) -->
<!-- The below content is automatically added from ./../../apiExamples/navigation.html -->
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 1.8rem;">
  <!-- -->
  <!-- baseline navigation style auro-card -->
  <!-- -->
  <auro-card href="/" style="max-width: 300px" center>
    <img
      slot="image"
      src="https://picsum.photos/300/100?random=1"
      alt="Random insert 0"/>
    <auro-header slot="header" level="2" display="500">
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
  <!-- -->
  <!-- baseline navigation style auro-card with external link icon -->
  <!-- -->
  <auro-card href="/" target="_blank" style="max-width: 300px" center>
    <img
      slot="image"
      src="https://picsum.photos/300/100?random=2"
      alt="Random insert 0"/>
    <auro-header slot="header" level="2" display="500">
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
  <!-- -->
  <!-- navigation card centered style with auro-icon -->
  <!-- -->
  <auro-card
    center
    class="icon-card"
    href="/"
    style="max-width: 300px;"
    variant="inset-stretch">
  <auro-icon
    slot="image"
    category="interface"
    name="qr-code-stroke"
    customColor
    customSize
    style="color: var(--ds-color-brand-breeze-400, #00cff0); width: 60px;">
  </auro-icon>
  <auro-header slot="header" level="2" display="500">
    Card Title
  </auro-header>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
</auro-card>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/navigation.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/navigation.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 1.8rem;">
  <!-- -->
  <!-- baseline navigation style auro-card -->
  <!-- -->
  <auro-card href="/" style="max-width: 300px" center>
    <img
      slot="image"
      src="https://picsum.photos/300/100?random=1"
      alt="Random insert 0"/>
    <auro-header slot="header" level="2" display="500">
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
  <!-- -->
  <!-- baseline navigation style auro-card with external link icon -->
  <!-- -->
  <auro-card href="/" target="_blank" style="max-width: 300px" center>
    <img
      slot="image"
      src="https://picsum.photos/300/100?random=2"
      alt="Random insert 0"/>
    <auro-header slot="header" level="2" display="500">
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
  <!-- -->
  <!-- navigation card centered style with auro-icon -->
  <!-- -->
  <auro-card
    center
    class="icon-card"
    href="/"
    style="max-width: 300px;"
    variant="inset-stretch">
  <auro-icon
    slot="image"
    category="interface"
    name="qr-code-stroke"
    customColor
    customSize
    style="color: var(--ds-color-brand-breeze-400, #00cff0); width: 60px;">
  </auro-icon>
  <auro-header slot="header" level="2" display="500">
    Card Title
  </auro-header>
  <p slot="description">
    Context goes here. Describe the page this card represents.
  </p>
</auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Centered Content

Text can be centered by assigning the `text-align: center` attribute to the `<auro-card>` element. Similarly, elements within `<auro-card>` can be centered with the `justify-content:center` and/or `align-items:center` attributes to use flexbox to vertically and horizontally center the content within the `<auro-card>` container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/center.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/center.html -->
  <div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 2rem;">
    <!--
      Small image option
    -->
    <auro-card
      center
      style="
        justify-content:center;
        align-items:center;
        width: 350px;
      ">
      <img
        slot="image"
        src="https://picsum.photos/300/100?random=1"
        alt="Random insert 0"
        style="max-width: 200px; overflow: hidden; width: unset; margin: 0 auto;"
      />
      <auro-header slot="header" level="2" display="500" style="max-width: 250px;">Centered Content</auro-header>
      <p slot="description" style="max-width: 250px;">
        This is centered description content. Also, notice the CTA and image are
        centered.
      </p>
      <auro-hyperlink href="/" nav target="_blank" slot="cta">
        More info
      </auro-hyperlink>
    </auro-card>
    <!--
      Avatar image option
    -->
    <auro-card style="max-width: 250px;" center>
      <auro-avatar slot="image" code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
      <auro-header slot="header" level="2" display="500">
        Header
      </auro-header>
      <p slot="description">
        Context goes here. Describe the page this card represents.
      </p>
      <auro-hyperlink href="/" nav target="_blank" slot="cta">
        More info
      </auro-hyperlink>
    </auro-card>
    <!--
      Icon size image option using variant="inset-container"
    -->
    <auro-card
      center
      style="max-width: 280px;"
      variant="inset-container">
      <auro-icon
        slot="image"
        category="interface"
        name="qr-code-stroke"
        customColor
        customSize
        style="color: var(--ds-color-brand-breeze-400, #00cff0); width: 60px;">
      </auro-icon>
      <auro-header slot="header" level="2" display="500">
        Card Title
      </auro-header>
      <p slot="description">
        Context goes here. Describe the page this card represents.
      </p>
      <auro-hyperlink href="/" nav target="_blank" slot="cta">
        More info
      </auro-hyperlink>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/center.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/center.html -->

```html
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 2rem;">
  <!--
    Small image option
  -->
  <auro-card
    center
    style="
      justify-content:center;
      align-items:center;
      width: 350px;
    ">
    <img
      slot="image"
      src="https://picsum.photos/300/100?random=1"
      alt="Random insert 0"
      style="max-width: 200px; overflow: hidden; width: unset; margin: 0 auto;"
    />
    <auro-header slot="header" level="2" display="500" style="max-width: 250px;">Centered Content</auro-header>
    <p slot="description" style="max-width: 250px;">
      This is centered description content. Also, notice the CTA and image are
      centered.
    </p>
    <auro-hyperlink href="/" nav target="_blank" slot="cta">
      More info
    </auro-hyperlink>
  </auro-card>
  <!--
    Avatar image option
  -->
  <auro-card style="max-width: 250px;" center>
    <auro-avatar slot="image" code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
    <auro-header slot="header" level="2" display="500">
      Header
    </auro-header>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <auro-hyperlink href="/" nav target="_blank" slot="cta">
      More info
    </auro-hyperlink>
  </auro-card>
  <!--
    Icon size image option using variant="inset-container"
  -->
  <auro-card
    center
    style="max-width: 280px;"
    variant="inset-container">
    <auro-icon
      slot="image"
      category="interface"
      name="qr-code-stroke"
      customColor
      customSize
      style="color: var(--ds-color-brand-breeze-400, #00cff0); width: 60px;">
    </auro-icon>
    <auro-header slot="header" level="2" display="500">
      Card Title
    </auro-header>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <auro-hyperlink href="/" nav target="_blank" slot="cta">
      More info
    </auro-hyperlink>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Complex cards

These cards are loosely based on the "Typography" example images from [alaskaair.com](https://alaskaair.com) and serve as a way to show that complex card-like layouts are possible with `<auro-card>` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles - this is to show that you don't have to use inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/typography-cards.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/typography-cards.html -->
  <style>
    .complex-card-wrapper {
      display: flex;
      padding: var(--ds-size-400, 2rem);
    }
    .white-card-example {
      background: var(--ds-color-background-lightest, #ffffff);
    }
    .blue-card-example {
      background: var(--ds-color-background-darker, #01426a);
      color: var(--ds-color-text-primary-inverse, #ffffff);
    }
    .white-card-example,
    .blue-card-example {
      flex: 1;
      padding: var(--ds-size-400, 2rem) var(--ds-size-300, 1.5rem);
    }
    .white-card-example::part(content),
    .blue-card-example::part(content) {
      padding: var(--ds-size-400, 2rem) var(--ds-size-600, 3rem) 0;
    }
    .white-card-example::part(cta),
    .blue-card-example::part(cta) {
      display: flex;
      justify-content: center;
    }
    .white-card-example::part(header),
    .blue-card-example::part(header) {
      font-size: var(--ds-size-300, 1.5rem);
    }
  </style>
  <div
    class="complex-card-wrapper"
  >
    <auro-card
      class="white-card-example"
    >
      <auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block">
        Seattle, WA (SEA) to<br>
        Los Angeles (LAX)
      </auro-header>
      <p slot="description">
        Los Angeles is a sprawling Southern California city and the center of
        the nation’s film and television industry.
      </p>
      <div slot="cta">
        <auro-hyperlink type="cta" href="/">
          Book a Flight
        </auro-hyperlink>
      </div>
    </auro-card>
    <auro-card
      class="blue-card-example"
    >
      <auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block">
        Seattle, WA (SEA) to<br>
        Los Angeles (LAX)
      </auro-header>
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
    padding: var(--ds-size-400, 2rem);
  }
  .white-card-example {
    background: var(--ds-color-background-lightest, #ffffff);
  }
  .blue-card-example {
    background: var(--ds-color-background-darker, #01426a);
    color: var(--ds-color-text-primary-inverse, #ffffff);
  }
  .white-card-example,
  .blue-card-example {
    flex: 1;
    padding: var(--ds-size-400, 2rem) var(--ds-size-300, 1.5rem);
  }
  .white-card-example::part(content),
  .blue-card-example::part(content) {
    padding: var(--ds-size-400, 2rem) var(--ds-size-600, 3rem) 0;
  }
  .white-card-example::part(cta),
  .blue-card-example::part(cta) {
    display: flex;
    justify-content: center;
  }
  .white-card-example::part(header),
  .blue-card-example::part(header) {
    font-size: var(--ds-size-300, 1.5rem);
  }
</style>
<div
  class="complex-card-wrapper"
>
  <auro-card
    class="white-card-example"
  >
    <auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block">
      Seattle, WA (SEA) to<br>
      Los Angeles (LAX)
    </auro-header>
    <p slot="description">
      Los Angeles is a sprawling Southern California city and the center of
      the nation’s film and television industry.
    </p>
    <div slot="cta">
      <auro-hyperlink type="cta" href="/">
        Book a Flight
      </auro-hyperlink>
    </div>
  </auro-card>
  <auro-card
    class="blue-card-example"
  >
    <auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block">
      Seattle, WA (SEA) to<br>
      Los Angeles (LAX)
    </auro-header>
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
