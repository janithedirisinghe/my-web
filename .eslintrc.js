module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'no-unused-vars': 'warn', // You can change this to 'off' to completely ignore unused vars
      'react/prop-types': 'off',
      'no-undef': 'off', // Turn off the 'no-undef' rule
    },
    ignorePatterns: [
      'node_modules/',
      'dist/',
      'node_modules/@mediapipe/tasks-vision/vision_bundle.mjs', // Ignore specific files
    ],
  };
  