export default {
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "prettier",
        "prettier/react",
        "plugin:jsx-control-statements/recommended"
    ],
    plugins: ["prettier"],
    env: { browser: true },
    settings: {
        "import/resolver": "webpack"
    },
    rules: {
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"]
            }
        ],
        "react/jsx-no-undef": [2, { allowGlobals: true }],
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "import/order": 0,
        "import/prefer-default-export": 0,
        "max-len": ["error", { code: 100, ignoreUrls: true }],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "all",
                singleQuote: false,
                printWidth: 100,
                tabWidth: 4
            }
        ]
    }
};