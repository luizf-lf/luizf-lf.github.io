// Script para menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Script para o ano atual no rodapé
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll para links da navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Fecha o menu mobile se estiver aberto e for um link de navegação interno
      if (!mobileMenu.classList.contains('hidden') && targetId !== '#') {
        mobileMenu.classList.add('hidden');
      }

      targetElement.scrollIntoView({
        behavior: 'smooth',
      });

      // Atualiza a classe 'active' no link clicado
      document.querySelectorAll('nav a.nav-link').forEach((link) => {
        link.classList.remove('active');
      });
      if (!this.classList.contains('block')) {
        // Não aplica 'active' para links de menu mobile que são block
        this.classList.add('active');
      } else {
        // Tenta encontrar o link correspondente no menu principal
        const desktopLink = document.querySelector(`nav a.nav-link[href="${targetId}"]`);
        if (desktopLink) desktopLink.classList.add('active');
      }
    }
  });
});

// Atualiza link ativo no scroll
const sections = document.querySelectorAll('main > section, main#home'); // Inclui a seção home
const navLinks = document.querySelectorAll('nav a.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
  // Se nenhum estiver ativo (topo da página antes da primeira seção), ativa o 'Início'
  if (!current && pageYOffset < sections[0]?.offsetTop) {
    const homeLink = document.querySelector('nav a.nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
});
