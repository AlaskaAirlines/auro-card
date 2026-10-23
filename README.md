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
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-card>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that groups an image, a header, a description, and a call to action into one summary of information, such as a destination, offer, or article teaser. Add `href` to make the whole card a link.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `<auro-card>` when you want to:

- Link to another page: Add `href` to make the whole card a link to a page, file, or section.
- Feature content: Show an offer, destination, or article that deserves attention.
- Group related information: Keep an image, header, description, and call to action together as one unit.
- Organize a page: Place cards in a row or grid so people can scan the page quickly.
- Summarize and lead to detail: Give a short overview that points to the full story.
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-card/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-card/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-card?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-card)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-card?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-card</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-card>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-card";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-card@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroCard } from '@aurodesignsystem/auro-card/class';
&#10;// Register with a custom name if desired
AuroCard.register('custom-card');</code></pre>

This creates a new custom element `<custom-card>` that behaves exactly like `<auro-card>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-card>
<img
      slot="image"
      src="https://picsum.photos/300/300?random=0"
      alt=""/>
<auro-header slot="header" level="2" display="500">Card title</auro-header>
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

<pre class="language-html"><code class="language-html">&lt;custom-card&gt;
  &lt;img
    slot="image"
    src="https://picsum.photos/300/300?random=0"
    alt=""/&gt;
  &lt;auro-header slot="header" level="2" display="500"&gt;Card title&lt;/auro-header&gt;
  &lt;p slot="description"&gt;
    Context goes here.
  &lt;/p&gt;
  &lt;div slot="cta"&gt;
    &lt;auro-hyperlink href="/" type="nav" target="_blank"&gt;
      More info
    &lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/custom-card&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
