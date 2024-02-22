<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-card

The auro-card element provides users a flexible way to convey a summary of information.

## Properties

| Property         | Attribute        | Type     | Description                                      |
|------------------|------------------|----------|--------------------------------------------------|
| [navigationLink](#navigationLink) | `navigationLink` | `String` | Sets the card to function as a hyperlink and disables the default CTA slot. |
| [variant](#variant)        | `variant`        | `String` | Sets the variant of the card. Options include: bordered, icon, round-image. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <!-- Note the image set to 375px, this determines your card width by default -->
    <img
      slot="image"
      src="https://picsum.photos/375/375"
      alt="Random insert 0"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here. Describe the page this card represents.
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <!-- Note the image set to 375px, this determines your card width by default -->
  <img
    slot="image"
    src="https://picsum.photos/375/375"
    alt="Random insert 0"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here. Describe the page this card represents.
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
