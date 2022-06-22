module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    ignorePatterns: ['**/dist/'],
    globals: {
        expect: true,
        it: true,
    },
}
