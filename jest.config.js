module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(md)$': '<rootDir>/__mocks__/htmlMock.js',
    '@storybook/addons$': '<rootDir>/lib/addons/src',
    '@storybook/core/client$': '<rootDir>/lib/core/client.mjs',
    '@storybook/core$': '<rootDir>/lib/core/src',
    '@storybook/ui$': '<rootDir>/lib/ui/src',
    '@storybook/components$': '<rootDir>/lib/components/src',
    '@storybook/theming$': '<rootDir>/lib/theming/src',
    '@storybook/api$': '<rootDir>/lib/api/src',
    '@storybook/channel-postmessage$': '<rootDir>/lib/channel-postmessage/src',
    '@storybook/channel-websocket$': '<rootDir>/lib/channel-websocket/src',
    '@storybook/channels$': '<rootDir>/lib/channels/src',
    '@storybook/client-api$': '<rootDir>/lib/client-api/src',
    '@storybook/client-logger$': '<rootDir>/lib/client-logger/src',
    '@storybook/core-events$': '<rootDir>/lib/core-events/src',
    '@storybook/node-logger$': '<rootDir>/lib/node-logger/src',
    '@storybook/router$': '<rootDir>/lib/router/src',
    '@storybook/cli$': '<rootDir>/lib/cli/src',
    '@storybook/angular$': '<rootDir>/app/angular/src/client/index',
    '@storybook/ember$': '<rootDir>/app/ember/src/client/index',
    '@storybook/html$': '<rootDir>/app/html/src/client/index',
    '@storybook/marko$': '<rootDir>/app/marko/src/client/index',
    '@storybook/mithril$': '<rootDir>/app/mithril/src/client/index',
    '@storybook/polymer$': '<rootDir>/app/polymer/src/client/index',
    '@storybook/preact$': '<rootDir>/app/preact/src/client/index',
    '@storybook/react$': '<rootDir>/app/react/src/client/index',
    '@storybook/react-native$': '<rootDir>/app/react/-nativesrc/client/index',
    '@storybook/react-native-server$': '<rootDir>/app/react-native-server/src/client/index',
    '@storybook/riot$': '<rootDir>/app/riot/src/client/index',
    '@storybook/svelte$': '<rootDir>/app/svelte/src/client/index',
    '@storybook/vue$': '<rootDir>/app/vue/src/client/index',
    '@storybook/addon-viewport$': '<rootDir>/addons/viewport/preview.mjs',
    '@storybook/addon-centered/([a-z]*])$': '<rootDir>/addons/centered/$1.mjs',
    '@storybook/addon-storyshots$': '<rootDir>/addons/storyshots/storyshots-core/src',
    '@storybook/addon-storyshots-puppeteer$':
      '<rootDir>/addons/storyshots/storyshots-puppeteer/src',
    '@storybook/addon-([a-z]*)$': '<rootDir>/addons/$1/src',
    'core-js/es6/reflect': 'core-js/es/reflect',
    'core-js/es7/reflect': 'core-js/proposals/reflect-metadata',
    // 'core-js/object': 'core-js/es',
  },
  projects: [
    '<rootDir>',
    '<rootDir>/examples/cra-kitchen-sink',
    '<rootDir>/examples/cra-ts-kitchen-sink',
    '<rootDir>/examples/html-kitchen-sink',
    '<rootDir>/examples/riot-kitchen-sink',
    '<rootDir>/examples/svelte-kitchen-sink',
    '<rootDir>/examples/vue-kitchen-sink',
    '<rootDir>/examples/angular-cli',
    '<rootDir>/examples/preact-kitchen-sink',
  ],
  roots: [
    '<rootDir>/addons',
    '<rootDir>/app',
    '<rootDir>/lib',
    '<rootDir>/examples/official-storybook',
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/scripts/babel-jest.js',
    '^.+\\.mjs$': '<rootDir>/scripts/babel-jest.js',
    '^.+\\.tsx?$': '<rootDir>/scripts/babel-jest.js',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'addon-jest.test.js',
    '/cli/test/',
    '/examples/cra-kitchen-sink/src/App.test.js',
    '/examples/cra-ts-kitchen-sink/src/components/',
    '/examples/angular-cli/src/app/',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'addons/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cli/test/',
    '/dist/',
    '/generators/',
    '/dll/',
    '/__mocks__ /',
  ],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./scripts/jest.init.js'],
  coverageReporters: ['lcov'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  setupFiles: ['raf/polyfill'],
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['/dist/.*/__mocks__/'],
  moduleFileExtensions: ['js', 'mjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
