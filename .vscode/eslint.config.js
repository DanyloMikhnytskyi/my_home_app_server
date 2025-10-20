// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';

export default tseslint.config(
  {
    ignores: ['**/*.js', 'dist'],
    rules: {
      'no-var': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  perfectionist.configs['recommended-natural'],
);
