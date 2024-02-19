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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
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
  <auro-card style="max-width: 375px" variant="icon">
    <img
      slot="image"
      src="https://picsum.photos/100/50"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Pri dicat graece abhorreant
    </auro-header>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
    <div slot="description">
      <p>
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
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
<auro-card style="max-width: 375px" variant="icon">
  <img
    slot="image"
    src="https://picsum.photos/100/50"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Pri dicat graece abhorreant
  </auro-header>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
  <div slot="description">
    <p>
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
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
  <auro-card style="max-width: 375px;" variant="round-image" >
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
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
<auro-card style="max-width: 375px;" variant="round-image" >
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
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
  <auro-card style="max-width: 375px;">
    <!-- Image set to 134px -->
    <img
      slot="image"
      src="https://picsum.photos/134/134"
      alt="Random insert 0"/>
    <auro-header slot="header" level="3" display="600">
      Header
    </auro-header>
    <div slot="description">
      <p>
        Context goes here. Describe the page this card represents.
      </p>
    </div>
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
<auro-card style="max-width: 375px;">
  <!-- Image set to 134px -->
  <img
    slot="image"
    src="https://picsum.photos/134/134"
    alt="Random insert 0"/>
  <auro-header slot="header" level="3" display="600">
    Header
  </auro-header>
  <div slot="description">
    <p>
      Context goes here. Describe the page this card represents.
    </p>
  </div>
  <div slot="cta">
    <auro-hyperlink href="/" nav target="_blank">
      More info
    </auro-hyperlink>
  </div>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
