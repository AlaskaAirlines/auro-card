<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-card>` is highly customizable [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) is a type of UI design component that display content and actions about a single topic.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
The `<auro-card>` element can be use in a variety of ways, including:

- Navigation: Cards can be used for navigation purposes.
- Featured information: Cards can be used to display featured information or related content.
- Content containers: Cards can be used to organize information consistently within a page.
- Grouping information: Cards can be used to group information.
- Providing a visual hierarchy: Cards can provide a clear visual hierarchy, organizing information into brief, self-contained units.
- Providing an overview: Cards can serve as an overview and an entry point for more detailed information.
- Providing a summary: Cards can present a summary and link to additional details.
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-card/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-card/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-card?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-card)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-card?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-card
```

<!-- AURO-GENERATED-CONTENT:END -->

### Define Dependency in Project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Defining the dependency within each project that is using the `<auro-card>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-card";
```

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Legacy browsers such as IE11 are no longer supported.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-card@latest/+esm"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## Basic Example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom Component Registration for Version Management

There are two key parts to every Auro component: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

When you install the component as described on the `Install` page, the class is imported automatically, and the component is registered globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), you can manually register the class under a custom element name to avoid conflicts.

You can do this by importing only the component class and using the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

```js
// Import the class only
import { AuroCard } from '@aurodesignsystem/auro-card/class';

// Register with a custom name if desired
AuroCard.register('custom-card');
```

This will create a new custom element `<custom-card>` that behaves exactly like `<auro-card>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./apiExamples/custom.html -->
  <custom-card>
    <img
      slot="image"
      src="https://picsum.photos/300/300?random=0"
      alt="Random insert"/>
    <h3 slot="header">Card Title</h3>
    <p slot="description">
      Context goes here.
    </p>
    <div slot="cta">
      <auro-hyperlink href="/" type="nav" target="_blank">
        More info
      </auro-hyperlink>
    </div>
  </custom-card>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

```html
<custom-card>
  <img
    slot="image"
    src="https://picsum.photos/300/300?random=0"
    alt="Random insert"/>
  <h3 slot="header">Card Title</h3>
  <p slot="description">
    Context goes here.
  </p>
  <div slot="cta">
    <auro-hyperlink href="/" type="nav" target="_blank">
      More info
    </auro-hyperlink>
  </div>
</custom-card>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
