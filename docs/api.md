# auro-card

The auro-card element provides users a flexible way to convey a summary of information.

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `border`  | `Boolean` | Adds desired UI border to the `auro-card` element. |
| `center`  | `Boolean` | Centers content within the scope of the `auro-card`. |

## Properties

| Property  | Attribute | Type     | Description                                      |
|-----------|-----------|----------|--------------------------------------------------|
| `href`    | `href`    | `String` | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot. |
| `rel`     | `rel`     | `String` | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel). |
| `role`    | `role`    | `String` | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role). |
| `target`  | `target`  | `String` | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target). |
| `variant` | `variant` | `String` | Sets the variant of the card. Options `inset-content`, `inset-container`. |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | Content slot for call-to-action content.         |
| `description` | Content slot for string text description content. |
| `header`      | Content slot for string text header content.     |
| `image`       | Content slot for image content.                  |

## CSS Shadow Parts

| Part           | Description                                      |
|----------------|--------------------------------------------------|
| `content`      | Apply styles to the outer string text container. |
| `cta`          | Apply styles to the named cta slot container.    |
| `description`  | Apply styles to the named description slot container. |
| `header`       | Apply styles to the named header slot container. |
| `image`        | Apply styles to the named image slot container.  |
| `imageWrapper` | Apply styles to the outer image slot container.  |
| `link`         | Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element. |
