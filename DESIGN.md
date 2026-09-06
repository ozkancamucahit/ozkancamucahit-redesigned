# Mucahito design direction

## Thesis

Mucahito is a quiet, editorial field notebook for software work. It refuses the
default blog hero and puts the writing index, reading rhythm, and author voice
first.

## Visual world

- **Mode:** Read
- **Palette:** charcoal `#17100e`, warm paper `#f7f2ed`, sunset orange
  `#f28b4b`, and muted clay metadata.
- **Typography:** system sans for readable prose and a monospace utility face
  for dates, tags, and status signals.
- **Composition:** generous editorial headline, a fine rule, then a numbered
  list of writing. Cards are avoided in favor of a continuous index.
- **Dark mode:** dark charcoal is the default reading environment; orange
  carries links, focus, status, and code accents without gradients or glow.

## Responsive rules

The two-column introduction collapses into a linear reading order on narrow
screens. Post metadata stays close to the title; tags move below the excerpt so
long Turkish and English labels never compress the title column.

## Content rules

The homepage shows the six most recent entries for the active locale. The blog
plugin paginates at six posts per page. New posts belong in `blog/` for Turkish
and in `i18n/en/docusaurus-plugin-content-blog/` for English translations.
