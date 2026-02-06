import js from '@eslint/js';
import litPlugin from 'eslint-plugin-lit';
import wcPlugin from 'eslint-plugin-wc';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['**/*.test.js'],
    plugins: {
      lit: litPlugin,
      wc: wcPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...litPlugin.configs.recommended.rules,
      ...wcPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',

      // Lit
      'lit/no-invalid-html': 'error',
      'lit/no-useless-template-literals': 'error',
      'lit/attribute-value-entities': 'error',
      'lit/binding-positions': 'error',
      'lit/no-duplicate-template-bindings': 'error',
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-property-change-update': 'error',
      'lit/no-template-bind': 'warn',

      // Web Components
      'wc/no-constructor-attributes': 'error',
      'wc/no-invalid-element-name': 'error',
      'wc/no-self-class': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        customElements: 'readonly',
        CustomEvent: 'readonly',
        fetch: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        customElements: 'readonly',
        CustomEvent: 'readonly',
        fetch: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
      },
    },
  },
];
