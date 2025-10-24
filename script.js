window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');
  const cloud = document.getElementById('cloud');
  const words = document.querySelectorAll('.word');

  let delay = 400;
  words.forEach(word => {
    setTimeout(() => word.classList.add('show'), delay);
    delay += 100;
  });

  setTimeout(() => {
    intro.classList.add('fade-out');
    document.body.style.backgroundColor = '#f8f4ff';
  }, delay + 800);

  setTimeout(() => {
    cloud.classList.add('visible');
    main.classList.add('visible');
  }, delay + 2500);
});
