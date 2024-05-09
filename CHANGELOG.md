# Semantic Release Automated Changelog

# [3.0.0](https://github.com/AlaskaAirlines/auro-card/compare/v2.0.4...v3.0.0) (2024-05-09)


### Features

* add `center` attribute ([a3242f9](https://github.com/AlaskaAirlines/auro-card/commit/a3242f9aa021a3434afbbfd4a5cb162d72dc99d9))
* new component development [#44](https://github.com/AlaskaAirlines/auro-card/issues/44) ([08f1ca8](https://github.com/AlaskaAirlines/auro-card/commit/08f1ca8aaad331762133a3f21ef4c9c94b92fc85))


### BREAKING CHANGES

* this is a complete rewrite and is incompatible
with the old auro-card even if some slots have the same name.

Changes to be committed:
modified:   .gitignore
modified:   README.md
new file:   apiExamples/advanced.html
deleted:    apiExamples/alignLeft.html
modified:   apiExamples/basic.html
new file:   apiExamples/bordered.html
new file:   apiExamples/center.html
deleted:    apiExamples/custom.html
new file:   apiExamples/icon.html
new file:   apiExamples/inset-container.html
new file:   apiExamples/inset-content.html
new file:   apiExamples/inset.html
deleted:    apiExamples/multiCard.html
new file:   apiExamples/navigation.html
new file:   apiExamples/round-image.html
new file:   apiExamples/typography-cards.html
modified:   demo/apiExamples.md
modified:   demo/index.html
modified:   demo/index.md
modified:   docs/api.md
modified:   docs/partials/apiExamples.md
deleted:    docs/partials/demo.md
modified:   docs/partials/description.md
new file:   docs/partials/index.md
modified:   docs/partials/useCases.md
modified:   package-lock.json
modified:   package.json
modified:   src/auro-card.js
modified:   src/style.scss
modified:   test/auro-card.test.js

## [2.0.4](https://github.com/AlaskaAirlines/auro-card/compare/v2.0.3...v2.0.4) (2024-02-13)


### Performance Improvements

* update auro dependencies ([64aa834](https://github.com/AlaskaAirlines/auro-card/commit/64aa834cff41c12a50e53fe9d05c4ce1f9f13d2f))

## [2.0.3](https://github.com/AlaskaAirlines/auro-card/compare/v2.0.2...v2.0.3) (2024-02-01)


### Performance Improvements

* update auro dependencies ([71ee492](https://github.com/AlaskaAirlines/auro-card/commit/71ee49290a5e1e438e0ddf554eb89931ccea4507))

## [2.0.2](https://github.com/AlaskaAirlines/auro-card/compare/v2.0.1...v2.0.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([e082fab](https://github.com/AlaskaAirlines/auro-card/commit/e082fab92863bc011036095ef44bdb3a93220b41))

## [2.0.1](https://github.com/AlaskaAirlines/auro-card/compare/v2.0.0...v2.0.1) (2024-01-24)


### Performance Improvements

* remove inclusion of tokens ([424aeb4](https://github.com/AlaskaAirlines/auro-card/commit/424aeb483ee34283afbb0a4902c410879e8ddba6))

# [2.0.0](https://github.com/AlaskaAirlines/auro-card/compare/v1.3.1...v2.0.0) (2024-01-24)


### Bug Fixes

* **deps:** update auro component dependencies and versions ([4f4854d](https://github.com/AlaskaAirlines/auro-card/commit/4f4854d7366ccdeb780939e52eee3f23bfb10508))


### Features

* **modernize:** rebuild component repo using generator [#51](https://github.com/AlaskaAirlines/auro-card/issues/51) ([2e10664](https://github.com/AlaskaAirlines/auro-card/commit/2e1066404354fed6424c1c43092cc68f72bbbe44))
* **ssr:** add support for SSR projects [#50](https://github.com/AlaskaAirlines/auro-card/issues/50) ([e55f1ff](https://github.com/AlaskaAirlines/auro-card/commit/e55f1ff966f24376c5366d72215844023af37575))


### Performance Improvements

* **accordion:** update doc accordion attributes ([49a02ba](https://github.com/AlaskaAirlines/auro-card/commit/49a02baf6b176de76283d64a366efe38463c7049))
* **banner:** remove auro-banner from repo ([d53dafb](https://github.com/AlaskaAirlines/auro-card/commit/d53dafb89a1afb8d2d79007b9eb37ad92b32fe1e))
* **cdn:** update cdn references ([dd5b2a8](https://github.com/AlaskaAirlines/auro-card/commit/dd5b2a8b38687dd5de1efb8e443900c5cc992a6e))
* **husky:** add commit scripts ([3cc377a](https://github.com/AlaskaAirlines/auro-card/commit/3cc377ab9a8a4f9218bc8d270cef4ba483d69d90))
* **tokens:** update to use new design tokens [#47](https://github.com/AlaskaAirlines/auro-card/issues/47) ([6373e3f](https://github.com/AlaskaAirlines/auro-card/commit/6373e3f82e988c7cb1ba9b9dce884857cd58d16d))


### BREAKING CHANGES

* **banner:** auro-banner has been removed from auro-card repo and into it's own repo
* **modernize:** the namespace was updated from @alaskaairux to @aurodesignsystem

## [1.3.1](https://github.com/AlaskaAirlines/auro-card/compare/v1.3.0...v1.3.1) (2021-05-27)


### Bug Fixes

* reflect attributes used for styling [#26](https://github.com/AlaskaAirlines/auro-card/issues/26) ([216f25f](https://github.com/AlaskaAirlines/auro-card/commit/216f25fdc3695671c58155817cd79d16ca07a342))

# [1.3.0](https://github.com/AlaskaAirlines/auro-card/compare/v1.2.2...v1.3.0) (2021-05-18)


### Features

* **iconic:** add support for iconic variant ([dc8f330](https://github.com/AlaskaAirlines/auro-card/commit/dc8f3307fb37cda4911815f5c331202e99660fb6))

## [1.2.2](https://github.com/AlaskaAirlines/auro-card/compare/v1.2.1...v1.2.2) (2021-03-18)


### Bug Fixes

* fix responsive banner ([519df5b](https://github.com/AlaskaAirlines/auro-card/commit/519df5b516a13b90385e4314eccae4144a60191c))

## [1.2.1](https://github.com/AlaskaAirlines/auro-card/compare/v1.2.0...v1.2.1) (2021-03-17)


### Bug Fixes

* update marquee and roundedBorder per issues with responsive UI ([128aa95](https://github.com/AlaskaAirlines/auro-card/commit/128aa95cdc3de60be63bc0242619017cac99cbc8))

# [1.2.0](https://github.com/AlaskaAirlines/auro-card/compare/v1.1.0...v1.2.0) (2021-03-11)


### Features

* add rounded border variant for cc ads ([35cd4b2](https://github.com/AlaskaAirlines/auro-card/commit/35cd4b24a7605474d568bfe9c1e6f8eed6fd3af1))

# [1.1.0](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.7...v1.1.0) (2021-03-08)


### Bug Fixes

* the overflow hidden masks issues ([857a879](https://github.com/AlaskaAirlines/auro-card/commit/857a8796d0910eac61f6341a0be0e1e2c7d0e407))


### Features

* add alignleft attribute and example ([49802c6](https://github.com/AlaskaAirlines/auro-card/commit/49802c6c43b65290db38eb56b73f35eb4be7919e))

## [1.0.7](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.6...v1.0.7) (2021-03-05)


### Bug Fixes

* remove max height from hero and marquee ([737656b](https://github.com/AlaskaAirlines/auro-card/commit/737656b2f2648d1c2cf6fe07f25b80d061344541))

## [1.0.6](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.5...v1.0.6) (2021-03-04)


### Bug Fixes

* unset overflow hidden on ohter variants ([dc80086](https://github.com/AlaskaAirlines/auro-card/commit/dc80086d2a78fcbdc457fe8c3b649a4a863f53b3))

## [1.0.5](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.4...v1.0.5) (2021-03-03)


### Bug Fixes

* remove extra padding from banner in hero mode ([90b6497](https://github.com/AlaskaAirlines/auro-card/commit/90b649768c2fa682a81fb71c19516004f87f8ec3))

## [1.0.4](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.3...v1.0.4) (2021-03-01)


### Bug Fixes

* prevent billboard form overflowing ([daf3773](https://github.com/AlaskaAirlines/auro-card/commit/daf37731a3cfa58bdc17e8c1b3a4d20c8717d749))

## [1.0.3](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.2...v1.0.3) (2021-02-27)


### Bug Fixes

* address missing space per last update to card ([71dadd9](https://github.com/AlaskaAirlines/auro-card/commit/71dadd9edf6198b3fa345e9ab6070328090fb4c8))

## [1.0.2](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.1...v1.0.2) (2021-02-27)


### Bug Fixes

* address responsive issues with image placement ([9b9f6a9](https://github.com/AlaskaAirlines/auro-card/commit/9b9f6a9285943f8395960e0837fd4dddba06ff04))

## [1.0.1](https://github.com/AlaskaAirlines/auro-card/compare/v1.0.0...v1.0.1) (2021-02-27)


### Bug Fixes

* address space between image and copy ([365d0d0](https://github.com/AlaskaAirlines/auro-card/commit/365d0d0ba79616159f8a9bc04767e7c47c3bb613))

# 1.0.0 (2021-02-27)


### Features

* release new auro-card and auro-banner custom element ([60f67c3](https://github.com/AlaskaAirlines/auro-card/commit/60f67c3dc7e8fe4bc2df5ef6f81cb3f0ce0ae042))


### BREAKING CHANGES

* This commit is the official 1.0 release
