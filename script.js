window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// FAQ interativo
document.querySelectorAll('.faq-pergunta').forEach(pergunta => {
  pergunta.addEventListener('click', () => {
    const item = pergunta.parentElement;
    item.classList.toggle('ativo');
  });
});
