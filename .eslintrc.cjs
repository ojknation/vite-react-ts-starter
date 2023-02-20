module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "import",
    "unused-imports",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
    "no-console": ["warn", { allow: ["error"] }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-expressions": ["error", { enforceForJSX: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
