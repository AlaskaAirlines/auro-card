# auro-card

auro-card provides users a flexible way to convey a summary of information. The primary elements of a card include an
image, and details. The details are broken down into title, description, cta, and others. A card should be used to
grab the attention of a user and direct them to another resource for further information.  A card should not be used
as the primary source of information.

## Properties

| Property                 | Attribute                | Type      | Default                                       | Description                                      |
|--------------------------|--------------------------|-----------|-----------------------------------------------|--------------------------------------------------|
| `bgColor`                | `bgColor`                | `String`  | "var(--auro-color-background-lightest)"       | Indicates a background color that spans the breadth of the component. |
| `bgImgAlt`               | `bgImgAlt`               | `String`  | null                                          | If set, will serve as alt text for a full component background image.  Usage of this<br />property is only advised if the corresponding background image is considered relevant to the semantics of the page.<br />That is, if the image is not merely decorative. |
| `bgImgAnchorBottom`      | `bgImgAnchorBottom`      | `Boolean` | false                                         | Indicates whether to anchor the background image to the bottom of the image container. |
| `bgImgAnchorBottomLeft`  | `bgImgAnchorBottomLeft`  | `Boolean` | false                                         | Indicates whether to anchor the background image to the bottom-left of the image container. |
| `bgImgAnchorBottomRight` | `bgImgAnchorBottomRight` | `Boolean` | false                                         | Indicates whether to anchor the background image to the bottom-right of the image container. |
| `bgImgAnchorCenter`      |                          | `boolean` | false                                         |                                                  |
| `bgImgAnchorLeft`        | `bgImgAnchorLeft`        | `Boolean` | false                                         | Indicates whether to anchor the background image to the left of the image container. |
| `bgImgAnchorRight`       | `bgImgAnchorRight`       | `Boolean` | false                                         | Indicates whether to anchor the background image to the right of the image container. |
| `bgImgAnchorTop`         | `bgImgAnchorTop`         | `Boolean` | false                                         | Indicates whether to anchor the background image to the top of the image container. |
| `bgImgAnchorTopLeft`     | `bgImgAnchorTopLeft`     | `Boolean` | false                                         | Indicates whether to anchor the background image to the top-left of the image container. |
| `bgImgAnchorTopRight`    | `bgImgAnchorTopRight`    | `Boolean` | false                                         | Indicates whether to anchor the background image to the top-right of the image container. |
| `bgImgClass`             |                          | `string`  | "card-bg-image-cover card-bg-imageHeight-400" |                                                  |
| `bgImgSrc`               | `bgImgSrc`               | `String`  | null                                          | A background image that spans the breadth of the component. |
| `coverImgContainer`      | `coverImgContainer`      | `Boolean` | false                                         | Indicates if the primary image should completely cover the image panel at all<br />times. This is accomplished by setting the primary image as a background image. |
| `cssClass`               | `cssClass`               | `String`  | ""                                            | Applies designated CSS class to DOM element.     |
| `imgAltText`             | `imgAltText`             | `String`  | null                                          | Alt text for the given primary image.            |
| `imgBottom`              | `imgBottom`              | `Boolean` | false                                         | Indicates if the primary image should be positioned below the details panel. |
| `imgLeft`                | `imgLeft`                | `Boolean` | false                                         | Indicates if the primary image should be positioned to the left of the details panel. At<br />smaller breakpoints, the image will be positioned above the details panel. |
| `imgRight`               | `imgRight`               | `Boolean` | false                                         | Indicates if the primary image should be positioned to the right of the details panel. At<br />smaller breakpoints, the image will be positioned below the details panel. |
| `imgSrc`                 | `imgSrc`                 | `String`  | null                                          | A url (relative or absolute) for primary image.  |
| `imgTop`                 | `imgTop`                 | `Boolean` | false                                         | Indicates if the primary image should be positioned above the details panel. |
| `justifyCenter`          | `justifyCenter`          | `Boolean` | false                                         | Indicates whether to center justify the contents of the details panel. |
| `justifyLeft`            | `justifyLeft`            | `Boolean` | false                                         | Indicates whether to left justify the contents of the details panel. |
| `justifyRight`           | `justifyRight`           | `Boolean` | false                                         | Indicates whether to right justify the contents of the details panel. |
| `padding`                | `padding`                | `String`  | "none"                                        | Indicates padding around the details section of the card. This can be one of the following<br />tokens: 'sm', 'md', or 'lg'.  It can also be a standard CSS 4-tuple of spacing, e.g. "5px 10px 2px 10px", and<br />supports CSS variable, e.g. "var(--t-padding) var(--r-padding) var(--b-padding) 20px" |
| `titleTop`               | `titleTop`               | `Boolean` | false                                         | Indicates whether to position the title above the primary image when applicable. |

## Methods

| Method              | Type       |
|---------------------|------------|
| `setBgImg`          | `(): void` |
| `setDetailsPadding` | `(): void` |
| `setImgPlacement`   | `(): void` |
| `setJustify`        | `(): void` |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | The call to action for this card.                |
| `description` | The main body of text on this card.              |
| `disclaimer`  | Any disclaimer text after the main body of text. |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                           |
| `title`       | The card heading.                                |
