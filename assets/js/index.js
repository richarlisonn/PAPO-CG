document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menuOpcoes = document.getElementById('menu-opcoes');
  const menuLinks = document.querySelectorAll('.menu-opcoes a');
  const contentSections = document.querySelectorAll('.content-section');

  // Adiciona o atributo aria-expanded ao botão
  menuIcon.setAttribute('aria-expanded', 'false');

  menuIcon.addEventListener('click', function() {
    // Alterna a visibilidade do menu
    menuOpcoes.classList.toggle('menu-show');
    
    // Atualiza o atributo aria-expanded
    const isExpanded = menuOpcoes.classList.contains('menu-show');
    menuIcon.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  // Adiciona eventos de clique aos links do menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Previne o comportamento padrão do link
      
      // Remove a classe content-show de todas as seções
      contentSections.forEach(section => section.classList.remove('content-show'));
      
      // Adiciona a classe content-show à seção correspondente
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('content-show');
      }
    });
  });
});
