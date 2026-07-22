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
