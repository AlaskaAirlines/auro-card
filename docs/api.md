# auro-card

auro-card provides users a way to ...

## Properties

| Property               | Attribute              | Type      | Default    | Description                                      |
|------------------------|------------------------|-----------|------------|--------------------------------------------------|
| `backgroundImageClass` | `backgroundImageClass` | `String`  | "bg-image" | A space-separates list of class names to be applied to the element with a<br />background image.  Only relevant when isBackgroundImage is true. |
| `cssClass`             | `cssClass`             | `String`  |            | Applies designated CSS class to DOM element.     |
| `imageAltText`         | `imageAltText`         | `String`  |            | Alt text for the given image.  If background image, this text is used as aria-label. |
| `imageSrc`             | `imageSrc`             | `String`  |            | A url (relative or absolute) for card image.     |
| `isBackgroundImage`    | `isBackgroundImage`    | `Boolean` | false      | Indicates whether the given image should be set as a background image. |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | The call to action for this card.                |
| `description` | The main body of text on this card.              |
| `disclaimer`  | Any disclaimer text after the main body of text. |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                           |
| `title`       | The card heading.                                |
