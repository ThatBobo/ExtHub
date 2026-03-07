# Adding Extensions
---

## Step 1: Extension Format

### Requirements
- Extensions must use the traditional PenguinMod extension format (no Turbobuilder or auto‑generated formats).
- Code should be clean, readable, and use `Scratch.Cast` where appropriate.
- Your extension ID should include your username.
- Include a commented header at the top of your file with:
  - Name
  - ID
  - Author
  - Description
  - License
  - Version

### Example Structure
~~~~js
// header metadata

(function (Scratch) {
  "use strict";

  class Extension {
    // ...
  }

  Scratch.extensions.register(Extension);
})(Scratch);
~~~~

---

## Step 2: Pull Request Format

### 2.1: Add Your Code
Place your extension file inside the `extension-code` folder.  
Create a subfolder with your username, and put your `.js` file inside it.

### 2.2: Add Your Banner
- Banners must be **SVG**, sized **300×150px**.
- Banners must include a border using this template:
~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" width="309.298" height="159.648" viewBox="0 0 309.298 159.648"><defs><linearGradient x1="240" y1="105.675" x2="240" y2="255.323" gradientUnits="userSpaceOnUse" id="a"><stop offset="0" stop-color="RED"/><stop offset="1" stop-color="BLUE"/></linearGradient></defs><path d="M90.352 118.17c0-6.398 5.915-12.494 13.12-12.494h272.61c8.613 0 13.568 4.642 13.568 12.245v125.705c0 6.04-4.86 11.697-13.32 11.697H103.72c-7.327 0-13.368-4.523-13.368-11.947z" fill="none" stroke="url(#a)" stroke-width="10" transform="translate(-85.352 -100.675)"/></svg>
~~~~
- The banner design should match your extension’s theme.
- Place your banner inside the `extension-thumbs` folder, in a subfolder with your username.

---

## 2.3: Add Your Extension to the Gallery

Insert the following template into `Gallery Files/Extension-Keys.json`  
**Place it inside the `extensions` object, before the `example` entry.**

### Template
~~~~json
"<Extension-Name>": {
  "desc": "<Short description>",
  "creator": "<Username>",
  "url": "<Filename from 2.1>",
  "banner": "<Filename from 2.2>",
  "tags": ["<tag1>", "<tag2>"],
  "date": ""
}
~~~~

### Notes
- Extension names must use `-` instead of spaces.
- Tags must come from the allowed tag list in the same JSON file.

---

## Step 3: Submit Your Pull Request

Once everything is added, open a pull request.  
A reviewer will check your submission and may merge it, request changes, or close it.

You're done!
