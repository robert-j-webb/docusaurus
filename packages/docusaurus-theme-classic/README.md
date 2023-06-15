# Docusaurus Theme Classic

The classic theme for Docusaurus.

## Installation

Add `docusaurus/theme-classic` to your package:

```bash
npm i @robertwebbmodular/theme-classic
# or
yarn add @robertwebbmodular/theme-classic
```

Modify your `docusaurus.config.js`:

```diff
module.exports = {
  ...
+ themes: ['@robertwebbmodular/theme-classic'],
  ...
}
```

## Swizzling components

```bash
$ npm swizzle @robertwebbmodular/theme-classic [component name]
```

All components used by this theme can be found [here](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme)
