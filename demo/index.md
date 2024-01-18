<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-card>` element provides users a flexible way to convey a summary of information. The primary elements of a card include an image, and details.

The details are broken down into `title`, `description`, `cta`, and `disclaimer`.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-card use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
Use the `<auro-card>` element to:

* Grab the attention of a user
* Direct your user to another resource for further information
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-card` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-card';
registerComponent('custom-card');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-card` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-card>
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
  </custom-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-card>
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
</custom-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
