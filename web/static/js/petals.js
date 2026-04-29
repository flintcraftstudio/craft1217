/* === Craft 12-17 petal system ===
 * Two-phase falling rose petals: intro cascade on first paint and
 * a celebratory burst when the subscribe form swaps to its success
 * state. The page is in motion exactly twice — on arrival and on
 * convert — and otherwise still.
 *
 * Activates on any page that contains #petal-field. The submission
 * burst listens for htmx:afterSwap on #subscribe-block — when the
 * swap removes the inner form (success state), we celebrate.
 */
(function () {
  var field = document.getElementById('petal-field');
  if (!field) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile  = window.matchMedia('(max-width: 480px)').matches;

  var COLOR_BLUSH = '#E59C99';
  var COLOR_ROSE  = '#EF5D7A';
  var COLOR_CORAL = '#FF7C8B';

  function pickColor() {
    var r = Math.random();
    if (r < 0.70) return COLOR_BLUSH;
    if (r < 0.90) return COLOR_ROSE;
    return COLOR_CORAL;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  // Three petal silhouettes, each with a single curved vein at ~50%
  // opacity. Per the design doc: "one curve fuller than the other"
  // — variants encode the "fuller" curve differently so random
  // rotation + random variant multiplies into apparent variety
  // without any one shape becoming recognizably the same petal.
  //   1. Round bloom — full teardrop, the dominant silhouette.
  //   2. Heart-tipped — a soft notch at the open end.
  //   3. Curled — asymmetric, leans, suggests a still-furled edge.
  var PETAL_VARIANTS = [
    {
      fill: 'M11 22 C4 21, 0 16, 2 9 C4 2, 9 0, 11 1 C13 0, 18 2, 20 9 C22 16, 18 21, 11 22 Z',
      vein: 'M11 20 C11 15, 11 9, 11 3'
    },
    {
      fill: 'M11 22 C4 21, 0 16, 2 9 C4 2, 8 1, 11 5 C14 1, 18 2, 20 9 C22 16, 18 21, 11 22 Z',
      vein: 'M11 20 C11 15, 11 10, 11 6'
    },
    {
      fill: 'M12 22 C5 20, 1 14, 4 7 C7 2, 13 0, 16 2 C21 6, 20 16, 15 19 C13 20, 12 21, 12 22 Z',
      vein: 'M7 17 C10 13, 13 9, 16 5'
    }
  ];

  function pickVariant() {
    return PETAL_VARIANTS[Math.floor(Math.random() * PETAL_VARIANTS.length)];
  }

  function petalSVG(color) {
    var v = pickVariant();
    return '<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">' +
           '<path d="' + v.fill + '" fill="' + color + '"/>' +
           '<path d="' + v.vein + '" stroke="' + color + '" stroke-width="0.5" fill="none" opacity="0.5" stroke-linecap="round"/>' +
           '</svg>';
  }

  function buildPetal() {
    var wrapper = document.createElement('div');
    wrapper.className = 'petal';
    var inner = document.createElement('div');
    inner.className = 'petal__inner';
    inner.innerHTML = petalSVG(pickColor());
    wrapper.appendChild(inner);
    return wrapper;
  }

  function spawnFallingPetal(opts) {
    opts = opts || {};
    var p = buildPetal();
    p.classList.add('petal--falling');

    var startX   = rand(0, 100);
    var driftX   = rand(-80, 80);
    var sway     = rand(20, 50);
    var startRot = rand(0, 360);
    var endRot   = startRot + rand(180, 540) * (Math.random() < 0.5 ? -1 : 1);
    var fallDur  = opts.fast ? rand(6, 10) : rand(14, 22);
    var swayDur  = rand(4, 7);
    var delay    = opts.delay !== undefined ? opts.delay : 0;
    var opacity  = opts.fast ? rand(0.6, 0.9) : rand(0.45, 0.75);
    var scale    = opts.fast ? rand(0.85, 1.3) : rand(0.7, 1.2);

    p.style.left = startX + 'vw';
    p.style.transform = 'scale(' + scale + ')';
    p.style.setProperty('--start-rot', startRot + 'deg');
    p.style.setProperty('--end-rot', endRot + 'deg');
    p.style.setProperty('--drift-x', driftX + 'px');
    p.style.setProperty('--sway', sway + 'px');
    p.style.setProperty('--fall-duration', fallDur + 's');
    p.style.setProperty('--sway-duration', swayDur + 's');
    p.style.setProperty('--fall-delay', delay + 's');
    p.style.setProperty('--target-opacity', opacity);

    field.appendChild(p);

    var lifetime = (delay + fallDur + 0.5) * 1000;
    setTimeout(function () { p.remove(); }, lifetime);
  }

  if (!reduced) {
    var introCount = mobile ? 6 : 10;
    for (var i = 0; i < introCount; i++) {
      spawnFallingPetal({ delay: rand(0, 8) });
    }
  }

  function celebrate() {
    if (reduced) return;
    var burstCount = mobile ? 10 : 18;
    for (var k = 0; k < burstCount; k++) {
      spawnFallingPetal({ fast: true, delay: rand(0, 1) });
    }
  }

  // The subscribe form is htmx-driven and swaps #subscribe-block via
  // outerHTML. After a successful submit, the form is gone and the
  // block holds only the coral confirmation paragraph. Detect that
  // transition and fire the celebration burst exactly once.
  var celebrated = false;
  document.body.addEventListener('htmx:afterSwap', function (e) {
    if (celebrated) return;
    var swapped = e.detail && e.detail.target;
    if (!swapped || swapped.id !== 'subscribe-block') return;
    var live = document.getElementById('subscribe-block');
    if (live && !live.querySelector('form')) {
      celebrated = true;
      celebrate();
    }
  });
})();
