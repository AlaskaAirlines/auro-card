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

The basic example demonstrates the `image`, `description`, and `cta` content slots on a single standalone card. The default card has 100% width for flexible presentation within its container.

**Content recommendations:**
- Use `<auro-header>` with `display="500"` for headings
- Use `<p>` elements for body text  
- Use `<auro-hyperlink>` or `<auro-hyperlink type="cta">` for the `cta` slot

Apply CSS constraints like `max-width` to control text wrapping and layout as needed.

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
 