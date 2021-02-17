# auro-card

auro-card provides users a way to ...

## Properties

| Property          | Attribute         | Type      | Default                                 | Description                                      |
|-------------------|-------------------|-----------|-----------------------------------------|--------------------------------------------------|
| `bgImgClass`      | `bgImgClass`      | `String`  | "bg-image"                              | A space-separates list of class names to be applied to the element with a<br />background image.  Only relevant when isBackgroundImage is true. |
| `cardBgAlt`       | `cardBgAlt`       | `String`  |                                         |                                                  |
| `cardBgColor`     | `cardBgColor`     | `String`  | "var(--auro-color-background-lightest)" |                                                  |
| `cardBgImg`       | `cardBgImg`       | `String`  |                                         |                                                  |
| `cssClass`        | `cssClass`        | `String`  |                                         | Applies designated CSS class to DOM element.     |
| `imgAltText`      | `imgAltText`      | `String`  |                                         | Alt text for the given image.  If background image, this text is used as aria-label. |
| `imgSrc`          | `imgSrc`          | `String`  |                                         | A url (relative or absolute) for card image.     |
| `isBgImg`         | `isBgImg`         | `Boolean` | false                                   | Indicates whether the given image should be set as a background image. |
| `isTitleAboveImg` | `isTitleAboveImg` | `Boolean` | false                                   |                                                  |
| `padding`         | `padding`         | `String`  | "var(--auro-size-md)"                   |                                                  |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
| `cta`         | The call to action for this card.                |
| `description` | The main body of text on this card.              |
| `disclaimer`  | Any disclaimer text after the main body of text. |
| `image`       | Use to override the image with your own image markup format. |
| `subtitle`    | A subtitle, if needed.                           |
| `title`       | The card heading.                                |
