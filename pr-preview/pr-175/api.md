<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-card

A card that groups an image, a header, a description, and a call to action into one
summary of information, such as a destination, offer, or article teaser.

**Key capabilities**
- **Content areas**: four named slots (`image`, `header`, `description`, `cta`) that you
  fill with your own content.
- **Clickable card**: setting `href` makes the whole card a single link, built on
  `<auro-hyperlink>`, including its safe handling of URLs.
- **Spacing options**: set `variant` to `inset-content`, `inset-container`, or `inset-stretch`
  to choose how padding is applied around the image and text.
- **Border and alignment**: `border` adds an outline with rounded corners, and `center`
  centers the text.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-card href="/destinations/hawaii" border&gt;
  &lt;img slot="image" src="hawaii.jpg" alt="A beach in Hawaii" /&gt;
  &lt;span slot="header"&gt;Hawaii&lt;/span&gt;
  &lt;span slot="description"&gt;Fly nonstop from the West Coast.&lt;/span&gt;
&lt;/auro-card&gt;</code></pre>

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                    | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------- | --------- | ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| border     | border     |           | boolean                                                 |         | Adds a thin border and rounded corners around the card.                                                                                                                                                                                                                                                                                                                                                                                                  |
| center     | center     |           | boolean                                                 |         | Centers the text within the card.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| href       | href       |           | string                                                  |         | Makes the whole card a single link to an address such as `/destinations/hawaii` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#href) `href` attribute), including its safe handling of URLs. Because the card's content is rendered inside the link, avoid placing other links or buttons in the card's slots.                                                                                                         |
| rel        | rel        |           | string                                                  |         | Sets how the linked page relates to this one, such as `noopener` or `nofollow` (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#rel) `rel` attribute).                                                                                                                                                                                                                                                                   |
| relative   | relative   |           | boolean                                                 |         | Passes a `relative` attribute to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api). The auro-hyperlink version this card uses does not currently act on it, so it has no visible effect.                                                                                                                                                                                                                                  |
| role       | role       |           | string                                                  |         | Sets the card's accessibility role. Without `href`, the role is `article`. With `href`, the value is passed to the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#role), and no role is set when it is empty.                                                                                                                                                                                                               |
| target     | target     |           | string                                                  |         | Sets where the link opens, such as `_blank` for a new tab or `_self` for the current tab (the [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#target) `target` attribute).                                                                                                                                                                                                                                                   |
|            | variant    |           | `inset-content` \| `inset-container` \| `inset-stretch` |         | Sets how padding is applied. Use `inset-content` to pad the text and leave the image edge to edge, `inset-container` to pad the whole card, image included, or `inset-stretch` to let the image and text reach the left and right edges, with space above the image and below the text. Without a value, the card adds no extra left, right, or top padding. When `href` is set, the text always gets left and right padding, even with `inset-stretch`. |

### Methods

| Name     | Parameters                                                    | Return | Description                                                                                                                                               |
| -------- | ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-card` on the same page. |

### Slots

| Name        | Description                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cta         | A call to action, such as a button or link, shown below the description. When the card is taller than its content, such as in a row of cards, it moves to the bottom so calls to action line up. |
| description | Supporting text shown below the header.                                                                                                                                                          |
| header      | The card's heading text.                                                                                                                                                                         |
| image       | An image for the top of the card. An `<img>` fills the full width of the card.                                                                                                                   |

### CSS Shadow Parts

| Name         | Description                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| content      | The container that holds the header, description, and cta slots.                                                                                  |
| cta          | The `<slot>` element that holds the call to action.                                                                                               |
| description  | The `<slot>` element that holds the description content.                                                                                          |
| header       | The `<slot>` element that holds the header content.                                                                                               |
| image        | The `<slot>` element that holds the image content.                                                                                                |
| imageWrapper | The container around the image slot.                                                                                                              |
| link         | The [`auro-hyperlink`](https://auro.alaskaair.com/components/auro/hyperlink/api#link) that wraps the whole card. Only present when `href` is set. |

### CSS Custom Properties

| Name                            | Description                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| --ds-auro-card-border-color     | Color of the card's border, which shows when `border` is set. A card with `href` also uses it for the outline around the card.            |
| --ds-auro-card-background-color | Color behind the card's content. Cards with `border` or `href` use the theme's surface color by default, and other cards are transparent. |
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

Add the `border` attribute to draw a thin border with rounded corners around the whole card.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/bordered.html) -->
<!-- The below content is automatically added from ../apiExamples/bordered.html -->
<div style="display: flex; justify-content: flex-start; flex-wrap: wrap; gap: 4rem;">
<auro-card variant="inset-container" style="max-width: 300px" border>
<img
      slot="image"
      src="https://picsum.photos/200/300?random=3"
      alt=""/>
<auro-header slot="header" level="2" display="500">Inset container</auro-header>
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
<auro-header slot="header" level="2" display="500">Inset content</auro-header>
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
    &lt;auro-header slot="header" level="2" display="500"&gt;Inset container&lt;/auro-header&gt;
    &lt;p slot="description"&gt;
      Context goes here. Describe the page this card represents.
    &lt;/p&gt;
    &lt;div slot="cta"&gt;
      &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
        More info
      &lt;/auro-hyperlink&gt;
    &lt;/div&gt;
  &lt;/auro-card&gt;
&#10;  &lt;auro-card variant="inset-content" style="max-width: 300px" border&gt;
    &lt;img
      slot="image"
      src="https://picsum.photos/200/300?random=4"
      alt=""/&gt;
      &lt;auro-header slot="header" level="2" display="500"&gt;Inset content&lt;/auro-header&gt;
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

### Centered content

Add the `center` attribute to center the text. To center the image and call to action too, set `align-items: center` on the card, as the first example does.

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
<auro-header slot="header" level="2" display="500" style="max-width: 250px;">Centered content</auro-header>
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
        Card title
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
    &lt;auro-header slot="header" level="2" display="500" style="max-width: 250px;"&gt;Centered content&lt;/auro-header&gt;
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
      Card title
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

Add `href` to make the whole card a link to a web page, file, email address, or location in the same page. URLs that run script, such as `javascript:`, are removed. The card wraps its content in an `<auro-hyperlink>`. When you set `target="_blank"`, as in the second example, the card shows an icon that signals the link opens in a new tab.

The third example places a QR code icon in the `image` slot and uses `variant="inset-stretch"` to add space above the icon and below the text.

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
    Card title
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
    Card title
  &lt;/auro-header&gt;
  &lt;p slot="description"&gt;
    Context goes here. Describe the page this card represents.
  &lt;/p&gt;
&lt;/auro-card&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variants

The following examples use the `inset-container` and `inset-content` variants. Use `inset-container` to pad the whole card, image included. Use `inset-content` to pad only the header, description, and call to action, so the image stays edge to edge.

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
&#10;  &lt;auro-card variant="inset-content" style="max-width: 300px"&gt;
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

Note that this example also uses a `style` tag to set most of the styles. This shows that you don't have to use inline styles and can generally use whatever styling solution you prefer.

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
          Book a flight
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
          Book a flight
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
&#10;&lt;div
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
        Book a flight
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
        Book a flight
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

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">:host {
  --ds-auro-card-border-color: transparent;
  --ds-auro-card-background-color: transparent;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
