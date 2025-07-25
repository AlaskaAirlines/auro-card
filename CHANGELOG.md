# Semantic Release Automated Changelog

## [5.1.4](https://github.com/AlaskaAirlines/auro-card/compare/v5.1.3...v5.1.4) (2025-07-21)


### Bug Fixes

* add part(link) to hyoperlink ([b7506a3](https://github.com/AlaskaAirlines/auro-card/commit/b7506a332dd83bf38346c6b3086e2d2b3b94caa4))

## [5.1.3](https://github.com/AlaskaAirlines/auro-card/compare/v5.1.2...v5.1.3) (2025-07-16)


### Bug Fixes

* update deps/pkgs, restructure styles files ([c10289e](https://github.com/AlaskaAirlines/auro-card/commit/c10289eff50214c816f2c28c4bd10dcc47947caf))
* update docs head content ([b45cee8](https://github.com/AlaskaAirlines/auro-card/commit/b45cee82e14808d1ee7554a5651b4f46f6b6fb4f))

## [5.1.2](https://github.com/AlaskaAirlines/auro-card/compare/v5.1.1...v5.1.2) (2025-06-23)


### Bug Fixes

* address broken nav cards [#102](https://github.com/AlaskaAirlines/auro-card/issues/102) ([938585e](https://github.com/AlaskaAirlines/auro-card/commit/938585ebb6a470bae25280239827fdbfd610b7de))

## [5.1.1](https://github.com/AlaskaAirlines/auro-card/compare/v5.1.0...v5.1.1) (2025-05-02)


### Bug Fixes

* resolve issue with attribute by leveraging the framework instead of setting it directly ([15425bc](https://github.com/AlaskaAirlines/auro-card/commit/15425bc07406bdc5adc79502460717a287bb27ef)), closes [#91](https://github.com/AlaskaAirlines/auro-card/issues/91)

# [5.1.0](https://github.com/AlaskaAirlines/auro-card/compare/v5.0.1...v5.1.0) (2025-04-30)


### Features

* update colors for new theme support [#89](https://github.com/AlaskaAirlines/auro-card/issues/89) ([6277d03](https://github.com/AlaskaAirlines/auro-card/commit/6277d03da223fafecb202605d45600cdfff456cf))

## [5.0.1](https://github.com/AlaskaAirlines/auro-card/compare/v5.0.0...v5.0.1) (2025-04-15)


### Performance Improvements

* add wca script for docs api ([d5765a9](https://github.com/AlaskaAirlines/auro-card/commit/d5765a96d92b8846deccb8e4bf8b15145e55baf4))

# [5.0.0](https://github.com/AlaskaAirlines/auro-card/compare/v4.1.3...v5.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([87bc059](https://github.com/AlaskaAirlines/auro-card/commit/87bc059348afc28645f2379e0c5b5ad615654082))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [4.1.3](https://github.com/AlaskaAirlines/auro-card/compare/v4.1.2...v4.1.3) (2025-02-08)


### Performance Improvements

* update dependencies ([44a3d08](https://github.com/AlaskaAirlines/auro-card/commit/44a3d089738034a2d5b3e672be695df86227e80c))

## [4.1.2](https://github.com/AlaskaAirlines/auro-card/compare/v4.1.1...v4.1.2) (2024-12-22)


### Performance Improvements

* update dependency versions ([bebcadc](https://github.com/AlaskaAirlines/auro-card/commit/bebcadc43c51dc084613103731ede61c12fb6bb8))
* update node to version 22 ([a4c2f67](https://github.com/AlaskaAirlines/auro-card/commit/a4c2f67ef39ef1bed26d6b7ed756ca8266384ffe))

## [4.1.1](https://github.com/AlaskaAirlines/auro-card/compare/v4.1.0...v4.1.1) (2024-11-18)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#79](https://github.com/AlaskaAirlines/auro-card/issues/79) ([b3db501](https://github.com/AlaskaAirlines/auro-card/commit/b3db50102e81cb126aa058be55396974cbbea09c))


### Performance Improvements

* update library to 3.0.2 ([1399d30](https://github.com/AlaskaAirlines/auro-card/commit/1399d30b2550c1e22f07a231c23e1516b30c05fa))

# [4.1.0](https://github.com/AlaskaAirlines/auro-card/compare/v4.0.1...v4.1.0) (2024-10-24)


### Bug Fixes

* add file extension for proper ESM support ([0233fb6](https://github.com/AlaskaAirlines/auro-card/commit/0233fb68899dbe86fc423ffcb83adafa1fedc6e5))


### Features

* **api:** add register static method [#77](https://github.com/AlaskaAirlines/auro-card/issues/77) ([3c780ff](https://github.com/AlaskaAirlines/auro-card/commit/3c780ffb2eb5103660b32fb3d14a30018f4c206e))

## [4.0.1](https://github.com/AlaskaAirlines/auro-card/compare/v4.0.0...v4.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#75](https://github.com/AlaskaAirlines/auro-card/issues/75) ([23e4594](https://github.com/AlaskaAirlines/auro-card/commit/23e459432b0260d30d09c736e3a38c90fbd3f8d7))

# [4.0.0](https://github.com/AlaskaAirlines/auro-card/compare/v3.0.0...v4.0.0) (2024-10-01)


### Features

* add tag name as attribute when custom registered ([fd68035](https://github.com/AlaskaAirlines/auro-card/commit/fd680350c9931f1334726f2ac93f416811fcea01))
* **themes:** support component themes [#64](https://github.com/AlaskaAirlines/auro-card/issues/64) ([c639330](https://github.com/AlaskaAirlines/auro-card/commit/c639330aac698acf8222108530a31d7b33343706))


### Performance Improvements

* add messaging script back in ([bd35040](https://github.com/AlaskaAirlines/auro-card/commit/bd35040aff225ae1cce277a5a68c8fd2c0796795))
* **label:** remove github label colors ([0cd5590](https://github.com/AlaskaAirlines/auro-card/commit/0cd5590ccc9ce8f821d0b398755685b964f82004))
* refactor custom component registration config ([5663e82](https://github.com/AlaskaAirlines/auro-card/commit/5663e8283a2cdd742b5a3031d9b92171a0b8fc85))
* update commit message path ([acb4a09](https://github.com/AlaskaAirlines/auro-card/commit/acb4a09d71b5bb0870b811e00f88cd10ecb7aade))
* update dependencies and lint configuration ([0fe766b](https://github.com/AlaskaAirlines/auro-card/commit/0fe766bb915ffede0c1409a0595752bbce5150e9))
* Update pre-commit hook and husky prepare command. ([7ed75e2](https://github.com/AlaskaAirlines/auro-card/commit/7ed75e23ea54f5ceb832dd736873f1b86c03959c))
* use custom registered version of hyperlink [#70](https://github.com/AlaskaAirlines/auro-card/issues/70) ([59df951](https://github.com/AlaskaAirlines/auro-card/commit/59df951fd9a96a5b6bb743bd518e058a70ac1932))


### BREAKING CHANGES

* trigger major release for color theme support #64

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
