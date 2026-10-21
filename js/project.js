(() => {
  'use strict';
  const projects = {
    "smart-switch": {
      "name": "Smart Switch",
      "repository": "smartpowerswitch",
      "category": "WEB & MOBILE / IoT",
      "summary": "Campus energy monitoring across web and mobile, connected to real-world devices.",
      "image": "smart-switch-signin.png",
      "alt": "Smart Switch web landing and sign-in page",
      "overview": "Smart Switch is a web-and-mobile IoT energy monitoring and utility control system for Davao del Norte State College. Flutter and Firebase Realtime Database connect the application to ESP32 devices and PZEM-004T energy meters across campus buildings.",
      "focus": "The web experience includes a dedicated sign-in screen and a campus dashboard with energy usage, monthly cost, device status, building consumption charts, building load, and recent usage. A compact mobile dashboard brings these readings into a smaller layout. Device management, maps, analytics, automation, and role-based administration support the wider workflow.",
      "tags": [
        "Web & mobile",
        "Flutter",
        "Dart",
        "Firebase",
        "ESP32",
        "IoT"
      ],
      "note": "Original web and mobile screenshots supplied by the project owner.",
      "next": "shareplate",
      "nextName": "SharePlate",
      "gallery": [
        {
          "image": "smart-switch-dashboard.png",
          "alt": "Smart Switch web dashboard",
          "caption": "Web · Campus energy dashboard"
        },
        {
          "image": "smart-switch-signin.png",
          "alt": "Smart Switch web sign-in page",
          "caption": "Web · Sign in"
        },
        {
          "image": "smart-switch-mobile-signin.jpg",
          "alt": "Smart Switch mobile sign-in screen",
          "caption": "Mobile · Sign in"
        }
      ]
    },
    "shareplate": {
      "name": "SharePlate",
      "repository": "shareplate",
      "category": "FULL-STACK WEB / COMMUNITY",
      "summary": "Rescuing surplus food by connecting donors with verified community kitchens.",
      "image": "shareplate-home.png",
      "alt": "SharePlate desktop homepage with Rescue Every Plate heading and food-sharing introduction",
      "overview": "SharePlate is a community food rescue platform built with Next.js, TypeScript, Tailwind CSS, and Supabase. It connects surplus-food donors with verified recipient organizations, with an Expo mobile application sharing the same backend.",
      "focus": "The platform supports organization verification, food listings, claims, pickup and distribution tracking, notifications, and impact reporting. AI-assisted listing drafts help donors get started, while database rules and role-based dashboards support the donation lifecycle.",
      "tags": [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "React Native",
        "Expo"
      ],
      "note": "Original desktop and mobile screenshots supplied by the project owner.",
      "next": "ai-virtual-office",
      "nextName": "AI Virtual Office",
      "gallery": [
        {
          "image": "shareplate-home.png",
          "alt": "SharePlate desktop homepage",
          "caption": "Web · Rescue Every Plate homepage"
        },
        {
          "image": "shareplate-listings.png",
          "alt": "SharePlate desktop Find Food page showing search, filters, donation cards, and pickup deadlines",
          "caption": "Web · Find Food listings & filters"
        },
        {
          "image": "shareplate-mobile.png",
          "alt": "SharePlate mobile donation cards with pickup deadlines",
          "caption": "Mobile · Community food donations"
        }
      ]
    },
    "ai-virtual-office": {
      "name": "AI Virtual Office",
      "repository": "ai-virtual-office",
      "category": "AI / DEVELOPER TOOLS",
      "summary": "An AI development workforce, brought to life in a real-time 2D office.",
      "image": "ai-office-signin.png",
      "alt": "AI Virtual Office landing page introducing the AI software company and owner sign-in",
      "overview": "AI Virtual Office is a Laravel-based MVP for managing an AI development company. A live 2D office makes agent activity visible, while the owner oversees projects, tasks, approvals, and model usage.",
      "focus": "The application combines queued agent jobs, an AI gateway with model routing and budgets, approval gates, code review, and build workflows. Laravel Reverb delivers real-time office updates, with deterministic code driving agent movement and state.",
      "tags": [
        "Laravel",
        "PHP",
        "Reverb",
        "WebSockets",
        "AI agents"
      ],
      "note": "Original application screenshots supplied by the project owner.",
      "next": "career-connect",
      "nextName": "Career Connect",
      "gallery": [
        {
          "image": "ai-office-live.png",
          "alt": "AI Virtual Office live 2D office and agent team",
          "caption": "Live office · Agents, tasks & activity"
        },
        {
          "image": "ai-office-dashboard.png",
          "alt": "AI Virtual Office management dashboard",
          "caption": "Dashboard · Projects, approvals & activity"
        },
        {
          "image": "ai-office-signin.png",
          "alt": "AI Virtual Office owner sign-in",
          "caption": "Owner · Sign in"
        }
      ]
    },
    "career-connect": {
      "name": "Career Connect",
      "category": "WEB DEVELOPMENT",
      "summary": "A career platform built with Laravel and PHP.",
      "image": "career-connect-home.png",
      "alt": "Career Connect landing page with job and location search",
      "overview": "Career Connect is the Laravel and PHP career platform from my original portfolio.",
      "focus": "This project brings together my web-development work with Laravel and PHP. Contact me for a walkthrough or more information about its implementation.",
      "tags": [
        "Laravel",
        "PHP",
        "Web development"
      ],
      "note": "Original application screenshots supplied by the project owner. No public repository or demo URL has been supplied.",
      "next": "icsa-mobile-app",
      "nextName": "ICSA Mobile App",
      "gallery": [
        {
          "image": "career-connect-home.png",
          "alt": "Career Connect landing page while signed out",
          "caption": "Web · Job search & sign up"
        },
        {
          "image": "career-connect-signedin.png",
          "alt": "Career Connect landing page while signed in",
          "caption": "Web · Signed-in search & popular searches"
        }
      ]
    },
    "icsa-mobile-app": {
      "name": "ICSA Mobile App",
      "category": "MOBILE DEVELOPMENT",
      "summary": "A Flutter mobile application for school services.",
      "image": "projects-3.jpg",
      "alt": "Original ICSA Mobile App portfolio cover artwork",
      "overview": "ICSA Mobile App is the Flutter school-services application from my original portfolio.",
      "focus": "This project represents my mobile-development work using Flutter for school services. Get in touch to learn more about the app and its implementation.",
      "tags": [
        "Flutter",
        "Mobile app",
        "School services"
      ],
      "note": "Original portfolio cover artwork, not an application screenshot. No public repository or demo URL has been supplied.",
      "next": "javank",
      "nextName": "Javank"
    },
    "javank": {
      "name": "Javank",
      "category": "SYSTEM DEVELOPMENT",
      "summary": "A Java banking system project.",
      "image": "javank-signin-enhanced.png",
      "alt": "Enhanced reconstruction of the Javank ATM login screen with Card No, PIN, Sign In, Clear, and Sign Up controls",
      "overview": "Javank is the Java banking system project from my original portfolio.",
      "focus": "This project represents my work in Java and system development. Contact me for further details or a walkthrough.",
      "tags": [
        "Java",
        "Banking system",
        "System development"
      ],
      "note": "AI-enhanced reconstruction of the original low-resolution screenshot supplied by the project owner. No public repository or demo URL has been supplied.",
      "gallery": [
        {
          "image": "javank-signin-enhanced.png",
          "alt": "Enhanced Javank ATM login preview",
          "caption": "Desktop · ATM sign in (enhanced preview)"
        }
      ],
      "next": "sogesyon",
      "nextName": "Sogesyon"
    },
    "sogesyon": {
      "name": "Sogesyon",
      "category": "WEB / MENTAL-HEALTH COMMUNITY",
      "summary": "A community space for tracking emotions and discussing mental health.",
      "image": "sogesyon-signin.jpg",
      "alt": "Sogesyon community application sign-in page with a pink background and illustrated community scene",
      "overview": "Sogesyon is a mental-health community application built with HTML, CSS, and SQL. It brings emotion tracking and community forums together in one place.",
      "focus": "Users can keep track of their emotions and take part in forums about mental health. The project focuses on personal reflection and community discussion.",
      "tags": [
        "HTML",
        "CSS",
        "SQL",
        "Emotion tracking",
        "Community forums"
      ],
      "note": "Project description and original sign-in screenshot supplied by the project owner. No public repository or demo URL has been supplied.",
      "gallery": [
        {
          "image": "sogesyon-signin.jpg",
          "alt": "Sogesyon sign-in page",
          "caption": "Web · Community sign in"
        }
      ],
      "next": "smart-switch",
      "nextName": "Smart Switch"
    }
  };

  const slug = new URLSearchParams(location.search).get('project');
  const project = Object.hasOwn(projects, slug) ? projects[slug] : null;
  if (!project) {
    const chooser = document.querySelector('.detail-error');
    chooser.querySelector('p').textContent = 'Choose a project to see its overview, images, and available links.';
    chooser.querySelectorAll('a').forEach(link => link.remove());
    const links = document.createElement('div');
    links.className = 'project-chooser';
    Object.entries(projects).forEach(([key, entry]) => {
      const link = document.createElement('a');
      link.className = 'button';
      link.href = 'project.html?project=' + key;
      link.textContent = entry.name + ' ↗';
      links.append(link);
    });
    chooser.append(links);
    if (slug) {
      document.title = 'Project not found — Lowrence Joy Alburo';
      document.querySelector('.detail-error h1').textContent = 'Project not found.';
    }
    return;
  }
  document.title = project.name + ' — Lowrence Joy Alburo';
  document.querySelector('meta[name="description"]').content = project.summary;
  const gallery = project.gallery || [];
  const repositoryLink = project.repository
    ? '<p>See the source code, features, and setup guide on GitHub.</p><a class="button" href="https://github.com/alburolowrencejoy/' + project.repository + '" target="_blank" rel="noopener noreferrer">View repository ↗</a>'
    : '<p>Get in touch for a walkthrough and more information about this project.</p>';
  const screenshotGallery = gallery.length ? '<section class="screenshot-section" aria-labelledby="gallery-title"><p class="eyebrow">A CLOSER LOOK</p><h2 id="gallery-title">Project screenshots</h2><p class="gallery-hint">Select a screenshot to view it at full size.</p><div class="screenshot-grid">' + gallery.map((shot, index) => '<button class="screenshot-card" data-screenshot="' + index + '" aria-label="Enlarge ' + shot.caption + '"><img src="img/projects/' + shot.image + '" alt="' + shot.alt + '" loading="lazy"><span>' + shot.caption + ' <span aria-hidden="true">↗</span></span></button>').join('') + '</div></section>' : '';
  document.querySelector('#project-content').innerHTML =
    '<div class="detail-heading"><p class="eyebrow">SELECTED PROJECT / ' + project.category + '</p><h1>' + project.name + '</h1><p class="detail-lead">' + project.summary + '</p><div class="tags">' + project.tags.map(tag => '<span>' + tag + '</span>').join('') + '</div></div>' +
    '<img class="detail-image" src="img/projects/' + project.image + '" alt="' + project.alt + '">' +
    '<div class="detail-columns"><div><h2>The project</h2><p>' + project.overview + '</p><h2>The focus</h2><p>' + project.focus + '</p></div><aside class="detail-sidebar"><h3>Explore the project</h3>' + repositoryLink + '<a class="detail-contact text-link" href="mailto:alburo.lowrencejoy@dnsc.edu.ph?subject=' + encodeURIComponent("Let's talk about " + project.name) + '">Ask about this project ↗</a><p class="detail-note">' + project.note + '</p></aside></div>' + screenshotGallery +
    '<a class="next-project" href="project.html?project=' + project.next + '"><span><small>NEXT PROJECT</small>' + project.nextName + '</span><span>↗</span></a>';

  if (!gallery.length) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'screenshot-dialog';
  dialog.setAttribute('aria-label', project.name + ' screenshot viewer');
  dialog.innerHTML = '<div class="viewer-toolbar"><p id="viewer-caption"></p><button class="viewer-close" aria-label="Close screenshot viewer">Close ✕</button></div><img class="viewer-image" alt=""><div class="viewer-controls"><button class="viewer-previous" aria-label="Previous screenshot">← Previous</button><span class="viewer-count" aria-live="polite"></span><button class="viewer-next" aria-label="Next screenshot">Next →</button></div>';
  document.body.append(dialog);
  let current = 0;
  let opener = null;
  const display = index => {
    current = (index + gallery.length) % gallery.length;
    const shot = gallery[current];
    dialog.querySelector('.viewer-image').src = 'img/projects/' + shot.image;
    dialog.querySelector('.viewer-image').alt = shot.alt;
    dialog.querySelector('#viewer-caption').textContent = shot.caption;
    dialog.querySelector('.viewer-count').textContent = (current + 1) + ' / ' + gallery.length;
  };
  document.querySelectorAll('[data-screenshot]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    display(Number(button.dataset.screenshot));
    dialog.showModal();
    document.body.classList.add('viewer-open');
    dialog.querySelector('.viewer-close').focus();
  }));
  dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    opener?.focus();
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.querySelector('.viewer-previous').addEventListener('click', () => display(current - 1));
  dialog.querySelector('.viewer-next').addEventListener('click', () => display(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); display(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); display(current + 1); }
  });
  if (gallery.length === 1) {
    dialog.querySelector('.viewer-previous').disabled = true;
    dialog.querySelector('.viewer-next').disabled = true;
  }
})();
