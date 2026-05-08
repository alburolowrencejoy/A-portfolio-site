# Lowrence Joy Alburo — Portfolio

This folder contains a personal portfolio website based on a responsive HTML template.

## What I changed
- Replaced template branding with `Lowrence Joy Alburo`.
- Updated homepage hero, about page, portfolio items, contact email, and skills to reflect the stack: HTML, CSS, Bootstrap, PHP, Laravel, Firebase, XAMPP, Flutter/Dart.
- Added a placeholder headshot: `img/profile.svg`.
- Replaced project thumbnails with lightweight SVG placeholders: `img/projects/placeholder-1.svg`.

## Local preview (Windows)
1. Open a simple local server (recommended) from the project root:

```powershell
# Using Python 3 (if installed)
python -m http.server 8000
# or using PowerShell's built-in server (PowerShell 6+)
# Start-Process "pwsh" -ArgumentList "-NoExit","-Command","python -m http.server 8000"
```

2. Open `http://localhost:8000/index.html` in your browser.

Note: The contact form (`contact_process.php`) requires a PHP-enabled server. To preview form behavior locally, install XAMPP and place this folder in the `htdocs` directory, or run PHP's built-in server:

```powershell
# From project root
php -S localhost:8000
```

## Optimize / Replace Images
To replace the SVG placeholders with real images, copy your optimized JPEG/PNG files into `img/projects/` and update `portfolio.html` (or keep filenames the same as originals: `projects-1.jpg`...).

To batch-optimize images locally, install ImageMagick and run (example):

```powershell
# Resize to max width 1200px and compress
magick mogrify -path img/projects/optimized -resize 1200x -quality 80 img/projects/*.{jpg,png}
```

Or use a Node tool like `sharp`:

```bash
npm init -y
npm install sharp
# create a small script to resize and compress images using sharp
```

## Deployment (GitHub Pages)
1. Create a new GitHub repository and push this project.
2. In the repo settings -> Pages, set source to the `main` branch and folder `/ (root)`.
3. Wait a minute; your site will be available at `https://<username>.github.io/<repo>/`.

If you want to host at the root domain (https://<username>.github.io), place the site files at the repository root of a repo named `<username>.github.io`.

## Next recommended steps
- Replace `img/projects/placeholder-1.svg` with real project images (optimized). 
- Add `CNAME` if you have a custom domain.
- Verify `contact_process.php` works on a PHP-enabled host (or replace with a serverless form service).

If you want, I can:
- Optimize existing JPGs programmatically here (requires installing ImageMagick or Python packages).
- Replace placeholders with images you upload.
- Push to a new GitHub repo and enable Pages for you.

