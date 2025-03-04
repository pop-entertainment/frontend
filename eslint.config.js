import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import angular from '@angular-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angular,
      "unused-imports": unusedImports,
      prettier,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...angular.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
            'vars': 'all',
            'varsIgnorePattern': '^_',
            'args': 'after-used',
            'argsIgnorePattern': '^_',
        },
      ],
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      'build/',
      '**/*.spec.ts',
      'coverage/',
      'karma.conf.js',
    ],
  },
]
