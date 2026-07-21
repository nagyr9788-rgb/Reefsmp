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
