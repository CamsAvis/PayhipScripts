window.addEventListener('DOMContentLoaded', () => {
    // recommended creators
    const selector = `
      div[data-section-key="testimonial-image-columns"] 
      .column-item-wrapper:has(.image-row-contents):has(.text-row-contents)
    `;

    const wrappers = document.querySelectorAll(selector);
    if (wrappers) {
      wrappers.forEach(wrapper => {
        const image = wrapper.querySelector(".image-row-contents img");
        const link = wrapper.querySelectorAll(".text-row-contents a")[0];

        if (!image || !link || !link.href) {
          return;
        }

        image.addEventListener("mouseenter", () => image.style.scale = "105%");
        image.addEventListener("mouseleave", () => image.style.scale = "100%");
        image.addEventListener("click", () => window.open(link.href, '_blank'));
      })
    }

    // Discord button
    const button = document.createElement('div');
    button.id = 'discord-button';
    button.title = 'Join my Discord!';

    const img = document.createElement('img');
    img.src = 'https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000';
    img.alt = 'Discord';

    button.appendChild(img);
    document.body.appendChild(button);

    button.addEventListener('click', () => {
      window.open('https://discord.com/invite/RCtpFfV8HY', '_blank');
    });

    // const cardsWithLinks = document.querySelectorAll(".card:has(a) .card__content");
    document.querySelectorAll(".card__content:has(a)").forEach(card => {
      const link = card.querySelector("a");
      card.addEventListener('click', () => {
        if (link && link.href) {
          window.location.href = link.href;
        }
      })
    })

    // fix card hover
    document.querySelectorAll(".card:has(a)").forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.035)';
        card.style.transition = 'transform 0.2s cubic-bezier(.19,1,.22,1)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = '';
      });
    });

    // parallax
    const bannerImg = document.querySelector('.banner__media.media img');
    if (bannerImg) {
      window.addEventListener('scroll', () => {
        const maxTranslate = window.innerHeight * 0.15; // 20vh in pixels
        const scrollMax = window.innerHeight; // or document.body.scrollHeight for full page
        const percent = Math.min(window.scrollY / scrollMax, 1);
        const translateY = percent * maxTranslate;
        bannerImg.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    }

    document.querySelectorAll('.btn-primary').forEach(btn => {
      const minWidth = 300;
      const maxWidth = 600;
      const minDuration = 300;
      const maxDuration = 500;

      const updateTransition = () => {
        const width = btn.offsetWidth;
        // Clamp width between minWidth and maxWidth
        const clamped = Math.max(minWidth, Math.min(width, maxWidth));
        // Linear interpolation: minDuration at minWidth, maxDuration at maxWidth
        const duration = minDuration + ((clamped - minWidth) / (maxWidth - minWidth)) * (maxDuration - minDuration);
        btn.style.setProperty('--btn-primary-transition', `${duration}ms`);
      };
      updateTransition();
      window.addEventListener('resize', updateTransition);
    });

    // Patch the style to use the variable for transition
    const styleSheet = Array.from(document.styleSheets).find(s => {
      try { return s.ownerNode && s.ownerNode.textContent.includes('.btn-primary::before'); }
      catch { return false; }
    });
    if (styleSheet) {
      for (const rule of styleSheet.cssRules) {
        if (rule.selectorText === '.btn-primary::before') {
          rule.style.transition = 'transform var(--btn-primary-transition,250ms), color 250ms';
        }
      }
    }

    // Add back to top button
    $("<a href='#'>")
      .html(`<span class="material-symbols-outlined">arrow_upward_alt</span>`)
      .addClass("back-to-top-button")
      .appendTo(document.body);
  });