# Lowrence Joy Alburo — Portfolio

A responsive, dependency-free portfolio for web, mobile, and connected development work.

The hero and About sections use `img/banner/portrait-enhanced.png`, a warmer, color-balanced AI-retouched version of the original portrait with transparency preserved. The original `img/banner/home-left-1.png` remains unchanged. Portrait desaturation filters have been removed so the photo displays in full color.

## Local development

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. No package installation or build is required. Relative links work on GitHub Pages, including project detail URLs.

## Projects

Project details use `project.html?project=<slug>`:

| Project | Slug | Tools |
| --- | --- | --- |
| Smart Switch | `smart-switch` | Flutter, Dart, Firebase, ESP32 |
| SharePlate | `shareplate` | Next.js, React, TypeScript, Supabase/PostgreSQL, Tailwind CSS, React Native/Expo |
| AI Virtual Office | `ai-virtual-office` | Laravel, PHP, Reverb, AI agents |
| Career Connect | `career-connect` | Laravel, PHP |
| ICSA Mobile App | `icsa-mobile-app` | Flutter |
| Javank | `javank` | Java |
| Sogesyon | `sogesyon` | HTML, CSS, SQL |

Sogesyon is a mental-health community app with emotion tracking and discussion forums, as described by the project owner. Project data and screenshot captions live in `js/project.js`; homepage cards live in `index.html`.

The latest-project stack strip, expertise cards, About copy, and grouped toolbox reflect the technologies in the supplied project repositories. The toolbox groups web/interfaces, mobile, backend/data, and real-time/systems. Existing Flutter, Laravel, Firebase, Java, and IoT tools remain included; no proficiency percentages or unsupported experience claims are added.

## Supplied screenshots

These images are exact, unedited copies from the owner’s `asset.rar` and `as.rar` uploads:

| Archive file | Portfolio file | View |
| --- | --- | --- |
| `samrtswitch.png` | `img/projects/smart-switch-signin.png` | Smart Switch web sign-in |
| `smartswitch.png` | `img/projects/smart-switch-dashboard.png` | Smart Switch web dashboard |
| `shareplate.png` | `img/projects/shareplate-mobile.png` | SharePlate mobile donations |
| `ai.png` | `img/projects/ai-office-signin.png` | AI Virtual Office sign-in |
| `aii.png` | `img/projects/ai-office-dashboard.png` | AI Virtual Office dashboard |
| `aiii.png` | `img/projects/ai-office-live.png` | AI Virtual Office live office |
| `careeer.png` | `img/projects/career-connect-home.png` | Career Connect signed out |
| `careerrr.png` | `img/projects/career-connect-signedin.png` | Career Connect signed in |
| `sogesyon.jpg` | `img/projects/sogesyon-signin.jpg` | Sogesyon sign-in |
| `desktop shareplate.png` | `img/projects/shareplate-home.png` | SharePlate desktop homepage |
| `shareplate desktop.png` | `img/projects/shareplate-listings.png` | SharePlate desktop food listings |
| `mobile smartswitch.jpg` | `img/projects/smart-switch-mobile-signin.jpg` | Smart Switch mobile sign-in |

The second archive supplies SharePlate’s desktop views and Smart Switch’s mobile sign-in view. SharePlate’s desktop homepage is its cover, with desktop listings and mobile donations in its gallery. Smart Switch’s gallery includes its web dashboard, web sign-in, and mobile sign-in. ICSA Mobile App retains its original cover artwork, labeled as such. Older repository images remain available on disk but are no longer used by the updated project cards and details.

Project covers use landing or sign-in screens rather than dashboards: Smart Switch web sign-in, SharePlate desktop homepage, AI Virtual Office owner landing/sign-in, Career Connect landing, and Sogesyon sign-in. Dashboard and office screenshots remain accessible in the detail-page galleries.

Javank now uses `img/projects/javank-signin-enhanced.png`, a 1648 × 954 AI-enhanced reconstruction of the owner’s small ATM login screenshot. It preserves the card-number/PIN layout and sign-in, clear, and sign-up controls. The cover and gallery identify it as an enhanced preview, rather than an untouched application capture. The old generic cover is retained on disk but is no longer displayed for Javank.

## Typography

Headings use Manrope; body text, navigation, controls, and forms use Inter. Both variable fonts are self-hosted as Latin-subset WOFF2 files (about 73 KB combined), loaded with `font-display: swap` and system fallbacks. Their source packages are `@fontsource-variable/inter@5.3.0` and `@fontsource-variable/manrope@5.3.0`; the SIL Open Font License files are retained under `fonts/inter/OFL.txt` and `fonts/manrope/OFL.txt`. No third-party font request or package installation is needed to run the site. `css/typography.css` contains the shared type scale for the homepage and project pages.

## Interactions

- Dark, mint-accented layout inspired by the supplied visual reference, including a floating navigation bar and a bento expertise grid.
- The original `img/logo-white.png` logo is used in navigation and footers; `img/favicon.png` restores the original favicon. `img/my-logo.png` is retained as the touch icon.
- Bento cards enter from left, right, and below using CSS transforms and an IntersectionObserver, with staggered delays. Reduced-motion preferences show the final layout immediately. Project and other section reveals use the same progressive enhancement; content remains available without JavaScript.
- Six category filters cover all seven projects.
- Project cards use a consistent two-column component (one column on mobile), a common screenshot ratio, aligned content and tags, and an explicit View project link. `css/project-cards.css` adds clipped decorative corner rays, wave rings, and an animated edge highlight on hover or keyboard focus. The decorations ignore pointer events and respect reduced-motion preferences.
- `css/atmosphere.css` provides one shared dark-green canvas across the homepage and project pages, with faint grid lines, edge rays, and gently drifting wave rings. The background is decorative, cannot intercept input, and becomes static under reduced motion.
- Project galleries open the original screenshots in a native modal dialog. Use previous/next buttons or arrow keys to browse; Escape or Close dismisses the viewer and returns keyboard focus.
- Every project has a detail view and next-project navigation. The three supplied repository URLs are linked directly; projects without known URLs offer email contact instead of guessed links.
- Contact opens the visitor’s email application. Copy email uses the Clipboard API with fallback guidance. No message delivery is claimed by the site.
- The contact form validates name, email, subject, and message, then creates an explicit link to a prefilled `mailto:` draft. The visitor opens the draft, reviews it, and sends it in their email app. No backend, credentials, or form service is required; creating the draft never navigates away from the portfolio.
- Navigation, scroll effects, mobile layouts, and reduced-motion preferences are handled without external libraries.

## Verification

Check all seven project links, the complete next-project cycle, six filters, screenshot galleries and keyboard controls, mobile navigation, email copying, and reduced motion. Validate narrow and wide viewports and confirm images load successfully. Template blog, documentation, elements, and duplicate HTML pages were removed; they remain recoverable from Git history.
