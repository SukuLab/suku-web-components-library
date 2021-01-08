# suku-web-components-library

![Publish NPM Package](https://github.com/SukuLab/suku-web-components-library/workflows/Publish%20NPM%20Package/badge.svg)
[![npm version](https://badge.fury.io/js/%40suku%2Fwebcomponents.svg)](https://badge.fury.io/js/%40suku%2Fwebcomponents)

Welcome to the suku-web-components library. This library aims to provide Angular web components for the SUKU platform.

> **Note:** This repository contains the build files that can be used to install and import web components into another Angular project (see steps below). For the web components source code see [SUKU Web Component Builder](https://github.com/SukuLab/suku-web-component-builder). A demo of every component is available using the [Suku Webcomponent Browser](http://webcomponents.suku.network/webcomponents/documentation).

## Angular Web Components
Check out [Angular's web component documententation](https://angular.io/guide/elements) for more information on how to use web components in your Angular project.

## Setup
Install the package: `npm install @suku/webcomponents`

The following peer dependencies need to be installed:
- `"d3": "^3.5.17"`
- `"@angular/material": "^7.2.2"`
- `"ng2-charts": "~1.6.0",`
- `"ngx-countdown-timer": "^0.1.9"`
- `"ngx-pagination": "^3.1.1"`
- `"ngx-quill": "^3.6.0"`
- `"quill": "^1.3.6"`
- `suku-icons-library`
- `"@ngx-translate/core": "^11.0.1"`
- `"@ngx-translate/http-loader": "^4.0.0"`

## Usage
`import { SukuWebcomponentsModule } from '@suku/suku-web-components-library'`

## Documentation
View a working version of every component in the [Suku Webcomponent Browser](http://webcomponents.suku.network/webcomponents/documentation).

## Angular Configuration
Add `[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]` to schema.
