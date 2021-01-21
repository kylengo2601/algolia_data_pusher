module.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "max-len": ["error", 90, 2, {
      "ignoreUrls": true,
      "ignoreComments": true,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
  },
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },
  "parser": "babel-eslint",
};
