// ─── Escena pixel: el cuarto de Lisandro y el sótano ────────────────────────
// Todo se dibuja en un canvas de baja resolución que el CSS escala sin suavizado.

(() => {
  const C = {
    ink: '#221a26', plum: '#5e3a2e', red: '#b8574a', orange: '#f08a4b', sun: '#ffc477', lime: '#b9d97a',
    green: '#6f9a5a', teal: '#4f7f7a', night: '#4b2e48', paper: '#f5e6cc', fog: '#c7a99b', slate: '#8a6b7a',
    steel: '#3e2b3d', wood: '#8b5a3c', woodL: '#a8714a', glow: '#58344f', glow2: '#663d58', dot: '#53324e',
    brick: '#2c2130', ice: '#ffe2a8',
    skin: '#f0c7a4', skinD: '#d49a7a', hair: '#3b2620', hairL: '#5c3b2b', brow: '#2a1a17',
    tee: '#141016', teeL: '#2a2229', cat: '#f7efe3',
  };

  // Personaje 18x23, de frente: pelo castaño con volumen, lentes, remera negra manga corta
  const BODY = [
    '.....HHHHHHH......',
    '...HHHhhHHHHHH....',
    '..HHHhhHHHHHHHHH..',
    '.HHHhHHHHHHHHHHHH.',
    '.HHHHHHHHHHHhHHHH.',
    '.HSBBBSSSSSSBBBSH.',
    '.HSSSSSSSSSSSSSSH.',
    '.HSGGGGGSSGGGGGSH.',
    '.HSGLLLGGGGLLLGSH.',
    '.HSGLLLGSSGLLLGSH.',
    '.HSGGGGGSSGGGGGSH.',
    '..HSSSSSSDSSSSSH..',
    '..HSSSSSMMSSSSSH..',
    '...SSSSSSSSSSSS...',
    '....DSSSSSSSSD....',
    '......DDDDDD......',
    '..TTTTTTDDTTTTTT..',
    '.TTTTTTTTTTTTTTTT.',
    'TTTTTTTTTTTTTTTTTT',
    'TTtTTTTTTTTTTTTtTT',
    'SSTTTTTTTTTTTTTTSS',
    'SSTTTTTTTTTTTTTTSS',
    'SSTTTTTTTTTTTTTTSS',
  ];
  const MAP = {
    K: C.ink, S: C.skin, D: C.skinD, G: C.ink, W: C.paper, M: '#b5655a',
    H: C.hair, h: C.hairL, B: C.brow, T: C.tee, t: C.teeL, L: '#fbe6d2',
  };
  // Gatito blanco con manchas negras, acurrucado
  const CAT = [
    '..k.k...........',
    '.kwkkw...kkkw...',
    '.wwwwww.wkkwwww.',
    'nwkwkwwwwwwwwwkw',
    'wwwwwwwwwwwkkwww',
    '.wwwwwwwwwwkkwwk',
    '.kkwwwwwwwwwwwkk',
    '..kkkkwwwwwwwkk.',
  ];
  const CMAP = { w: C.cat, k: C.ink, n: '#e8a0a0' };

  const cv = document.getElementById('scene');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const wrap = document.getElementById('scene-wrap');
  const note = document.getElementById('scene-note');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W, H, S, mode, deskX, floorY;
  const st = { t: 0, look: 0, blink: 0, action: 'type', actionT: 0, wave: 0, surprise: 0, idle: 0 };
  const packets = [];
  const lights = [];

  const px = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x | 0, y | 0, w, h); };
  function sprite(rows, ox, oy, map) {
    for (let y = 0; y < rows.length; y++) for (let x = 0; x < rows[y].length; x++) {
      const ch = rows[y][x];
      if (ch !== '.' && map[ch]) px(ox + x, oy + y, 1, 1, map[ch]);
    }
  }

  // Tres encuadres: ancho (texto sobre la escena), medio y angosto (texto debajo)
  function layout() {
    const w = wrap.clientWidth;
    mode = w >= 1100 ? 'wide' : w >= 640 ? 'mid' : 'narrow';
    if (mode === 'wide') {
      S = Math.max(4, Math.min(5, Math.floor((innerHeight - 56) / 156)));
      H = 156; floorY = 98;
    } else if (mode === 'mid') { S = 4; H = 140; floorY = 88; }
    else { S = 3; H = 112; floorY = 68; }
    W = Math.ceil(w / S);
    cv.width = W; cv.height = H;
    cv.style.height = (H * S) + 'px';
    deskX = W - (mode === 'narrow' ? 112 : 128);
    placeTags();
  }

  const charX = () => deskX + 34;
  const charY = () => floorY - 62;

  // ---- el cuarto ----
  function drawRoom() {
    lights.length = 0;
    px(0, 0, W, floorY, C.night);
    for (let y = 4; y < floorY - 10; y += 8) for (let x = (y / 8) % 2 * 4; x < W; x += 8) px(x, y, 1, 1, C.dot);

    // halo de la lámpara, dos anillos con trama
    const gx = deskX + 7, gy = floorY - 58;
    for (let y = 0; y < floorY - 8; y++) for (let x = Math.max(0, gx - 50); x < Math.min(W, gx + 50); x++) {
      const d = Math.hypot((x - gx) * .9, y - gy);
      if (d < 22 || (d < 30 && (x + y) % 2 === 0)) px(x, y, 1, 1, C.glow2);
      else if (d < 40 || (d < 48 && (x + y) % 2 === 0)) px(x, y, 1, 1, C.glow);
    }
    // guirnalda
    for (let x = 0; x < W; x++) {
      const yy = 4 + Math.round(3 * Math.abs(Math.sin(x / 18 * Math.PI)));
      px(x, yy, 1, 1, C.steel);
      if (x % 18 === 9) lights.push([x, yy + 1]);
    }

    // zócalo, piso y losa
    px(0, floorY - 8, W, 8, C.steel); px(0, floorY - 8, W, 1, C.slate);
    px(0, floorY, W, 4, C.wood);
    for (let x = 0; x < W; x += 14) px(x, floorY + 1, 1, 2, C.ink);
    px(0, floorY + 4, W, 3, C.ink);
    px(0, floorY + 7, W, 5, C.steel);
    for (let x = 2; x < W; x += 6) px(x, floorY + 8 + (x % 3), 1, 1, C.slate);

    // ventana al atardecer
    if (mode !== 'narrow' || W > 150) {
      const wx = mode === 'narrow' ? 4 : deskX + 64, wy = 8, ww = 46, wh = mode === 'narrow' ? 34 : 40;
      const bands = ['#5a3a6b', '#8e4a6a', C.red, C.orange];
      for (let i = 0; i < wh; i++) {
        const q = wh / 4 | 0, b = Math.min(3, Math.floor(i / q));
        px(wx, wy + i, ww, 1, bands[b]);
        if (i % q === 0 && i > 0) for (let x = 0; x < ww; x += 2) px(wx + x, wy + i, 1, 1, bands[Math.max(0, b - 1)]);
      }
      px(wx + 28, wy + wh - 14, 8, 6, C.sun); px(wx + 27, wy + wh - 13, 10, 4, C.sun);
      let sx = wx;
      [6, 10, 4, 14, 8, 12, 5, 9, 16, 7, 11, 6].forEach((h) => {
        px(sx, wy + wh - h, 4, h, C.steel);
        if (h > 8) px(sx + 1, wy + wh - h + 3, 1, 1, C.ice);
        sx += 4;
      });
      px(wx - 3, wy - 3, ww + 6, 3, C.wood); px(wx - 3, wy + wh, ww + 6, 3, C.wood);
      px(wx - 3, wy, 3, wh, C.wood); px(wx + ww, wy, 3, wh, C.wood);
      px(wx + ww / 2 - 1, wy, 2, wh, C.wood); px(wx, wy + wh / 2 - 1, ww, 2, C.wood);
      px(wx - 5, wy + wh + 3, ww + 10, 2, C.plum);
      // planta en el alféizar
      px(wx + 4, wy + wh - 2, 6, 5, C.red); px(wx + 5, wy + wh - 7, 1, 5, C.green); px(wx + 7, wy + wh - 9, 1, 7, C.green);
      px(wx + 3, wy + wh - 6, 2, 2, C.green); px(wx + 8, wy + wh - 8, 2, 2, C.green);
    }

    // estante con libros y una cajita { }
    const shx = deskX + (mode === 'narrow' ? 56 : -6), shy = mode === 'narrow' ? 8 : 16;
    const shw = mode === 'narrow' ? 44 : 64;
    px(shx, shy + 14, shw, 2, C.wood); px(shx, shy + 16, shw, 1, C.ink);
    let bx = shx + 2;
    [[C.red, 12], [C.teal, 10], [C.sun, 13], [C.plum, 9], [C.orange, 12], [C.fog, 11], [C.green, 10]].forEach(([c, h], i) => {
      px(bx, shy + 14 - h, 4, h, c); px(bx, shy + 16 - h, 4, 1, C.ink); bx += i === 3 ? 7 : 5;
    });
    if (mode !== 'narrow') { px(shx + 46, shy + 6, 14, 8, C.steel); px(shx + 48, shy + 8, 1, 4, C.lime); px(shx + 57, shy + 8, 1, 4, C.lime); }

    // sótano
    const by = floorY + 12;
    px(0, by, W, H - by, C.ink);
    for (let y = by + 3; y < H; y += 6) for (let x = ((y - by) / 6 % 2) * 6; x < W; x += 12) px(x, y, 10, 1, C.brick);
    px(0, by + 4, W, 2, C.steel); px(0, by + 6, W, 1, C.brick);
    for (let x = 20; x < W; x += 60) px(x, by + 3, 3, 4, C.slate);
  }

  function drawLights() {
    lights.forEach(([x, y], i) => {
      const on = ((st.t >> 2) + i) % 5 !== 0;
      px(x, y, 2, 2, on ? [C.sun, C.orange, C.ice][i % 3] : C.plum);
    });
  }

  // ---- escritorio ----
  function drawDesk() {
    const dy = floorY - 34;
    px(deskX + 6, dy - 22, 2, 22, C.slate);
    px(deskX + 2, dy - 26, 10, 5, C.orange); px(deskX + 3, dy - 21, 8, 1, C.ice);
    px(deskX, dy - 1, 112, 1, C.ink);
    px(deskX, dy, 112, 4, C.wood); px(deskX, dy, 112, 1, C.woodL);
    px(deskX, dy + 4, 112, 2, C.ink);
    px(deskX + 4, dy + 6, 4, floorY - dy - 6, C.plum); px(deskX + 104, dy + 6, 4, floorY - dy - 6, C.plum);
    px(deskX + 74, dy + 6, 26, 18, C.wood); px(deskX + 74, dy + 14, 26, 1, C.ink);
    px(deskX + 85, dy + 10, 4, 1, C.sun); px(deskX + 85, dy + 18, 4, 1, C.sun);
    return dy;
  }

  // ---- personaje ----
  function drawChar(dy) {
    const cx = charX(), cy = charY() + (st.surprise > 6 ? -2 : 0);
    px(cx - 2, cy + 19, 22, 10, C.plum); px(cx - 2, cy + 19, 22, 1, C.wood); // respaldo de la silla

    const rows = BODY.slice();
    const set = (r, x, ch) => { rows[r] = rows[r].slice(0, x) + ch + rows[r].slice(x + 1); };
    if (st.blink > 0) rows[8] = '.HSGSSSGGGGSSSGSH.';
    else { set(8, 5 + st.look, 'K'); set(8, 12 + st.look, 'K'); }
    if (st.surprise > 0) rows[12] = '..HSSSSSKKSSSSSH..';

    sprite(rows.slice(16), cx, cy + 16, MAP);
    sprite(rows.slice(0, 16), cx, cy, MAP);
    if (!st.blink) px(cx + 13, cy + 9, 1, 1, C.paper); // brillo en el lente
    if (st.action === 'glasses' && st.actionT > 4 && st.actionT < 14) { // se acomoda los lentes
      px(cx + 8, cy + 9, 2, 3, C.skin); px(cx + 8, cy + 12, 2, 3, C.skinD);
    }

    // notebook de espaldas, con sticker de taza
    const lx = cx + 1, ly = dy - 9;
    px(lx, ly, 16, 9, C.fog); px(lx, ly, 16, 1, C.paper); px(lx + 15, ly, 1, 9, C.slate);
    px(lx + 6, ly + 3, 4, 3, C.orange); px(lx + 7, ly + 2, 2, 1, C.orange);
    px(lx - 2, dy - 1, 20, 1, C.slate);

    // gatito durmiendo junto a la lámpara (respira y suelta zzz)
    const kx = deskX + 13, ky = dy - 8;
    sprite(CAT, kx, ky, CMAP);
    if ((st.t % 36) < 18) { px(kx + 10, ky, 3, 1, C.cat); px(kx + 9, ky + 1, 1, 1, C.ink); }
    if ((st.t % 48) > 20) {
      const z = ((st.t % 48) - 20) >> 3;
      px(kx + 2 + z, ky - 4 - z * 2, 3, 1, C.fog); px(kx + 3 + z, ky - 3 - z * 2, 1, 1, C.fog); px(kx + 2 + z, ky - 2 - z * 2, 3, 1, C.fog);
    }

    // manos sobre el teclado
    const typing = st.action === 'type';
    px(lx - 3, dy - 3 - (typing ? st.t % 2 : 0), 3, 2, C.skin);
    if (st.action !== 'sip' && st.wave <= 0) px(lx + 16, dy - 3 - (typing ? (st.t + 1) % 2 : 0), 3, 2, C.skin);

    // café
    const mx = cx + 26, my = dy - 7;
    if (st.action === 'sip' && st.actionT > 3 && st.actionT < 20) {
      px(cx + 11, cy + 12, 5, 5, C.paper); px(cx + 16, cy + 13, 2, 3, C.paper); px(cx + 11, cy + 12, 5, 1, C.plum);
      px(cx + 13, cy + 17, 3, 3, C.skin);
    } else {
      px(mx, my, 5, 7, C.paper); px(mx + 5, my + 2, 2, 3, C.paper); px(mx + 6, my + 3, 1, 1, C.night);
      px(mx, my, 5, 1, C.plum); px(mx, my + 6, 5, 1, C.fog);
      const f = st.t % 6;
      px(mx + 1 + (f % 2), my - 3 - (f >> 1), 1, 1, C.fog); px(mx + 3 - (f % 2), my - 5 - (f >> 1), 1, 1, C.slate);
    }

    // saludo
    if (st.wave > 0) {
      const up = (st.wave >> 1) % 2;
      px(cx + 17, cy + 16, 3, 3, C.tee);
      px(cx + 19 + up, cy + 9, 2, 7, C.skin); px(cx + 19 + up, cy + 8, 3, 2, C.skin);
    }
    // sorpresa
    if (st.surprise > 0) { px(cx + 8, cy - 10, 2, 5, C.sun); px(cx + 8, cy - 4, 2, 2, C.sun); }
    // dormido
    if (st.action === 'sleep') {
      const z = (st.t >> 2) % 3;
      [[0, 0], [3, -4], [6, -8]].slice(0, z + 1).forEach(([zx, zy]) => {
        px(cx + 18 + zx, cy + zy, 3, 1, C.paper); px(cx + 19 + zx, cy + zy + 1, 1, 1, C.paper); px(cx + 18 + zx, cy + zy + 2, 3, 1, C.paper);
      });
    }
    return lx;
  }

  // ---- sótano: racks, base de datos y el cable con paquetes ----
  function drawBasement(dy, lx) {
    const by = floorY + 12, rx = deskX + 20;
    const racks = mode === 'narrow' ? 2 : 3;
    for (let i = 0; i < racks; i++) {
      const x = rx + i * 26, y = by + 14, h = H - y - 6;
      px(x, y, 20, h, C.steel); px(x, y, 20, 1, C.slate); px(x + 19, y, 1, h, C.ink);
      for (let s = 0; s < Math.floor((h - 4) / 6); s++) {
        const sy = y + 3 + s * 6;
        px(x + 2, sy, 16, 4, C.ink);
        for (let l = 0; l < 3; l++) {
          const key = i * 100 + s * 10 + l;
          const on = ((st.t + key * 7) % (5 + (key % 7))) < 2 + (key % 3);
          px(x + 3 + l * 3, sy + 1, 1, 1, on ? [C.lime, C.sun, C.orange, C.lime][key % 4] : C.brick);
        }
        px(x + 13, sy + 2, 4, 1, C.slate);
      }
    }
    if (mode !== 'narrow') {
      const dbx = rx - 34, dby = H - 34;
      for (let k = 0; k < 3; k++) {
        const yy = dby + k * 9;
        px(dbx, yy + 2, 20, 7, C.teal); px(dbx + 2, yy, 16, 2, '#7fb0a6');
        px(dbx, yy + 8, 20, 1, C.steel); px(dbx + 2, yy + 9, 16, 1, C.steel);
        px(dbx + 15, yy + 4, 2, 2, ((st.t + k * 3) % 8) < 4 ? C.sun : C.steel);
      }
    }
    const cx = lx + 8, top = dy + 6, mid = by + 10, end = rx + 10;
    px(cx, top, 1, mid - top, C.lime);
    px(Math.min(cx, end), mid, Math.abs(end - cx) + 1, 1, C.lime);
    px(end, mid, 1, 4, C.lime);
    const down = mid - top, across = Math.abs(end - cx), total = down + across + 4;
    packets.forEach((p) => {
      if (p.d < 0) return;
      const d = p.d % total;
      let x, y;
      if (d < down) { x = cx; y = top + d; }
      else if (d < down + across) { x = cx + Math.sign(end - cx) * (d - down); y = mid; }
      else { x = end; y = mid + (d - down - across); }
      px(x - 1, y - 1, 3, 3, p.c);
    });
  }

  // ---- etiquetas HTML sobre las máquinas ----
  let tagEls = [];
  function placeTags() {
    tagEls.forEach((e) => e.remove()); tagEls = [];
    const by = floorY + 12, rx = deskX + 20;
    const add = (text, x, y, dim) => {
      const e = document.createElement('span');
      e.className = 'scene-tag' + (dim ? ' dim' : '');
      e.setAttribute('aria-hidden', 'true');
      e.textContent = text;
      e.style.left = (x * S) + 'px'; e.style.top = (y * S) + 'px';
      wrap.appendChild(e); tagEls.push(e);
    };
    (mode === 'narrow' ? ['JAVA', 'SQL'] : ['JAVA', 'SPRING', 'PYTHON']).forEach((n, i) => add(n, rx + i * 26 + 1, by + 6));
    if (mode !== 'narrow') add('SQLITE', rx - 34, H - 42, true);
    if (note) {
      note.hidden = mode === 'narrow';
      note.style.left = (mode === 'wide' ? 10 * S : 16) + 'px';
      note.style.top = ((H - 14) * S) + 'px';
      if (mode === 'mid') note.style.top = ((floorY + 18) * S) + 'px';
    }
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawRoom(); drawLights();
    const dy = drawDesk();
    const lx = drawChar(dy);
    drawBasement(dy, lx);
  }

  // ---- interacción ----
  const mouse = { x: -1, y: -1 };
  document.addEventListener('mousemove', (e) => {
    const r = cv.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) / S; mouse.y = (e.clientY - r.top) / S;
    st.idle = 0;
    if (st.action === 'sleep') { st.action = 'type'; st.actionT = 0; }
  }, { passive: true });
  cv.addEventListener('click', () => {
    const cx = charX() + 9, cy = charY();
    if (Math.abs(mouse.x - cx) < 14 && mouse.y > cy - 6 && mouse.y < cy + 26) st.surprise = 10;
    packets.push({ d: 0, c: [C.ice, C.sun, C.orange][packets.length % 3] });
  });
  // los botones del diálogo mandan datos al sótano
  document.querySelectorAll('.hero .btn').forEach((b) => {
    const send = () => { for (let i = 0; i < 3; i++) packets.push({ d: -i * 6, c: C.ice }); };
    b.addEventListener('mouseenter', send); b.addEventListener('focus', send);
  });

  function tick() {
    st.t++; st.idle++;
    const cx = charX() + 9, cy = charY();
    if (mouse.x >= 0 || mouse.y >= 0) st.look = mouse.x < cx - 14 ? -1 : mouse.x > cx + 14 ? 1 : 0;
    const over = Math.abs(mouse.x - cx) < 14 && mouse.y > cy - 4 && mouse.y < cy + 24;
    if (over && st.wave <= 0) st.wave = 16;
    if (st.wave > 0) st.wave--;
    if (st.surprise > 0) st.surprise--;
    if (st.blink > 0) st.blink--; else if (Math.random() < 0.03) st.blink = 2;
    st.actionT++;
    if (st.idle > 12 * 25 && st.action !== 'sleep') { st.action = 'sleep'; st.actionT = 0; }
    if (st.action !== 'type' && st.action !== 'sleep' && st.actionT > 24) { st.action = 'type'; st.actionT = 0; }
    if (st.action === 'type' && st.actionT > 40 && Math.random() < 0.04) { st.action = Math.random() < 0.55 ? 'sip' : 'glasses'; st.actionT = 0; }
    if (st.action === 'sleep') st.blink = 1;
    packets.forEach((p) => { p.d += 2; });
    while (packets.length > 9) packets.shift();
    render();
  }

  for (let i = 0; i < 3; i++) packets.push({ d: i * 23, c: C.sun });
  layout(); render();
  addEventListener('resize', () => { layout(); render(); });

  // Anima solo cuando el cuarto está a la vista y la pestaña activa
  let timer = null, visible = true;
  const run = () => { if (!timer && !reduce && visible && !document.hidden) timer = setInterval(tick, 1000 / 12); };
  const stop = () => { clearInterval(timer); timer = null; };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? run() : stop(); }).observe(cv);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : run()));
  run();

  // ─── Íconos del inventario ────────────────────────────────────────────────
  document.querySelectorAll('canvas[data-ico]').forEach((c) => {
    const g = c.getContext('2d');
    const f = (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
    const k = c.dataset.ico;
    if (k === 'box') { f(1, 2, 6, 5, C.orange); f(1, 2, 6, 1, C.sun); f(3, 2, 2, 5, C.red); f(1, 6, 6, 1, C.plum); }
    if (k === 'coin') { f(2, 1, 4, 6, C.sun); f(1, 2, 6, 4, C.sun); f(3, 2, 1, 4, C.orange); f(5, 3, 1, 2, C.paper); }
    if (k === 'chart') { f(1, 6, 6, 1, C.ink); f(1, 4, 1, 2, C.teal); f(3, 2, 1, 4, C.orange); f(5, 3, 1, 3, C.red); }
    if (k === 'flag') { f(2, 1, 1, 6, C.fog); f(3, 1, 4, 3, C.red); f(3, 2, 4, 1, C.orange); f(1, 7, 4, 1, C.fog); }
  });

  // ─── Viñetas de proyectos (48x32) ────────────────────────────────────────
  document.querySelectorAll('canvas[data-art]').forEach((c) => {
    const g = c.getContext('2d');
    const f = (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
    f(0, 0, 48, 32, C.night);
    for (let y = 2; y < 24; y += 6) for (let x = (y / 6 % 2) * 3; x < 48; x += 6) f(x, y, 1, 1, C.dot);
    f(0, 24, 48, 8, C.wood); f(0, 24, 48, 1, C.woodL); f(0, 27, 48, 1, C.ink);
    if (c.dataset.art === 'olist') {
      // monitor con barras de ingresos y un paquete al lado
      f(8, 3, 26, 18, C.ink); f(10, 5, 22, 14, C.steel);
      [[12, 6, C.teal], [16, 9, C.teal], [20, 7, C.orange], [24, 11, C.orange], [28, 13, C.sun]].forEach(([x, h, col]) => f(x, 18 - h, 3, h, col));
      f(11, 18, 20, 1, C.fog);
      f(19, 21, 4, 2, C.ink); f(15, 23, 12, 1, C.ink);
      f(36, 16, 9, 8, C.wood); f(36, 16, 9, 1, C.woodL); f(40, 16, 1, 8, C.sun); f(36, 19, 9, 1, C.plum);
    } else if (c.dataset.art === 'uade') {
      // reloj de competencia, notebook con código y trofeo
      f(5, 4, 12, 12, C.ink); f(6, 5, 10, 10, C.paper); f(10, 6, 2, 5, C.ink); f(11, 10, 3, 1, C.red); f(9, 2, 4, 2, C.ink);
      f(19, 15, 14, 9, C.fog); f(20, 16, 12, 6, C.ink);
      [[21, 17, 6, C.lime], [21, 19, 8, C.sun], [23, 21, 5, C.lime]].forEach(([x, y, w, col]) => f(x, y, w, 1, col));
      f(17, 23, 18, 1, C.slate);
      f(37, 9, 8, 6, C.sun); f(36, 10, 1, 3, C.sun); f(45, 10, 1, 3, C.sun); f(39, 15, 4, 3, C.sun); f(37, 18, 8, 2, C.wood);
      f(39, 10, 1, 3, C.glow);
    }
  });

  // ─── El gatito despierto en Contacto: mueve la cola ──────────────────────
  const sit = document.getElementById('cat-sit');
  if (sit) {
    const g = sit.getContext('2d');
    const CAT_SIT = [
      '.k.......w....',
      '.kk.....ww....',
      '.kkwwwwwww....',
      '.kkkwwwwww....',
      '.kEkwwwEww....',
      '.kkkwwnwww....',
      '..kwwwwww.....',
      '...wwwww......',
      '..wwwwwww.....',
      '.wwwkkwwww....',
      '.wwkkkwwww....',
      '.wwwwwwwww....',
      '.wwwwwwwwwkk..',
      '.ww.ww.ww.....',
    ];
    const tails = [
      [[12, 11], [12, 10], [13, 9], [13, 8]],
      [[12, 11], [13, 10], [13, 9], [12, 8]],
    ];
    let f = 0, blink = 0;
    const draw = () => {
      g.clearRect(0, 0, 20, 16);
      CAT_SIT.forEach((row, y) => [...row].forEach((ch, x) => {
        const col = ch === 'E' ? (blink ? C.ink : C.lime) : CMAP[ch];
        if (col) { g.fillStyle = col; g.fillRect(x + 3, y + 1, 1, 1); }
      }));
      g.fillStyle = C.ink;
      tails[f].forEach(([x, y]) => g.fillRect(x + 3, y + 1, 1, 1));
    };
    draw();
    if (!reduce) setInterval(() => { f = (f + 1) % 2; blink = Math.random() < 0.15 ? 1 : 0; draw(); }, 600);
  }
})();
