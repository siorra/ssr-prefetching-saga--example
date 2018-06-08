// Type definitions for jss-preset-default 0.5.0
// Project: https://github.com/cssinjs/jss-preset-default
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/wikiwi/typeless

declare module 'jss-preset-default' {
  export type JSSPresetOptions = {
    extend?: any;
    nested?: any;
    camelCase?: any;
    defaultUnit?: any;
    vendorPrefixer?: any;
    propsSort?: any;
    compose?: any;
  };

  const preset: (opts?: JSSPresetOptions) => any;
  export default preset;
}

declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module 'webpack-dev-middleware' {
  const value: any;
  export = value;
}

declare module 'webpack-hot-middleware' {
  const value: any;
  export = value;
}


declare module 'express' {
  const value: any;
  export = value;
}


declare module 'redux-logger' {
  const value: any;
  export = value;
}

