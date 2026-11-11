// CTA_URL: 未設定。実URL確定後はindex.htmlの2つのCTA hrefを差し替える。
document.querySelectorAll('.image-cta').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') !== '#') return;
    event.preventDefault();
    document.querySelector('.notice').textContent = 'リンク先は未設定です。Museのチャットに「Codexを使って」と入力してください。';
  });
});
