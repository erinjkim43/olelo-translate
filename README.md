# ʻŌlelo Translate

A Hawaiian language HTML conversion tool built by the University of Hawaiʻi–West Oʻahu. It converts Hawaiian text containing ʻokina and kahakō diacritical marks into accessible, standards-compliant HTML.

**Live tool:** [westoahu.hawaii.edu/tools/olelotranslate](https://westoahu.hawaii.edu/tools/olelotranslate/)

## What It Does

Paste Hawaiian text into the input box and get HTML output that:

- Wraps Hawaiian words with `<span lang="haw">` per [WCAG 2.1 Guideline 3.1](https://www.w3.org/TR/WCAG21/#readable)
- Encodes ʻokina and kahakō as HTML entities for maximum compatibility
- Works with any CMS or static site

### Example

**Input:**
```
Hawaiʻi
Oʻahu
```

**Output:**
```html
<span lang="haw">Hawai&#699;i</span>
<span lang="haw">O&#699;ahu</span>
```

## Supported Characters

| Character | Unicode | HTML Entity |
|-----------|---------|-------------|
| ʻ (ʻokina) | U+02BB | `&#699;` |
| Ā | U+0100 | `&#256;` |
| ā | U+0101 | `&#257;` |
| Ē | U+0112 | `&#274;` |
| ē | U+0113 | `&#275;` |
| Ī | U+012A | `&#298;` |
| ī | U+012B | `&#299;` |
| Ō | U+014C | `&#332;` |
| ō | U+014D | `&#333;` |
| Ū | U+016A | `&#362;` |
| ū | U+016B | `&#363;` |

## Development

### Prerequisites

- Node.js 18+

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

The production build outputs to `dist/`.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Accessibility

This tool follows the [UH Accessibility Guidelines](https://www.hawaii.edu/access/accessible-content/webaccess/) and meets WCAG 2.1 AA standards:

- All color contrast ratios exceed 4.5:1
- Form fields are properly labeled
- Keyboard navigation is fully supported
- Output uses `lang="haw"` to signal Hawaiian language content to assistive technology

## License

[MIT](LICENSE)
