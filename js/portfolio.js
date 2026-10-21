(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

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

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('.project-grid').classList.toggle('is-filtered', button.dataset.filter !== 'all');
    let count = 0;
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) { count++; card.classList.add('visible'); }
    });
    document.querySelector('.project-count').textContent = `Showing ${count} project${count === 1 ? '' : 's'}`;
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

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
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
