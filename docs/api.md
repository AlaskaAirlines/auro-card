# auro-card

The `<auro-card>` element provides users a flexible way to convey a summary of information.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                    | Default | Description                                                                                                                                                                         |
| ---------- | ---------- | --------- | ------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| border     | border     |           | boolean                                                 |         | Adds desired UI border to the `auro-card` element.                                                                                                                                  |
| center     | center     |           | boolean                                                 |         | Centers content within the scope of the `auro-card`.                                                                                                                                |
| href       | href       |           | string                                                  |         | Sets the card to function as a hyperlink to the provided href value & disables the default CTA slot.                                                                                |
| rel        | rel        |           | string                                                  |         | Sets rel attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#rel).                                                                           |
| relative   | relative   |           | boolean                                                 |         | If true, the auto URL re-write feature will be disabled. [See here for info about hyperlink relative attribute](https://auro.alaskaair.com/components/auro/hyperlink/api#relative). |
| role       | role       |           | string                                                  |         | Sets role attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#role).                                                                         |
| target     | target     |           | string                                                  |         | Sets target attribute on the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#target).                                                                     |
| variant    | variant    |           | `inset-content` \| `inset-container` \| `inset-stretch` |         | Sets the variant of the card.                                                                                                                                                       |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| cta         | Content slot for call-to-action content.          |
| description | Content slot for string text description content. |
| header      | Content slot for string text header content.      |
| image       | Content slot for image content.                   |

### CSS Shadow Parts

| Name         | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| content      | Apply styles to the outer string text container.                                                             |
| cta          | Apply styles to the named cta slot container.                                                                |
| description  | Apply styles to the named description slot container.                                                        |
| header       | Apply styles to the named header slot container.                                                             |
| image        | Apply styles to the named image slot container.                                                              |
| imageWrapper | Apply styles to the outer image slot container.                                                              |
| link         | Apply styles to the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink/api#link) element. |