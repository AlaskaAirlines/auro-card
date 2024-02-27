<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-card

The auro-card element provides users a flexible way to convey a summary of information.

## Properties

| Property  | Attribute | Type     | Description                                      |
|-----------|-----------|----------|--------------------------------------------------|
| [href](#href)    | `href`    | `String` | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot. |
| [rel](#rel)     | `rel`     | `String` | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel). |
| [role](#role)    | `role`    | `String` | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role). |
| [target](#target)  | `target`  | `String` | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target). |
| [variant](#variant) | `variant` | `String` | Sets the variant of the card. Options include: "inset" or "flush". |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Icon

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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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
