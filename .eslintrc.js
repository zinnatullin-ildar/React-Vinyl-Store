module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "standard",
        "plugin:react/jsx-runtime",
        "prettier",
        "plugin:prettier/recommended"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off"
    }
};
