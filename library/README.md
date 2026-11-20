# EW block examples

These are authoring-source examples, not published EW documents. Creating files
in GitHub does not add them to the EW Blocks panel. Copy them into the content
store and register the library as described below.

## Examples

| Block | Source | Content destination |
| --- | --- | --- |
| Hero | [hero.html](blocks/hero.html) | `/library/blocks/hero` |
| Cards | [cards.html](blocks/cards.html) | `/library/blocks/cards` |
| Columns | [columns.html](blocks/columns.html) | `/library/blocks/columns` |
| DM Image | [dm-image.html](blocks/dm-image.html) | `/library/blocks/dm-image` |
| DM Carousel | [dm-carousel.html](blocks/dm-carousel.html) | `/library/blocks/dm-carousel` |
| Fragment | [fragment.html](blocks/fragment.html) | `/library/blocks/fragment` |
| Widget | [widget.html](blocks/widget.html) | `/library/blocks/widget` |
| Header | [nav.html](examples/nav.html) | `/nav` |
| Footer | [footer.html](examples/footer.html) | `/footer` |

Header and Footer are site-shell blocks loaded automatically, not blocks authors
should insert into a page. Their examples are therefore not in the Blocks
catalogue. Do not wrap their source content in Header or Footer tables: doing so
would recursively load the same site-shell fragment.

The Fragment example also needs
[promotion.html](examples/promotion.html) at `/library/examples/promotion`.
The Widget example uses the included `/widgets/example-date/` code; it displays
the current date without requiring an image or an external service.

Sample CTA/navigation links such as `/getting-started`, `/contact`, and
`/privacy` must be replaced with real pages or created before production use.

## Install in EW

1. In `https://da.live/#/ritwiksrivastava/daeds/`, create the destination
   documents listed above. Open each source HTML file in a browser and copy its
   rendered content into the matching document in Content mode. For block
   documents, copy the complete table, including its heading row; do not copy
   the HTML source as text. For navigation, preserve the two section breaks
   (horizontal rules), which separate brand, navigation, and tools.
2. Preview `/library/examples/promotion`, `/nav`, and `/footer` so their
   `.plain.html` endpoints are available to the Fragment, Header, and Footer
   loaders. Publish them as well when the examples are needed on the live site.
   If `/nav` or `/footer` already has real content, retain it rather than
   replacing it just to try these examples.
3. Create a **sheet** at `/library/blocks` with columns `name` and `path`.
   Copy the entries from the `data` array in [blocks.json](blocks.json).
   The sheet and the `/library/blocks/` folder of documents are distinct
   resources. The JSON file is a catalogue reference, not a document to paste
   into the editor.
4. Open `https://da.live/config#/ritwiksrivastava/daeds/`, open the project
   configuration, and add or update a tab called `library`. Preserve any existing
   entries and add this row:

   | title | path |
   | --- | --- |
   | Blocks | `https://content.da.live/ritwiksrivastava/daeds/library/blocks.json` |

5. Make the new widget code available through your normal Git deployment or run
   `aem up` locally. Its authored URL identifies the widget; the Widget loader
   fetches its HTML, CSS, and JavaScript from the current code base, so it also
   works while testing a branch.
6. Reopen a document in EW. In Content mode, open the tools panel and select
   **Blocks**, or press `/`. Insert each example and switch to Layout mode.
   Select **Outline** to inspect blocks already on the page.

The configured JSON URL refers to the **EW sheet**, not this repository's
`library/blocks.json`. Do not point the panel at GitHub's HTML file viewer.
An empty panel usually means the sheet was not registered, a catalogue path
does not match an existing document, or the author cannot read that content.

## Images

Hero, Cards, and Columns use the supplied public boilerplate PNG. They author
it as an image, not a text link. EW/EDS may ingest or rewrite that image when
processing the document.

DM Image and DM Carousel use the supplied Dynamic Media delivery URL as a **link**, with its
link text used as alternative text by the existing assets plugin. The project
already registers this delivery host in
`scripts/aem-assets-plugin-support.js`, and `decorateMain()` converts supported
links to pictures before block decoration.

That conversion also supports delivery links inside Hero and Columns. Cards,
however, currently rebuilds pictures with the standard EDS image optimiser,
which rewrites the DM query parameters and can discard DM-specific picture
sources. Use ordinary images for Cards unless that implementation is updated.
DM Carousel shares the Carousel implementation and preserves the converted
Dynamic Media pictures. See [DM Carousel authoring](../blocks/dm-carousel/README.md).

For replacement images, provide one entry per position:

```text
block: cards
position: card 1
url: https://example.com/public-image.jpg
alt: A meaningful description of the image

block: hero
position: background
url: https://example.com/public-banner.jpg
alt: A meaningful description of the banner
```

Public image URLs, uploaded image files, and supported Dynamic Media delivery
URLs are suitable inputs. Specify the block and position, alt text, and any crop
or focal-point preference. Do not send an AEM author UI link or an expiring
authenticated preview URL as the image source.

See Adobe's [library setup documentation](https://www.aem.live/docs/ew/administering/set-up-library)
and [EW block authoring instructions](https://www.aem.live/docs/ew/authoring/editing-docs#adding-blocks).
