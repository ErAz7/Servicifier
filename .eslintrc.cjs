module.exports = {
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:react/recommended'
    ],
    rules: {
        camelcase: [0, { properties: 'never' }],
        'no-console': [1, { allow: ['info', 'error'] }],
        'no-labels': 0,
        indent: [2, 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral > *'] }],
        'jsx-quotes': [2, 'prefer-single'],
        'jsx-a11y/href-no-hash': 'off',
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-closing-bracket-location': [2, { selfClosing: 'after-props', nonEmpty: 'after-props' }],
        'react/jsx-curly-spacing': [2, 'never', { allowMultiline: false }],
        'react/jsx-max-props-per-line': [2, { maximum: 3 }],
        'react/self-closing-comp': 2,
        'react/sort-comp': [1, {
            order: [
                'propTypes',
                'defaultProps',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],
        semi: [2, 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'ignore'
        }],
        'valid-jsdoc': ['error', {
            prefer: {
                arg: 'param',
                argument: 'param',
                return: 'returns'
            },
            preferType: {
                object: 'Object',
                array: 'Array',
                string: 'String',
                number: 'Number',
                boolean: 'Boolean',
                promise: 'Promise'
            },
            requireReturn: false,
            requireReturnType: true,
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: '.+'
        }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'any', prev: 'directive', next: 'directive' },
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: 'export' },
            { blankLine: 'any', prev: 'export', next: 'export' },
            { blankLine: 'always', prev: 'function', next: '*' },
            { blankLine: 'always', prev: '*', next: 'function' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'class', next: '*' },
            { blankLine: 'always', prev: '*', next: 'class' }
        ]
    },
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
          "version": "16.0", // React version. "detect" automatically picks the version you have installed.
                               // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                               // default to latest and warns if missing
                               // It will default to "detect" in the future
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "componentWrapperFunctions": [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            "observer", // `property`
            {"property": "styled"}, // `object` is optional
            {"property": "observer", "object": "Mobx"},
            {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
        ],
        "linkComponents": [
              // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
              "Hyperlink",
              {"name": "Link", "linkAttribute": "to"}
        ]
    }
};
