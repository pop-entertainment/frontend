/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': null,
    'declaration-no-important': null,
    'no-empty-source': null,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace']
      }
    ]
  }
};
