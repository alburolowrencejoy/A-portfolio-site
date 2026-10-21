(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  const stackStrip = document.querySelector('.stack-strip');
  const stackTrack = stackStrip?.querySelector('.stack-track');
  const stackGroup = stackTrack?.querySelector('.stack-group');
  const stackToggle = stackStrip?.querySelector('.stack-toggle');
  if (stackGroup && stackToggle) {
    const duplicate = stackGroup.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    duplicate.setAttribute('inert', '');
    stackTrack.append(duplicate);
    stackStrip.classList.add('stack-marquee-ready');
    stackToggle.hidden = false;
    stackToggle.addEventListener('click', () => {
      const paused = stackStrip.classList.toggle('is-paused');
      stackToggle.setAttribute('aria-pressed', String(paused));
      stackToggle.setAttribute('aria-label', paused ? 'Resume stack animation' : 'Pause stack animation');
      stackToggle.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
    });
  }

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const closeMenu = () => {
    navigation?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);

  // Keep projects unobstructed while browsing; bring navigation back on upward scroll.
  const header = document.querySelector('.site-header');
  let previousScroll = window.scrollY;
  let headerFrame = 0;
  window.addEventListener('scroll', () => {
    if (headerFrame) return;
    headerFrame = requestAnimationFrame(() => {
      headerFrame = 0;
      const currentScroll = Math.max(0, window.scrollY);
      const menuOpen = menu?.getAttribute('aria-expanded') === 'true';
      if (currentScroll < 160 || menuOpen) header?.classList.remove('is-away');
      else if (Math.abs(currentScroll - previousScroll) > 6) {
        header?.classList.toggle('is-away', currentScroll > previousScroll);
      }
      if (Math.abs(currentScroll - previousScroll) > 6 || currentScroll < 160) previousScroll = currentScroll;
    });
  }, { passive: true });

  function createProjectCarousel(track) {
    if (!track) return null;
    const root = track.closest('.project-carousel');
    const controls = root.querySelector('.carousel-controls');
    const previous = root.querySelector('.carousel-previous');
    const next = root.querySelector('.carousel-next');
    const dots = root.querySelector('.carousel-dots');
    const status = root.querySelector('.carousel-status');
    let cards = [];
    let stops = [];
    let frame = 0;
    let lastScroll = track.scrollLeft;
    let direction = 1;

    const animateArrival = (card, order = 0) => {
      if (reducedMotion.matches || !card.animate) return;
      const bounds = track.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      card.getAnimations().forEach(animation => animation.cancel());
      card.animate([
        { transform: `translate3d(${direction * 22}px, 12px, 0) rotate(${direction * .65}deg) scale(.965)`, opacity: .65 },
        { transform: `translate3d(${-direction * 2}px, -2px, 0) rotate(${-direction * .08}deg) scale(1.004)`, opacity: 1, offset: .72 },
        { transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)', opacity: 1 }
      ], { duration: 760, delay: order * 55, easing: 'cubic-bezier(.16, 1, .3, 1)' });
      card.querySelectorAll('.project-meta, .project-title, .project-body>p, .tags, .project-cta').forEach((element, index) => {
        element.getAnimations().forEach(animation => animation.cancel());
        element.animate([
          { transform: 'translateY(9px)', opacity: .45 },
          { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 500, delay: 80 + order * 55 + index * 45, easing: 'cubic-bezier(.16, 1, .3, 1)' });
      });
      const image = card.querySelector('.project-image img');
      image?.getAnimations().forEach(animation => animation.cancel());
      image?.animate([
        { transform: 'scale(1.045)' },
        { transform: 'scale(1)' }
      ], { duration: 1000, easing: 'cubic-bezier(.16, 1, .3, 1)' });
    };

    const nearestStop = () => stops.reduce((best, position, index) =>
      Math.abs(position - track.scrollLeft) < Math.abs(stops[best] - track.scrollLeft) ? index : best, 0);

    const update = () => {
      const visible = [];
      const delta = track.scrollLeft - lastScroll;
      if (Math.abs(delta) > .5) direction = delta > 0 ? 1 : -1;
      lastScroll = track.scrollLeft;
      cards.forEach((card, index) => {
        // Use layout coordinates so the spring transforms never affect slide detection.
        const left = card.offsetLeft - track.scrollLeft;
        const overlap = Math.max(0, Math.min(left + card.offsetWidth, track.clientWidth) - Math.max(left, 0));
        const inView = overlap > card.offsetWidth * .5;
        const entering = inView && !card.classList.contains('is-inview');
        card.classList.toggle('is-inview', inView);
        if (entering) animateArrival(card);
        if (inView) visible.push(index);
      });
      const current = nearestStop();
      previous.disabled = current === 0 || stops.length < 2;
      next.disabled = current === stops.length - 1 || stops.length < 2;
      dots.querySelectorAll('button').forEach((dot, index) => {
        if (index === current) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      const first = (visible[0] ?? 0) + 1;
      const last = (visible.at(-1) ?? 0) + 1;
      const message = first === last ? `Project ${first} of ${cards.length}` : `Projects ${first}–${last} of ${cards.length}`;
      if (status.textContent !== message) status.textContent = message;
    };

    const moveTo = index => {
      const target = Math.max(0, Math.min(index, stops.length - 1));
      track.scrollTo({ left: stops[target] || 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    };

    const refresh = (reset = false) => {
      cards = Array.from(track.querySelectorAll('.project-card')).filter(card => !card.hidden);
      const origin = cards[0]?.offsetLeft || 0;
      const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
      stops = [];
      const fragment = document.createDocumentFragment();
      cards.forEach((card, index) => {
        const name = card.querySelector('h3').textContent;
        card.setAttribute('role', 'group');
        card.setAttribute('aria-roledescription', 'slide');
        card.setAttribute('aria-label', `${name}, ${index + 1} of ${cards.length}`);
        const position = Math.min(card.offsetLeft - origin, maximum);
        if (stops.length && Math.abs(position - stops.at(-1)) < 2) return;
        const stopIndex = stops.length;
        stops.push(position);
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Show projects starting with ${name}`);
        dot.setAttribute('aria-controls', 'project-track');
        dot.addEventListener('click', () => moveTo(stopIndex));
        fragment.append(dot);
      });
      dots.replaceChildren(fragment);
      dots.hidden = stops.length < 2;
      if (reset) track.scrollTo({ left: 0, behavior: 'instant' });
      update();
    };

    previous.addEventListener('click', () => moveTo(nearestStop() - 1));
    next.addEventListener('click', () => moveTo(nearestStop() + 1));
    track.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') moveTo(0);
      else if (event.key === 'End') moveTo(stops.length - 1);
      else moveTo(nearestStop() + (event.key === 'ArrowRight' ? 1 : -1));
    });
    track.addEventListener('scroll', () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; update(); });
    }, { passive: true });
    track.addEventListener('focusin', event => {
      const card = event.target.closest('.project-card');
      if (!card || card.hidden) return;
      const bounds = track.getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      if (rect.left < bounds.left || rect.right > bounds.right) {
        const origin = cards[0]?.offsetLeft || 0;
        track.scrollTo({ left: Math.min(card.offsetLeft - origin, track.scrollWidth - track.clientWidth), behavior: 'instant' });
      }
    });
    controls.hidden = false;
    refresh();
    document.documentElement.classList.add('carousel-ready');
    if ('IntersectionObserver' in window) {
      const entrance = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        cards.filter(card => card.classList.contains('is-inview')).forEach((card, index) => animateArrival(card, index));
        entrance.disconnect();
      }, { threshold: .2 });
      entrance.observe(track);
    }
    reducedMotion.addEventListener('change', event => {
      if (event.matches) track.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    });
    if ('ResizeObserver' in window) new ResizeObserver(() => refresh()).observe(track);
    else window.addEventListener('resize', () => refresh());
    return { refresh };
  }

  const carousel = createProjectCarousel(document.querySelector('#project-track'));

  function animateBento() {
    const grid = document.querySelector('.bento-grid');
    const code = grid?.querySelector('.code-window pre');
    if (!grid || !code) return;
    const original = code.innerHTML;
    const snippets = [
      "const experience = {\n  purpose: 'make life easier',\n  details: 'thoughtfully crafted',\n  builtFor: 'people'\n};",
      "const connection = {\n  devices: 'working together',\n  updates: 'in real time',\n  poweredBy: 'curiosity'\n};",
      "const nextIdea = {\n  design: 'clear and simple',\n  build: 'web and mobile',\n  goal: 'something useful'\n};"
    ];
    let snippet = 0;
    let count = snippets[0].length;
    let deleting = true;
    let timer;
    let inView = !('IntersectionObserver' in window);

    function render() {
      const lines = snippets[snippet].slice(0, count).split('\n');
      const fragment = document.createDocumentFragment();
      lines.forEach((line, index) => {
        const number = document.createElement('span');
        number.className = 'code-dim';
        number.textContent = String(index + 1).padStart(2, '0');
        fragment.append(number, ' ');
        // Build syntax highlights as text nodes, never executable HTML.
        line.split(/('.*?'|\bconst\b)/g).forEach(part => {
          const token = document.createElement('span');
          token.className = part === 'const' ? 'code-purple' : part.startsWith("'") ? 'code-mint' : '';
          token.textContent = part;
          fragment.append(token);
        });
        if (index < lines.length - 1) fragment.append('\n');
      });
      const cursor = document.createElement('span');
      cursor.className = 'code-cursor';
      fragment.append(cursor);
      code.replaceChildren(fragment);
    }

    const active = () => inView && !document.hidden && !reducedMotion.matches;
    function tick() {
      if (!active()) return;
      count += deleting ? -1 : 1;
      render();
      let delay = deleting ? 18 : 42;
      if (count === 0) {
        snippet = (snippet + 1) % snippets.length;
        deleting = false;
        delay = 350;
      } else if (count === snippets[snippet].length && !deleting) {
        deleting = true;
        delay = 2200;
      }
      timer = setTimeout(tick, delay);
    }
    function sync() {
      clearTimeout(timer);
      grid.classList.toggle('bento-animating', active());
      if (reducedMotion.matches) {
        code.innerHTML = original;
        snippet = 0;
        count = snippets[0].length;
        deleting = true;
      } else if (active()) {
        render();
        timer = setTimeout(tick, 1200);
      }
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        sync();
      }, { threshold: .05 }).observe(grid);
    }
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener('change', sync);
    sync();
  }
  animateBento();
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) { count++; card.classList.add('visible'); }
    });
    document.querySelector('.project-count').textContent = `Showing ${count} project${count === 1 ? '' : 's'}`;
    carousel?.refresh(true);
  }));

  document.querySelector('.copy-email')?.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText('alburo.lowrencejoy@dnsc.edu.ph');
      status.textContent = 'Email address copied!';
    } catch {
      status.textContent = 'Select the email address to open your email app, or copy it manually.';
    }
  });

  document.querySelector('.contact-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const name = fields.get('name').trim();
    const email = fields.get('email').trim();
    const subject = fields.get('subject').trim();
    const message = fields.get('message').trim();
    if (!name || !subject || message.length < 10) {
      form.querySelector('.form-status').textContent = 'Please add your name, a subject, and a message of at least 10 characters.';
      return;
    }
    const body = `Hi Lowrence,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`;
    const url = `mailto:alburo.lowrencejoy@dnsc.edu.ph?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('.form-status');
    const draftLink = document.createElement('a');
    draftLink.href = url;
    draftLink.textContent = 'Open email draft';
    draftLink.className = 'draft-link';
    status.replaceChildren('Your draft is ready. ', draftLink, ' to review and send it in your email app. You can also use the email address alongside this form.');
    draftLink.focus();
  });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveal = element => {
      element.style.setProperty('--reveal-delay', (Number(element.dataset.delay) || 0) + 'ms');
      element.classList.add('visible');
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target.matches('[data-reveal-group]')) {
        entry.target.querySelectorAll('.reveal').forEach(reveal);
      } else {
        reveal(entry.target);
      }
      observer.unobserve(entry.target);
    }), { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach(element => {
      if (!element.closest('[data-reveal-group]')) observer.observe(element);
    });
    document.querySelectorAll('[data-reveal-group]').forEach(element => observer.observe(element));
    document.documentElement.classList.add('motion-ready');
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        document.documentElement.classList.remove('motion-ready');
        observer.disconnect();
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const sections = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation?.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => sections.observe(section));
  }
})();
