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
<auro-card>
<img
      slot="image"
      src="https://picsum.photos/300/200?random=0"
      alt=""/>
<auro-header slot="header" level="2" display="500">Display card title here</auro-header>
<p slot="description">
      Context goes here. Use this area to communicate more information to your users.
</p>
<div slot="cta">
<auro-hyperlink href="/" type="nav" target="_blank">
        More info
</auro-hyperlink>
</div>
</auro-card>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-card&gt;
  &lt;img
    slot="image"
    src="https://picsum.photos/300/200?random=0"
    alt=""/&gt;
  &lt;auro-header slot="header" level="2" display="500"&gt;Display card title here&lt;/auro-header&gt;
  &lt;p slot="description"&gt;
    Context goes here. Use this area to communicate more information to your users.
  &lt;/p&gt;
  &lt;div slot="cta"&gt;
    &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
      More info
    &lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-card&gt;</code></pre>
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
      alt=""/>
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
      alt=""/>
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

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;"&gt;
  &lt;auro-card variant="inset-container" style="max-width: 300px" border&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/200/300?random=3"
      alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;Inset Container&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
        More info
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card variant="inset-content" style="max-width: 300px" border&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/200/300?random=4"
      alt=""/&gt;
      &lt;auro-header slot="header" level="2" display="500"&gt;Inset Content&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
        More info
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;!--
    Small image option
  --&gt;
  &lt;auro-card
    center
    style="
      justify-content:center;
      align-items:center;
      width: 350px;
    "&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/300/100?random=1"
      alt="Random insert 0"
      style="max-width: 200px; overflow: hidden; width: unset; margin: 0 auto;"
    /&gt;
    &lt;auro-header slot="header" level="2" display="500" style="max-width: 250px;"&gt;Centered Content&lt;/auro-header&gt;
    &lt;p slot="description" style="max-width: 250px;"&gt;
      This is centered description content. Also, notice the CTA and image are
      centered.
    &lt;/p&gt;
    &lt;auro-hyperlink href="/" type="nav" target="_blank" slot="cta"&gt;
      More info
    &lt;/auro-hyperlink&gt;
  &lt;/auro-card&gt;
  &lt;!--
    Avatar image option
  --&gt;
  &lt;auro-card style="max-width: 250px;" center&gt;
    &lt;auro-avatar slot="image" code="pdx" ariaVisible alt="iconic image of Portland, OR"&gt;&lt;/auro-avatar&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;
      Header
    &lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;auro-hyperlink href="/" type="nav" target="_blank" slot="cta"&gt;
      More info
    &lt;/auro-hyperlink&gt;
  &lt;/auro-card&gt;
  &lt;!--
    Icon size image option using variant="inset-container"
  --&gt;
  &lt;auro-card
    center
    style="max-width: 280px;"
    variant="inset-container"&gt;
    &lt;auro-icon
      slot="image"
      category="interface"
      name="qr-code-stroke"
      customColor
      style="color: var(--ds-color-brand-breeze-400, #00cff0);"&gt;
    &lt;/auro-icon&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;
      Card Title
    &lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;auro-hyperlink href="/" type="nav" target="_blank" slot="cta"&gt;
      More info
    &lt;/auro-hyperlink&gt;
  &lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 1.8rem;"&gt;
  &lt;!-- --&gt;
  &lt;!-- baseline navigation style auro-card --&gt;
  &lt;!-- --&gt;
  &lt;auro-card href="/" style="max-width: 300px" center&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/300/100?random=1"
      alt="Random insert 0"/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;
      Header
    &lt;/auro-header&gt;
    &lt;div slot="description"&gt;
      &lt;p&gt;
        Context goes here. Describe the page this card represents.
      &lt;/p&gt;
    &lt;/div&gt;
    &lt;p slot="cta"&gt;
      More info
    &lt;/p&gt;
  &lt;/auro-card&gt;
  &lt;!-- --&gt;
  &lt;!-- baseline navigation style auro-card with external link icon --&gt;
  &lt;!-- --&gt;
  &lt;auro-card href="/" target="_blank" style="max-width: 300px" center&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/300/100?random=2"
      alt="Random insert 0"/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;
      Header
    &lt;/auro-header&gt;
    &lt;div slot="description"&gt;
      &lt;p&gt;
        Context goes here. Describe the page this card represents.
      &lt;/p&gt;
    &lt;/div&gt;
    &lt;p slot="cta"&gt;
      More info
    &lt;/p&gt;
  &lt;/auro-card&gt;
  &lt;!-- --&gt;
  &lt;!-- navigation card centered style with auro-icon --&gt;
  &lt;!-- --&gt;
  &lt;auro-card
    center
    class="icon-card"
    href="/"
    style="max-width: 300px;"
    variant="inset-stretch"&gt;
  &lt;auro-icon
    slot="image"
    category="interface"
    name="qr-code-stroke"
    customColor
    customSize
    style="color: var(--ds-color-brand-breeze-400, #00cff0); width: 60px;"&gt;
  &lt;/auro-icon&gt;
  &lt;auro-header slot="header" level="2" display="500"&gt;
    Card Title
  &lt;/auro-header&gt;
  &lt;p slot="description"&gt;
    Context goes here. Describe the page this card represents.
  &lt;/p&gt;
&lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
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
      alt=""/>
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
      alt=""/>
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

<pre class="language-html"><code class="language-html">&lt;div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;"&gt;
  &lt;auro-card variant="inset-container" style="max-width: 300px"&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/200/200?random=0"
      alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;Inset 'Container'&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
        More info
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card variant="inset-content" style="max-width: 300px"&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/200/200?random=1"
      alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;Inset 'Content'&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
        More info
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;style&gt;
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
&lt;/style&gt;
&lt;div
  class="complex-card-wrapper"
&gt;
  &lt;auro-card
    class="white-card-example"
  &gt;
    &lt;auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block"&gt;
      Seattle, WA (SEA) to&lt;br&gt;
      Los Angeles (LAX)
    &lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Los Angeles is a sprawling Southern California city and the center of
      the nation's film and television industry.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink type="cta" href="/"&gt;
        Book a Flight
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card
    class="blue-card-example"
  &gt;
    &lt;auro-header slot="header" level="2" display="500" style="margin-top: -1rem; display: inline-block"&gt;
      Seattle, WA (SEA) to&lt;br&gt;
      Los Angeles (LAX)
    &lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Los Angeles is a sprawling Southern California city and the center of
      the nation's film and television industry.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink type="cta" href="/" ondark&gt;
        Book a Flight
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Grid

When cards are placed together in a row or grid, each card's `cta` slot drops to the bottom of the card so the call-to-action buttons line up across the row regardless of how much content each card holds.

This requires no extra configuration: place the cards in a CSS `grid` or `flex` row, both of which stretch their items to equal height by default, and the alignment happens automatically.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/grid.html) -->
<!-- The below content is automatically added from ../apiExamples/grid.html -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem;">
<auro-card border variant="inset-content">
<img slot="image" src="https://picsum.photos/300/200?random=10" alt=""/>
<auro-header slot="header" level="2" display="500">Let's go somewhere</auro-header>
<p slot="description">
        Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world.
</p>
<div slot="cta">
<auro-hyperlink href="/" type="nav" target="_blank">Click me now</auro-hyperlink>
</div>
</auro-card>
<auro-card border variant="inset-content">
<img slot="image" src="https://picsum.photos/300/200?random=11" alt=""/>
<auro-header slot="header" level="2" display="500">We're going to Mars!</auro-header>
<p slot="description">
        Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world. From the moment the Wright brothers achieved the first powered flight in 1903, aviation has soared to incredible heights, shrinking our globe and connecting distant lands with unprecedented speed.
</p>
<div slot="cta">
<auro-hyperlink href="/" type="nav" target="_blank">Click me now</auro-hyperlink>
</div>
</auro-card>
<auro-card border variant="inset-content">
<img slot="image" src="https://picsum.photos/300/200?random=12" alt=""/>
<auro-header slot="header" level="2" display="500">We're going to Venus!</auro-header>
<p slot="description">
        Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world.
</p>
<div slot="cta">
<auro-hyperlink href="/" type="nav" target="_blank">Click me now</auro-hyperlink>
</div>
</auro-card>
<auro-card border variant="inset-content">
<img slot="image" src="https://picsum.photos/300/200?random=13" alt=""/>
<auro-header slot="header" level="2" display="500">Let's take a trip</auro-header>
<p slot="description">
        Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world. From the moment the Wright brothers achieved the first powered flight in 1903, aviation has soared to incredible heights.
</p>
<div slot="cta">
<auro-hyperlink href="/" type="nav" target="_blank">Click me now</auro-hyperlink>
</div>
</auro-card>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/grid.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/grid.html -->

<pre class="language-html"><code class="language-html">&lt;div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem;"&gt;
  &lt;auro-card border variant="inset-content"&gt;
    &lt;img slot="image" src="https://picsum.photos/300/200?random=10" alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;Let's go somewhere&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;Click me now&lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card border variant="inset-content"&gt;
    &lt;img slot="image" src="https://picsum.photos/300/200?random=11" alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;We're going to Mars!&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world. From the moment the Wright brothers achieved the first powered flight in 1903, aviation has soared to incredible heights, shrinking our globe and connecting distant lands with unprecedented speed.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;Click me now&lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card border variant="inset-content"&gt;
    &lt;img slot="image" src="https://picsum.photos/300/200?random=12" alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;We're going to Venus!&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;Click me now&lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
  &lt;auro-card border variant="inset-content"&gt;
    &lt;img slot="image" src="https://picsum.photos/300/200?random=13" alt=""/&gt;
    &lt;auro-header slot="header" level="2" display="500"&gt;Let's take a trip&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Airplanes, those marvels of modern engineering, have revolutionized the way we explore the world. From the moment the Wright brothers achieved the first powered flight in 1903, aviation has soared to incredible heights.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;Click me now&lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">:host {
  --ds-auro-card-border-color: transparent;
  --ds-auro-card-background-color: transparent;
  --ds-auro-card-texticon-color: inherit;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
