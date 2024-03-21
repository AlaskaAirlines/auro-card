<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-card

The `<auro-card>` element provides users a flexible way to convey a summary of information.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [border](#border)  | `Boolean` | Adds desired UI border to the `auro-card` element. |
| [center](#center)  | `Boolean` | Centers content within the scope of the `auro-card`. |

## Properties

| Property  | Attribute | Type     | Description                                      |
|-----------|-----------|----------|--------------------------------------------------|
| [href](#href)    | `href`    | `String` | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot. |
| [rel](#rel)     | `rel`     | `String` | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel). |
| [role](#role)    | `role`    | `String` | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role). |
| [target](#target)  | `target`  | `String` | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target). |
| [variant](#variant) | `variant` | `String` | Sets the variant of the card. Options `inset-content`, `inset-container`, `inset-stretch`. |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| [cta](#cta)         | Content slot for call-to-action content.         |
| [description](#description) | Content slot for string text description content. |
| [header](#header)      | Content slot for string text header content.     |
| [image](#image)       | Content slot for image content.                  |

## CSS Shadow Parts

| Part           | Description                                      |
|----------------|--------------------------------------------------|
| [content](#content)      | Apply styles to the outer string text container. |
| [cta](#cta)          | Apply styles to the named cta slot container.    |
| [description](#description)  | Apply styles to the named description slot container. |
| [header](#header)       | Apply styles to the named header slot container. |
| [image](#image)        | Apply styles to the named image slot container.  |
| [imageWrapper](#imageWrapper) | Apply styles to the outer image slot container.  |
| [link](#link)         | Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

The following example illustrates a default UI for the `<auro-card>` element.

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

The `<auro-card>` custom element, with its `href` attribute, creates a `auro-hyperlink` element to web pages, files, email addresses, locations in the same page, or anything else a URL can address. The second example illustrates the accessible icon when using the `target` attribute.

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
