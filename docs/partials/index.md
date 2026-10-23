<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Card
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Use cases
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>
 