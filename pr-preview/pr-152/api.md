<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-card

The `<auro-card>` element provides users a flexible way to convey a summary of information.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                    | Default | Description                                                                                                                                                                         |
| ---------- | ---------- | --------- | ------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| border     | border     |           | boolean                                                 |         | Adds desired UI border to the `auro-card` element.                                                                                                                                  |
| center     | center     |           | boolean                                                 |         | Centers content within the scope of the `auro-card`.                                                                                                                                |
| href       | href       |           | string                                                  |         | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.                                                                                |
| rel        | rel        |           | string                                                  |         | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).                                                                           |
| relative   | relative   |           | boolean                                                 |         | If true, the auto URL re-write feature will be disabled. [See here for info about hyperlink relative attribute](https://auro.alaskaair.com/components/auro/hyperlink/api#relative). |
| role       | role       |           | string                                                  |         | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).                                                                         |
| target     | target     |           | string                                                  |         | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).                                                                     |
| variant    | variant    |           | `inset-content` \| `inset-container` \| `inset-stretch` |         | Sets the variant of the card.                                                                                                                                                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| cta         | Content slot for call-to-action content.          |
| description | Content slot for string text description content. |
| header      | Content slot for string text header content.      |
| image       | Content slot for image content.                   |

### CSS Shadow Parts

| Name         | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| content      | Apply styles to the outer string text container.                                                             |
| cta          | Apply styles to the named cta slot container.                                                                |
| description  | Apply styles to the named description slot container.                                                        |
| header       | Apply styles to the named header slot container.                                                             |
| image        | Apply styles to the named image slot container.                                                              |
| imageWrapper | Apply styles to the outer image slot container.                                                              |
| link         | Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
        <auro-hyperlink href="/" type="nav" target="_blank">
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
        <auro-hyperlink href="/" type="nav" target="_blank">
          More info
        </auro-hyperlink>
      </div>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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
      <auro-hyperlink href="/" type="nav" target="_blank">
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
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Bordered

Illustrated below is the `border` attribute. This feature defines a single border around the whole `<auro-card>` element with a pre-defined rounded corner.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/bordered.html) -->
<!-- The below content is automatically added from ../apiExamples/bordered.html -->
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
      <auro-hyperlink href="/" type="nav" target="_blank">
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
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/bordered.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/bordered.html -->

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
      <auro-hyperlink href="/" type="nav" target="_blank">
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
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Centered Content

Text can be centered by assigning the `text-align: center` attribute to the `<auro-card>` element. Similarly, elements within `<auro-card>` can be centered with the `justify-content:center` and/or `align-items:center` attributes to use flexbox to vertically and horizontally center the content within the `<auro-card>` container.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/center.html) -->
  <!-- The below content is automatically added from ../apiExamples/center.html -->
  <div>
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
      <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
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
      <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
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
        style="color: var(--ds-color-brand-breeze-400, #00cff0);">
      </auro-icon>
      <auro-header slot="header" level="2" display="500">
        Card Title
      </auro-header>
      <p slot="description">
        Context goes here. Describe the page this card represents.
      </p>
      <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
        More info
      </auro-hyperlink>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/center.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/center.html -->

```html
<div>
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
    <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
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
    <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
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
      style="color: var(--ds-color-brand-breeze-400, #00cff0);">
    </auro-icon>
    <auro-header slot="header" level="2" display="500">
      Card Title
    </auro-header>
    <p slot="description">
      Context goes here. Describe the page this card represents.
    </p>
    <auro-hyperlink href="/" type="nav" target="_blank" slot="cta">
      More info
    </auro-hyperlink>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation

The `<auro-card>` custom element, with its `href` attribute, creates a `<auro-hyperlink>` element to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The second example illustrates the accessible icon when using the `target` attribute.

Additionally notice the navigation card with the QR code icon. See in this example how the `variant="inset-stretch"` was used to add additional margin spacing to the top and bottom of the content placement in the card.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/navigation.html) -->
<!-- The below content is automatically added from ../apiExamples/navigation.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/navigation.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/navigation.html -->

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

### Variants

The following examples make use of the `inset-container` or `inset-content` variants. As the name implies, the inset variants will add inner padding either on the whole card or only in the `description` and `cta` content slots.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inset.html) -->
<!-- The below content is automatically added from ../apiExamples/inset.html -->
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
      <auro-hyperlink href="/" type="nav" target="_blank">
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
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inset.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inset.html -->

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
      <auro-hyperlink href="/" type="nav" target="_blank">
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
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Complex cards

These cards are loosely based on the "Typography" example images from [alaskaair.com](https://alaskaair.com) and serve as a way to show that complex card-like layouts are possible with `<auro-card>` beyond what we show here.

Note that this example also uses a `style` tag to set most of the styles - this is to show that you don't have to use inline styles and can generally use whatever styling solution you prefer.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/typography-cards.html) -->
  <!-- The below content is automatically added from ../apiExamples/typography-cards.html -->
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
        the nation's film and television industry.
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
        the nation's film and television industry.
      </p>
      <div slot="cta">
        <auro-hyperlink type="cta" href="/" ondark>
          Book a Flight
        </auro-hyperlink>
      </div>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/typography-cards.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/typography-cards.html -->

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
      the nation's film and television industry.
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
      the nation's film and television industry.
    </p>
    <div slot="cta">
      <auro-hyperlink type="cta" href="/" ondark>
        Book a Flight
      </auro-hyperlink>
    </div>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
:host {
  --ds-auro-card-border-color: transparent;
  --ds-auro-card-background-color: transparent;
  --ds-auro-card-texticon-color: inherit;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
