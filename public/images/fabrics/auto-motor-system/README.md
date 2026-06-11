# auto-motor-system Fabric Folder

Drop your files here:

- thumbnail.jpg - Main fabric thumbnail image shown on the catalog grid card.
- Color swatch images (jpg/png/webp) - one per available color.

## How to Add New Colors

1. Drop your swatch image into this folder (e.g. ivory-white.jpg).
2. Open /src/data/fabrics.json and find the entry with id: auto-motor-system
3. Add an object to its colors array:

  { code: IW-01, name: Ivory White, image: /images/fabrics/auto-motor-system/ivory-white.jpg }

