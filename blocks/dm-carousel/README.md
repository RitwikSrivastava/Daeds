# DM Carousel

DM Carousel has the same slide layout, responsive styles, previous/next buttons,
slide indicators, and scrolling behaviour as Carousel. Both use
`scripts/carousel.js` and `styles/carousel.css`.

## Authoring

Create a two-column table with a merged first row containing **DM Carousel**.
Each subsequent row is one slide:

| First cell | Second cell |
| --- | --- |
| A link to a Dynamic Media image delivery URL | Heading, description, and optional CTA link |

Insert the asset as a **link**, not a downloaded/uploaded image. Set the link
text to meaningful alt text rather than leaving it as the raw URL.
The first column must contain only the image link; CTA links belong in the
second column. Content is optional, so image-only slides can use one column.

Use [the authoring example](../../library/blocks/dm-carousel.html), which reuses
the supplied sample asset for two slides. Replace the second asset as needed.
The block name normalises to `dm-carousel`.

The existing `decorateMain()` pipeline converts supported delivery links into
responsive pictures before the carousel runs. DM Carousel preserves those
pictures and their delivery parameters; it does not apply the standard EDS
media-bus image optimiser.

Supported hosts are configured in `scripts/aem-assets-plugin-support.js`.
Currently these are `delivery-p66302-e574366.adobeaemcloud.com` and
`dmwoa-delivery.scene7.com`. Other delivery hosts need their matching image
handler registered there before use. Existing smart-crop configuration continues
to apply.

## EW library

Create a DA document at `/library/blocks/dm-carousel` and paste the rendered
example table into it. Add this row to the existing `/library/blocks` sheet:

| name | path |
| --- | --- |
| DM Carousel | `https://content.da.live/ritwiksrivastava/daeds/library/blocks/dm-carousel` |

Deploy the code through your normal Git workflow, then reload the EW editor.
The repository catalogue is a reference; it does not update DA automatically.

## Control labels

Both carousels use `scripts/placeholders.js` for optional labels from
`/placeholders.json`. Supported keys are `Carousel`, `Carousel Slide Controls`,
`Previous Slide`, `Next Slide`, `Show Slide`, and `Of`. Without a placeholders
sheet, the existing English labels are used.
