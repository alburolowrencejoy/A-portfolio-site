# Lowrence Joy Alburo — Portfolio

A responsive, dependency-free portfolio for web, mobile, and connected development work.

## Local development

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. No package installation or build is required. The site also works on GitHub Pages, including project detail URLs.

## Structure

- `index.html`: selected work, about, expertise, and contact.
- `project.html?project=smart-switch`: Smart Switch overview.
- `project.html?project=shareplate`: SharePlate overview.
- `project.html?project=ai-virtual-office`: AI Virtual Office overview.
- `css/portfolio.css`: responsive layout, hover effects, and reduced-motion support.
- `js/portfolio.js`: mobile navigation, project filtering, scroll reveals, and email copying.
- `js/project.js`: project descriptions and next-project navigation.
- `img/projects/`: project images copied from the owner-provided repositories.

## Project materials

Project descriptions live in `js/project.js`; keep the summaries in `index.html` in sync. Every detail page links to the supplied GitHub repository. No hosted demo URL was supplied.

Asset sources:

- Smart Switch: `promo/phone-img.jpg` from [smartpowerswitch](https://github.com/alburolowrencejoy/smartpowerswitch), revision `3b7d6e20e35625a8741731b9693df0e36250309f`. This is repository promotional artwork.
- SharePlate: `public/mock-food/prepared-meals.jpg` and `public/brand/app-icon.png` from [shareplate](https://github.com/alburolowrencejoy/shareplate). These are food and brand assets, not a UI screenshot.
- AI Virtual Office: `public/img/office-map.png` from [ai-virtual-office](https://github.com/alburolowrencejoy/ai-virtual-office). This is the actual office map asset.

## Contact

Contact buttons open the visitor’s email application. Copy email uses the browser Clipboard API with a helpful fallback when permission is unavailable. No message is sent or claimed to be delivered by the website. The old PHP mail handler is retained for reference but is not used by the new UI.

## Verification

Check all three project links, next/back navigation, all four filters, the mobile menu, copy email, and reduced-motion preferences. Validate narrow and wide viewports and ensure local assets return HTTP 200. Template blog, elements, documentation, and duplicate portfolio HTML pages have been removed; recover them from Git history if needed.
