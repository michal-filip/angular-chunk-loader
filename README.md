# angular-chunk-loader

A Webpack loader for Angular that allows async importing of chunks, especially useful for fetching and using entryComponents across feature modules

## Installation

  `npm install angular-chunk-loader --save-dev`

## Usage

Add the `angular-chunk-loader` to your typescript loaders

```ts
loaders: [
  {
    test: /\.ts$/,
    loaders: [
      'awesome-typescript-loader',
      'angular-chunk-loader'
    ]
  }
]
```

## Lazy Loading

In your source files, use `System.import()` with a relative path to your lazy loaded angular module.

```ts

System.import('./app/module/+my-feature/my-feature.module').then((chunk: { MyFeatureModule: Type<any>, MyFeatureModuleNgFactory: NgModuleFactory<any> }) => {
  let compiledModule: NgModuleFactory<any>;
  if (chunk.RequisitionModuleNgFactory instanceof NgModuleFactory) {
    compiledModule = chunk.RequisitionModuleNgFactory; // AOT
  } else {
    compiledModule = this.compiler.compileModuleSync(chunk.RequisitionModule);
  }
  // further process - eg. lookup component factory and instantiate components
}
```

## Additional Documentation

* [Loader Options](./docs/options.md#general-loader-options)
* [AoT Compilation Options](./docs/options.md#loader-options-aot-compilation)
* [Lazy Loading Options](./docs/options.md#lazy-loading-options)


## Credits

This loader was forked from the following project:

[angular-router-loader](https://github.com/brandonroberts/angular-router-loader) by [brandonroberts](https://github.com/brandonroberts)

This loader was inspired by the following projects.

[es6-promise-loader](https://github.com/gdi2290/es6-promise-loader) by [PatrickJS](https://twitter.com/@gdi2290)

[angular2-template-loader](https://github.com/TheLarkInn/angular2-template-loader) by [Sean Larkin](https://twitter.com/@TheLarkInn)

### License

MIT (http://www.opensource.org/licenses/mit-license.php)
