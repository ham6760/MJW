module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "simple-import-sort", "prettier", "react-hooks"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off",
    "prettier/prettier": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        // import 순서 정의
        groups: [
          ["^node:"], // node 내장 모듈
          ["^\\u0000"], // side effect imports (e.g. import './style.css')
          ["^react", "^@?\\w"], // 외부 라이브러리 (react 관련 먼저)
          ["^\\./.*\\.s?css$", "^\\./"], // css 파일 먼저, 나머지 상대 경로
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // 상대경로 import
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
    "react-hooks/exhaustive-deps": "warn", // 또는 'error'
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
