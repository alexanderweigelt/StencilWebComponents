import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'todo-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};