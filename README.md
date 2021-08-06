# Animation plugin for marker.js Live

This plugin adds basic marker animation features to [marker.js Live]

## Installation

Make sure you have [marker.js Live] installed. Then run

```
npm install mjslive-plugin-animate
```

or 

```
yarn add mjslive-plugin-animate
```

## Usage

To add basic animation to your marker.js Live instance simply pass a new instance of `Animate` to its `addPlugins()` method.

```
import { Animate } from 'mjslive-plugin-animate';

...
markerView.addPlugin(new Animate());

markerView1.show(markerViewState);

```

## Configuration

The first release applies a simple "staged reveal" animation when markers are loaded.

More configuration options are coming soon.

## License

This [marker.js Live] plugin is distributed under the MIT License. See LICENSE file for details.

[marker.js Live]: https://markerjs.com/products/markerjs-live