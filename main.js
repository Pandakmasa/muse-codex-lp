(() => {
  const notice = document.querySelector('.notice');
  document.querySelectorAll('.image-cta').forEach((cta) => {
    cta.addEventListener('click', (event) => {
      event.preventDefault();
      if (notice) notice.textContent = 'リンク先は未設定です。実URLを入れてください。';
      cta.focus();
    });
  });
})();
