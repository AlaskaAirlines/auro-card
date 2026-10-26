<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Card

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-card>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that groups an image, a header, a description, and a call to action into one summary of information, such as a destination, offer, or article teaser. Add `href` to make the whole card a link.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-card>` when you want to:

- Link to another page: Add `href` to make the whole card a link to a page, file, or section.
- Feature content: Show an offer, destination, or article that deserves attention.
- Group related information: Keep an image, header, description, and call to action together as one unit.
- Organize a page: Place cards in a row or grid so people can scan the page quickly.
- Summarize and lead to detail: Give a short overview that points to the full story.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Basic

The basic example shows the `image`, `header`, `description`, and `cta` slots on a single standalone card. By default, the card is only as wide as its content.

**Content recommendations:**
- Use `<auro-header>` with `display="500"` for headings
- Use `<p>` elements for body text  
- Use `<auro-hyperlink>` or `<auro-hyperlink type="cta">` for the `cta` slot

Set a `width` or `max-width` to control the card's size and how the text wraps.

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
 