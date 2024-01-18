<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-card

The auro-card element provides users a flexible way to convey a summary of information.

## Attributes

| Attribute   | Type      | Description                                      |
|-------------|-----------|--------------------------------------------------|
| [alignLeft](#alignLeft) | `Boolean` | When present, the card content will be aligned to the left. |

## Slots

| Name          | Description          |
|---------------|----------------------|
| [cta](#cta)         | call to action       |
| [description](#description) | main body of copy    |
| [disclaimer](#disclaimer)  | disclaimer copy      |
| [image](#image)       | card image placement |
| [title](#title)       | card heading         |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=0"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-card>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="image"
    src="https://picsum.photos/304?random=0"
    alt="Random insert 0"/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### alignLeft

For card content to `align-left` within the context of the custom element, use the `alignLeft` property.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/alignLeft.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/alignLeft.html -->
  <auro-card alignLeft>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=1"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/alignLeft.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/alignLeft.html -->

```html
<auro-card alignLeft>
  <span slot="title">
    Pri dicat graece abhorreant
  </span>
  <img
    slot="image"
    src="https://picsum.photos/304?random=1"
    alt="Random insert 0"/>
  <p slot="description">
    Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
  </p>
  <auro-hyperlink
    nav
    href="/"
    slot="action"
    target="_blank">
    More info
  </auro-hyperlink>
  <p slot="disclaimer">
    * Errem tempor eligendi cu eos
  </p>
</auro-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Common Use Cases

When placing multiple `<auro-card>` elements within a single parent container, the following example illustrates using flexbox for layout support.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multiCard.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/multiCard.html -->
  <style>
    @media screen and (min-width: 1024px) {
      .flexLayout {
        display: flex;
        justify-content: space-between;
      }
    }
  </style>
  <div class="flexLayout">
    <auro-card>
      <span slot="title">
        Pri dicat graece abhorreant
      </span>
      <img
        slot="image"
        src="https://picsum.photos/304?random=3"
        alt="Random insert 0"/>
      <p slot="description">
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        slot="action"
        target="_blank">
        More info
      </auro-hyperlink>
      <p slot="disclaimer">
        * Errem tempor eligendi cu eos
      </p>
    </auro-card>
    <auro-card>
      <span slot="title">
        Pri dicat graece abhorreant
      </span>
      <img
        slot="image"
        src="https://picsum.photos/304?random=4"
        alt="Random insert 0"/>
      <p slot="description">
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        slot="action"
        target="_blank">
        More info
      </auro-hyperlink>
      <p slot="disclaimer">
        * Errem tempor eligendi cu eos
      </p>
    </auro-card>
    <auro-card>
      <span slot="title">
        Pri dicat graece abhorreant
      </span>
      <img
        slot="image"
        src="https://picsum.photos/304?random=5"
        alt="Random insert 0"/>
      <p slot="description">
        Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
      </p>
      <auro-hyperlink
        nav
        href="/"
        slot="action"
        target="_blank">
        More info
      </auro-hyperlink>
      <p slot="disclaimer">
        * Errem tempor eligendi cu eos
      </p>
    </auro-card>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multiCard.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/multiCard.html -->

```html
<style>
  @media screen and (min-width: 1024px) {
    .flexLayout {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
<div class="flexLayout">
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=3"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=4"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
  <auro-card>
    <span slot="title">
      Pri dicat graece abhorreant
    </span>
    <img
      slot="image"
      src="https://picsum.photos/304?random=5"
      alt="Random insert 0"/>
    <p slot="description">
      Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
    </p>
    <auro-hyperlink
      nav
      href="/"
      slot="action"
      target="_blank">
      More info
    </auro-hyperlink>
    <p slot="disclaimer">
      * Errem tempor eligendi cu eos
    </p>
  </auro-card>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
