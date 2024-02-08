module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@next/next/recommended",
        "next",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["postcss.config.js"],
    "rules": {
        "no-redeclare": "off",
        "@next/next/no-html-link-for-pages": "off",
        "no-undef": "off",
        "react/jsx-no-undef": "off",
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^_"
            }
        ]
    }
}
