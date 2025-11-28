import js from '@eslint/js'
import globals from 'globals'

export default [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                React: 'readonly',
                JSX: 'readonly',
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': ['warn', { 
                argsIgnorePattern: '^_', 
                varsIgnorePattern: '^_|^React$',
                ignoreRestSiblings: true,
            }],
            'prefer-const': 'error',
            'no-var': 'error',
        },
    },
    {
        ignores: ['.next/**', 'node_modules/**', 'out/**', '*.config.js', '*.config.mjs'],
    },
]
