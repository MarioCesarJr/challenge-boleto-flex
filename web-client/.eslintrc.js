module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['warn', { extensions: ['jsx', 'js'] }],
        'import/prefer-default-export': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/prop-types': 'off',
        'prefer-const': 'off',
        'react/no-string-refs': 'off',
        'react/button-has-type': 'off',
        'react/sort-comp': 'off',
        'no-return-assign': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'react/destructuring-assignment': 'off',
        'react/state-in-constructor': 'off',
        'jsx-a11y/alt-text': 'off',
    },
};
