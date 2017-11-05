
module.exports = {
  "globals": {
    "window": true,
    "$": true,
    "describe": true,
    "it": true,
    "beforeEach": true,
    "afterEach": true,
    "before": true,
    "after": true,
  },

  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },

  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },

  "plugins": [
    //    "standard",
    "react",
    "cumul8"
    //  flow????
  ],

  "rules": {
    "no-console": [2],
    "curly": [2, "multi-or-nest"],
    "brace-style": [2, "stroustrup"],
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "quote-props": [1, "consistent-as-needed"],
    "no-cond-assign": [2],
    "radix": 0,
    "space-infix-ops": 0,
    "default-case": 0,
    "no-else-return": 0,
    "no-param-reassign": 0,
    "camelcase": 0,
    "arrow-body-style": 0, // this is dumb, there are plenty of times this will make everything worse
    "no-trailing-spaces": 0,
    "no-lonely-if": 0,
    "sort-keys": 2,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0, 
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "shorthandFirst": false,
      "shorthandLast": true,
      "ignoreCase": true,
      "noSortAlphabetically": false,
      "reservedFirst": false,
      }],
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    "cumul8/alphabetical-destructuring": 2,
    "jsx-a11y/href-no-hash": 0, // have to turn this off because of weird bug with it
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-autofocus": 0, // have to turn off as react documentation recommends using autoFocus
  },

  "extends": [
    //"eslint:recommended",
    //"plugin:react/recommended"
    "airbnb",
  ]
};