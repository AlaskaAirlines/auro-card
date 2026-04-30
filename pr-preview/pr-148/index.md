<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-card>` is highly customizable [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) is a type of UI design component that display content and actions about a single topic.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-card>` element can be use in a variety of ways, including:

- Navigation: Cards can be used for navigation purposes.
- Featured information: Cards can be used to display featured information or related content.
- Content containers: Cards can be used to organize information consistently within a page.
- Grouping information: Cards can be used to group information.
- Providing a visual hierarchy: Cards can provide a clear visual hierarchy, organizing information into brief, self-contained units.
- Providing an overview: Cards can serve as an overview and an entry point for more detailed information.
- Providing a summary: Cards can present a summary and link to additional details.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

The basic example demonstrates the `image`, `description`, and `cta` content slots. The default card has 100% width for flexible presentation within its container.

**Content recommendations:**
- Use `<auro-header>` with `display="500"` for headings
- Use `<p>` elements for body text  
- Use `<auro-hyperlink>` or `<auro-hyperlink type="cta">` for the `cta` slot

Apply CSS constraints like `max-width` to control text wrapping and layout as needed, as illustrated in the second example.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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
</auro-accordion>
 