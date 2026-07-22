// ReefMC — shared script for all pages
function rmcCopyIP() {
  var el = document.getElementById('rmc-ip-text');
  var btn = document.getElementById('rmc-copy-btn');
  if (!el || !btn) return;
  var text = el.innerText;
  navigator.clipboard.writeText(text).then(function () {
    var original = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(function () { btn.innerText = original; }, 1500);
  });
}

// Copies the IP and shows the "IP Copied!" modal (used by the hero stat button)
function rmcCopyIPModal() {
  var text = 'play.reefmc.fun';
  navigator.clipboard.writeText(text).then(function () {
    var overlay = document.getElementById('rmc-modal-overlay');
    if (overlay) overlay.classList.add('rmc-modal-visible');
  });
}

function rmcCloseModal() {
  var overlay = document.getElementById('rmc-modal-overlay');
  if (overlay) overlay.classList.remove('rmc-modal-visible');
}

// Close modal on background click or Escape key
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'rmc-modal-overlay') rmcCloseModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') rmcCloseModal();
});

// Live player count (home page hero stat)
(function () {
  var el = document.getElementById('rmc-player-count');
  if (!el) return;
  fetch('https://api.mcsrvstat.us/2/play.reefmc.fun')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data && data.online && data.players) {
        el.textContent = data.players.online + ' ONLINE';
      } else {
        el.textContent = 'OFFLINE';
      }
    })
    .catch(function () {
      el.textContent = 'PLAY.REEFMC.FUN';
    });
})();
