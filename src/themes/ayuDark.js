// https://github.com/PrismJS/prism/blob/master/components/prism-cpp.js
// https://github.com/ayu-theme/ayu-colors/blob/60fdf5d39c5ef36c081b081c1fb90b5e7cc24f4d/src/dark.ts
// https://github.com/ayu-theme/vscode-ayu/blob/master/src/template.ts

const ayu = require('ayu');

let scheme = ayu.dark;

var theme = {
  "plain": {
    "color": scheme.editor.fg.hex('rgba'),
    "backgroundColor": scheme.editor.bg.hex('rgba')
  },
  "styles": [
    {
      "types": [
        "comment"
      ],
      "style": {
        "color": scheme.syntax.comment.hex('rgba'),
        "fontStyle": "italic"
      }
    },
    {
      "types": [
        "keyword",
        "directive-hash"
      ],
      "style": {
        "color": scheme.syntax.keyword.hex('rgba')
      }
    },
    {
      "types": [
        "number",
        "boolean",
        "builtin"
      ],
      "style": {
        "color": scheme.syntax.constant.hex('rgba')
      }
    },
    {
      "types": [
        "operator",
      ],
      "style": {
        "color": scheme.syntax.operator.hex('rgba')
      }
    },
    {
      "types": [
        "double-colon"
      ],
      "style": {
        "color": scheme.editor.fg.alpha(0.7).hex()
      }
    },
    {
      "types": [
        "punctuation"
      ],
      "style": {
        "color": scheme.editor.fg.alpha(0.7).hex()
      }
    },
    {
      "types": [
        "class-name",
      ],
      "style": {
        "color": scheme.syntax.tag.hex('rgba')
      }
    },
    {
      "types": [
        "function",
        "attr-name"
      ],
      "style": {
        "color": scheme.syntax.func.hex('rgba')
      }
    },
    {
      "types": [
        "string",
        "symbol"
      ],
      "style": {
        "color": scheme.syntax.string.hex('rgba')
      }
    },
    {
      "types": [
        "tag"
      ],
      "style": {
        "color": scheme.syntax.tag.hex('rgba')
      }
    },



    {
      "types": [
        "char",
        "constant"
      ],
      "style": {
        "color": "rgb(149, 230, 203)"
      }
    },
    {
      "types": [
        "variable"
      ],
      "style": {
        "color": "rgb(191, 189, 182)"
      }
    },

    {
      "types": [
        "inserted"
      ],
      "style": {
        "color": "rgb(127, 217, 98)"
      }
    },
    {
      "types": [
        "changed"
      ],
      "style": {
        "color": "rgb(115, 184, 255)"
      }
    },
    {
      "types": [
        "deleted"
      ],
      "style": {
        "color": "rgb(242, 109, 120)"
      }
    }
  ]
};
  
module.exports = theme;
