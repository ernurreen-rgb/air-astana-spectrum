/* ============================================================
 * Air Astana — Fly Green / Nomad Forest
 * Shared script: runs on both index.html and forest.html
 * ============================================================ */

(() => {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';

  // ---------- PLANT SVG LIBRARY (inner markup, centered at 0,0 with base at y=0) ----------
  const PLANTS = {
    saxaul: {
      seedling: `
        <line x1="0" y1="0" x2="0" y2="-8" stroke="#6b4a2b" stroke-width="1.2"/>
        <path d="M0 -5 Q-5 -8 -6 -2" stroke="#6b8f3a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M0 -6 Q5 -9 6 -3" stroke="#7fa84a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <circle cx="-4" cy="-4" r="1.4" fill="#8fbf5a"/>
        <circle cx="4" cy="-5" r="1.4" fill="#7fa84a"/>
      `,
      sapling: `
        <rect x="-1.4" y="-17" width="2.8" height="17" fill="#6b4a2b" rx="0.5"/>
        <path d="M0 -8 Q-9 -15 -12 -5" stroke="#6b8f3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M0 -11 Q9 -18 12 -7" stroke="#7fa84a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M0 -15 Q-4 -22 -8 -14" stroke="#7fa84a" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M0 -14 Q5 -21 9 -13" stroke="#6b8f3a" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <circle cx="-10" cy="-6" r="2" fill="#8fbf5a"/>
        <circle cx="10" cy="-8" r="2" fill="#7fa84a"/>
        <circle cx="-6" cy="-14" r="1.6" fill="#8fbf5a"/>
        <circle cx="7" cy="-15" r="1.6" fill="#6b8f3a"/>
      `,
      mature: `
        <rect x="-2.2" y="-28" width="4.4" height="28" fill="#6b4a2b" rx="0.7"/>
        <path d="M0 -11 Q-16 -22 -20 -6" stroke="#5f8338" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M0 -16 Q17 -28 22 -9" stroke="#6f9a42" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M0 -23 Q-8 -36 -15 -21" stroke="#7fa84a" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        <path d="M0 -24 Q8 -38 16 -22" stroke="#5f8338" stroke-width="1.7" fill="none" stroke-linecap="round"/>
        <path d="M0 -27 Q-2 -42 -8 -31" stroke="#6f9a42" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <circle cx="-17" cy="-8" r="3.1" fill="#8fbf5a"/>
        <circle cx="-12" cy="-18" r="2.7" fill="#7fa84a"/>
        <circle cx="18" cy="-11" r="3.1" fill="#7fa84a"/>
        <circle cx="12" cy="-24" r="2.8" fill="#6f9a42"/>
        <circle cx="-9" cy="-28" r="2.5" fill="#8fbf5a"/>
        <circle cx="5" cy="-34" r="2.4" fill="#7fa84a"/>
      `
    },
    apple: {
      seedling: `
        <line x1="0" y1="0" x2="0" y2="-6" stroke="#5a3920" stroke-width="1.2"/>
        <circle cx="0" cy="-7" r="3" fill="#5aa070"/>
        <circle cx="-2" cy="-6" r="2" fill="#4a9060"/>
        <circle cx="2" cy="-7" r="2" fill="#6ab080"/>
      `,
      sapling: `
        <rect x="-1.5" y="-14" width="3" height="14" fill="#5a3920" rx="0.4"/>
        <circle cx="0" cy="-20" r="9" fill="#4a9060"/>
        <circle cx="-4" cy="-18" r="6.5" fill="#5aa070"/>
        <circle cx="4" cy="-19" r="6.5" fill="#3a8050"/>
        <circle cx="-3" cy="-20" r="1.2" fill="#dc2626"/>
        <circle cx="3" cy="-21" r="1.2" fill="#dc2626"/>
      `,
      mature: `
        <rect x="-2.5" y="-24" width="5" height="24" fill="#5a3920" rx="0.5"/>
        <path d="M-2 -12 Q-4 -16 -2 -18" stroke="#3a2410" stroke-width="1" fill="none"/>
        <circle cx="0" cy="-38" r="16" fill="#4a9060"/>
        <circle cx="-10" cy="-32" r="11" fill="#5aa070"/>
        <circle cx="10" cy="-34" r="11" fill="#3a8050"/>
        <circle cx="5" cy="-46" r="9" fill="#5aa070"/>
        <circle cx="-6" cy="-44" r="8" fill="#3a8050"/>
        <circle cx="-6" cy="-34" r="2" fill="#dc2626"/>
        <circle cx="5" cy="-38" r="2" fill="#e53e3e"/>
        <circle cx="2" cy="-30" r="2" fill="#dc2626"/>
        <circle cx="-2" cy="-46" r="2" fill="#dc2626"/>
        <circle cx="9" cy="-44" r="2" fill="#e53e3e"/>
      `
    },
    spruce: {
      seedling: `
        <line x1="0" y1="0" x2="0" y2="-4" stroke="#4a3020" stroke-width="1"/>
        <polygon points="0,-8 -3,-2 3,-2" fill="#2a7a45"/>
      `,
      sapling: `
        <rect x="-1" y="-7" width="2" height="7" fill="#4a3020"/>
        <polygon points="0,-24 -7,-13 7,-13" fill="#1a5a30"/>
        <polygon points="0,-19 -9,-6 9,-6" fill="#2a7a45"/>
      `,
      mature: `
        <rect x="-1.8" y="-14" width="3.6" height="14" fill="#4a3020"/>
        <polygon points="0,-62 -13,-42 13,-42" fill="#155025"/>
        <polygon points="0,-52 -16,-26 16,-26" fill="#1a5a30"/>
        <polygon points="0,-36 -19,-10 19,-10" fill="#1f6b3a"/>
        <circle cx="-6" cy="-48" r="1.5" fill="#2a7a45" opacity="0.6"/>
        <circle cx="8" cy="-30" r="1.5" fill="#2a7a45" opacity="0.6"/>
      `
    }
  };

  const PLANT_META = {
    saxaul: { name: 'Saxaul',   tier: 'light',      co2: 60,  color: '#7fa84a' },
    apple:  { name: 'Apple',    tier: 'balance',    co2: 210, color: '#dc2626' },
    spruce: { name: 'Spruce',   tier: 'green-plus', co2: 420, color: '#1f6b3a' }
  };

  const TIER_TO_PLANT = {
    'light':      'saxaul',
    'balance':    'apple',
    'green-plus': 'spruce'
  };

  const GROUND_DETAILS = [
    { x: 0, y: 1, dx: -7, dy: 3, rx: 8,  ry: 3, color: '#7fc86a', opacity: 0.48 },
    { x: 0, y: 3, dx: 5,  dy: 0, rx: 7,  ry: 3, color: '#58a848', opacity: 0.42 },
    { x: 1, y: 0, dx: 3,  dy: 2, rx: 6,  ry: 3, color: '#7fc86a', opacity: 0.45 },
    { x: 1, y: 2, dx: -5, dy: 1, rx: 9,  ry: 4, color: '#58a848', opacity: 0.35 },
    { x: 1, y: 4, dx: 4,  dy: 2, rx: 6,  ry: 2, color: '#7fc86a', opacity: 0.48 },
    { x: 2, y: 1, dx: 6,  dy: 1, rx: 8,  ry: 3, color: '#7fc86a', opacity: 0.38 },
    { x: 2, y: 3, dx: -4, dy: 2, rx: 7,  ry: 3, color: '#58a848', opacity: 0.44 },
    { x: 3, y: 0, dx: -3, dy: 2, rx: 6,  ry: 2, color: '#58a848', opacity: 0.42 },
    { x: 3, y: 2, dx: 5,  dy: 0, rx: 10, ry: 4, color: '#7fc86a', opacity: 0.45 },
    { x: 4, y: 1, dx: 1,  dy: 2, rx: 8,  ry: 3, color: '#58a848', opacity: 0.36 },
    { x: 4, y: 3, dx: -6, dy: 1, rx: 7,  ry: 3, color: '#7fc86a', opacity: 0.5 }
  ];

  function normalizePlantType(type) {
    if (type === 'tulip') return 'saxaul';
    return PLANTS[type] ? type : 'apple';
  }

  // ---------- DEFAULT FOREST (empty — user grows it from scratch) ----------
  const DEFAULT_FOREST = [];

  // Fallback plant config when no tier UI is present.
  // Tweak amount/points when pricing model is decided.
  const DEFAULT_ESG = { type: 'apple', name: 'Fly Green', amount: 0, points: 0 };

  // ---------- STATE ----------
  const STORAGE_KEY = 'airAstanaForest.v2';

  function loadForest() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [...DEFAULT_FOREST];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [...DEFAULT_FOREST];
    } catch {
      return [...DEFAULT_FOREST];
    }
  }

  function saveForest(forest) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(forest)); } catch {}
  }

  function findEmptySlot(forest, gridSize = 5) {
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (!forest.some(p => p.x === x && p.y === y)) return { x, y };
      }
    }
    return null;
  }

  // ---------- ISO MATH ----------
  function iso(x, y, tileW = 30, tileH = 15) {
    return { sx: (x - y) * tileW, sy: (x + y) * tileH };
  }

  function rotateGroundPoint(x, y, angle, gridSize) {
    const center = (gridSize - 1) / 2;
    const rad = angle * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const dx = x - center;
    const dy = y - center;
    return {
      x: center + dx * cos - dy * sin,
      y: center + dx * sin + dy * cos
    };
  }

  function projectGroundPoint(x, y, angle, gridSize, tileW, tileH) {
    const rotated = rotateGroundPoint(x, y, angle, gridSize);
    return { ...rotated, ...iso(rotated.x, rotated.y, tileW, tileH) };
  }

  // ---------- RENDER ----------
  function renderForest(svg, forest, { tileW = 30, tileH = 15, gridSize = 5, animateNew = null, plantScale = 1, rotation = 0 } = {}) {
    // Clear non-defs children
    Array.from(svg.childNodes).forEach(n => {
      if (n.nodeType === 1 && n.tagName.toLowerCase() !== 'defs') svg.removeChild(n);
    });

    const n = gridSize - 1;
    const depth = Math.max(24, tileW);
    svg.dataset.rotation = String(rotation);

    const corners = [
      { id: 'nw', x: -0.5, y: -0.5 },
      { id: 'ne', x: n + 0.5, y: -0.5 },
      { id: 'se', x: n + 0.5, y: n + 0.5 },
      { id: 'sw', x: -0.5, y: n + 0.5 }
    ].map((corner) => ({
      ...corner,
      ...projectGroundPoint(corner.x, corner.y, rotation, gridSize, tileW, tileH)
    }));

    const xs = corners.map(c => c.sx);
    const ys = corners.map(c => c.sy);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);

    const sceneG = document.createElementNS(SVG_NS, 'g');
    sceneG.setAttribute('class', 'forest-layer');

    // Island group
    const islandG = document.createElementNS(SVG_NS, 'g');
    islandG.setAttribute('class', 'island');

    // Ground shadow
    const shadow = document.createElementNS(SVG_NS, 'ellipse');
    shadow.setAttribute('cx', '0');
    shadow.setAttribute('cy', maxY + depth + 8);
    shadow.setAttribute('rx', Math.max(42, (maxX - minX) * 0.48));
    shadow.setAttribute('ry', tileH * 0.9);
    shadow.setAttribute('fill', 'rgba(0,0,0,0.35)');
    shadow.setAttribute('filter', 'blur(4px)');
    islandG.appendChild(shadow);

    // Grass top
    const grass = document.createElementNS(SVG_NS, 'polygon');
    grass.setAttribute('points', corners.map(p => `${p.sx},${p.sy}`).join(' '));
    grass.setAttribute('fill', 'url(#grassGrad)');
    islandG.appendChild(grass);

    // Grass texture that rotates with the grid angle.
    GROUND_DETAILS.forEach((mark) => {
      const pos = projectGroundPoint(mark.x, mark.y, rotation, gridSize, tileW, tileH);
      const scale = tileW / 30;
      const blob = document.createElementNS(SVG_NS, 'ellipse');
      blob.setAttribute('cx', pos.sx + mark.dx * scale);
      blob.setAttribute('cy', pos.sy + mark.dy * scale);
      blob.setAttribute('rx', mark.rx * scale);
      blob.setAttribute('ry', mark.ry * scale);
      blob.setAttribute('fill', mark.color);
      blob.setAttribute('opacity', mark.opacity);
      islandG.appendChild(blob);
    });

    const edges = corners.map((a, i) => {
      const b = corners[(i + 1) % corners.length];
      return {
        a,
        b,
        midX: (a.sx + b.sx) / 2,
        midY: (a.sy + b.sy) / 2
      };
    });

    edges
      .sort((a, b) => b.midY - a.midY)
      .slice(0, 2)
      .forEach((edge) => {
        const wall = document.createElementNS(SVG_NS, 'polygon');
        wall.setAttribute('points',
          `${edge.a.sx},${edge.a.sy} ${edge.b.sx},${edge.b.sy} ${edge.b.sx},${edge.b.sy + depth} ${edge.a.sx},${edge.a.sy + depth}`);
        wall.setAttribute('fill', edge.midX < 0 ? 'url(#dirtLeftGrad)' : 'url(#dirtRightGrad)');
        islandG.appendChild(wall);

        for (let i = 1; i <= 3; i++) {
          const t = i / 4;
          const x = edge.a.sx + (edge.b.sx - edge.a.sx) * t;
          const y = edge.a.sy + (edge.b.sy - edge.a.sy) * t + depth * (0.25 + i * 0.13);
          const ln = document.createElementNS(SVG_NS, 'line');
          ln.setAttribute('x1', x - 5);
          ln.setAttribute('y1', y);
          ln.setAttribute('x2', x + 7);
          ln.setAttribute('y2', y + (edge.midX < 0 ? 2 : -2));
          ln.setAttribute('stroke', 'rgba(0,0,0,0.18)');
          ln.setAttribute('stroke-width', '1');
          islandG.appendChild(ln);
        }
      });

    sceneG.appendChild(islandG);

    // Plants (painter's algorithm: sort by sy then sx)
    const plants = [...forest].map(p => {
      const type = normalizePlantType(p.type);
      const rotated = projectGroundPoint(p.x, p.y, rotation, gridSize, tileW, tileH);
      return {
        ...p,
        sourceX: p.x,
        sourceY: p.y,
        type,
        x: rotated.x,
        y: rotated.y,
        ...iso(rotated.x, rotated.y, tileW, tileH)
      };
    });
    plants.sort((a, b) => (a.sy - b.sy) || (a.sx - b.sx));

    plants.forEach((p) => {
      const stageBoost = p.stage === 'seedling' ? 1.35 : p.stage === 'sapling' ? 1.15 : 1;
      const scale = plantScale * stageBoost;
      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('transform', `translate(${p.sx}, ${p.sy})`);
      g.setAttribute('class', `plant plant-${p.type} plant-${p.stage}`);

      const art = document.createElementNS(SVG_NS, 'g');
      art.setAttribute('transform', `scale(${scale})`);
      art.style.setProperty('--plant-scale', String(scale));
      art.style.setProperty('--plant-start-scale', String(scale * 0.2));
      art.style.setProperty('--plant-pop-scale', String(scale * 1.08));
      art.style.setProperty('--plant-settle-scale', String(scale * 0.98));
      art.innerHTML = PLANTS[p.type][p.stage];

      // Soft base shadow
      const sh = document.createElementNS(SVG_NS, 'ellipse');
      sh.setAttribute('cx', '0');
      sh.setAttribute('cy', '1');
      sh.setAttribute('rx', p.stage === 'mature' ? '10' : p.stage === 'sapling' ? '7' : '4');
      sh.setAttribute('ry', p.stage === 'mature' ? '3' : '2');
      sh.setAttribute('fill', 'rgba(0,0,0,0.25)');
      art.insertBefore(sh, art.firstChild);

      if (animateNew && p.sourceX === animateNew.x && p.sourceY === animateNew.y) {
        art.classList.add('plant-drop-in');
      }
      g.appendChild(art);
      sceneG.appendChild(g);
    });

    svg.appendChild(sceneG);
  }

  function initForestRotation(svg, onRotate) {
    let dragging = false;
    let startX = 0;
    let startRotation = 0;
    const speed = 0.65;

    svg.classList.add('is-rotatable');

    svg.addEventListener('pointerdown', (e) => {
      dragging = true;
      startX = e.clientX;
      startRotation = Number(svg.dataset.rotation || 0);
      svg.classList.add('is-dragging');
      svg.setPointerCapture?.(e.pointerId);
    });

    svg.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const delta = e.clientX - startX;
      onRotate(startRotation + delta * speed);
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      svg.classList.remove('is-dragging');
      svg.releasePointerCapture?.(e.pointerId);
    }

    svg.addEventListener('pointerup', endDrag);
    svg.addEventListener('pointercancel', endDrag);
    svg.addEventListener('lostpointercapture', () => {
      dragging = false;
      svg.classList.remove('is-dragging');
    });
  }

  function renderStats(forest) {
    const saxaulEl = document.getElementById('saxaulCount');
    const appleEl = document.getElementById('appleCount');
    const spruceEl = document.getElementById('spruceCount');
    const co2El = document.getElementById('co2Total');

    if (!saxaulEl) return;

    const counts = { saxaul: 0, apple: 0, spruce: 0 };
    let co2 = 0;
    forest.forEach(p => {
      const type = normalizePlantType(p.type);
      counts[type] = (counts[type] || 0) + 1;
      co2 += PLANT_META[type].co2;
    });

    saxaulEl.textContent = counts.saxaul;
    appleEl.textContent = counts.apple;
    spruceEl.textContent = counts.spruce;
    co2El.textContent = co2.toLocaleString('en-US') + ' kg';
  }

  // ==========================================================
  // PAGE: forest.html
  // ==========================================================
  function initForestPage() {
    const svg = document.getElementById('forestSvg');
    if (!svg) return false;

    let forest = loadForest();

    // Highlight the last planted tree if sessionStorage says so
    let animateNew = null;
    try {
      const hint = sessionStorage.getItem('airAstanaForest.lastPlanted');
      if (hint) {
        animateNew = JSON.parse(hint);
        sessionStorage.removeItem('airAstanaForest.lastPlanted');
      }
    } catch {}

    let rotation = 0;
    try {
      const savedRotation = sessionStorage.getItem('airAstanaForest.rotation');
      const savedOrientation = sessionStorage.getItem('airAstanaForest.orientation');
      rotation = savedRotation !== null
        ? Number(savedRotation)
        : Number(savedOrientation || 0) * 90;
    } catch {}

    let pendingAnimate = animateNew;
    function drawForest() {
      renderForest(svg, forest, {
        tileW: 32,
        tileH: 16,
        gridSize: 5,
        animateNew: pendingAnimate,
        plantScale: 1.55,
        rotation
      });
      pendingAnimate = null;
    }

    drawForest();
    initForestRotation(svg, (nextRotation) => {
      rotation = nextRotation;
      try { sessionStorage.setItem('airAstanaForest.rotation', String(rotation)); } catch {}
      drawForest();
    });
    renderStats(forest);

    // Tabs
    document.querySelectorAll('.forest-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.forest-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // Year nav (visual only for demo)
    const yearLabel = document.getElementById('yearLabel');
    const prev = document.getElementById('yearPrev');
    const next = document.getElementById('yearNext');
    let year = 2026;
    const minYear = 2024, maxYear = 2026;

    function updateYearUI() {
      yearLabel.textContent = year;
      prev.disabled = year <= minYear;
      next.disabled = year >= maxYear;
    }
    updateYearUI();

    prev.addEventListener('click', () => { if (year > minYear) { year--; updateYearUI(); } });
    next.addEventListener('click', () => { if (year < maxYear) { year++; updateYearUI(); } });

    // Share button — Web Share API or fallback
    document.querySelector('.forest-share').addEventListener('click', async () => {
      const shareData = {
        title: 'My Nomad Forest',
        text: `I've offset ${document.getElementById('co2Total').textContent} of CO₂ flying with Air Astana! 🌱`,
        url: window.location.href
      };
      try {
        if (navigator.share) await navigator.share(shareData);
        else alert('Share to Instagram Story\n\n' + shareData.text);
      } catch {}
    });

    return true;
  }

  // ==========================================================
  // PAGE: index.html (Fly Green card)
  // ==========================================================
  function initBookingPage() {
    const totalBtn = document.getElementById('totalBtn');
    if (!totalBtn) return false;

    const BASE_TOTAL = 41013;
    const totalPanel = document.getElementById('totalPanel');
    const totalFooter = document.getElementById('totalFooter');
    const totalSum = document.getElementById('totalSum');
    const esgRow = document.getElementById('esgRow');
    const esgTierLabel = document.getElementById('esgTierLabel');
    const esgAmount = document.getElementById('esgAmount');
    const carbonRow = document.getElementById('carbonRow');
    const carbonAmount = document.getElementById('carbonAmount');
    const esgPoints = document.getElementById('esgPoints');
    const pointsRow = document.getElementById('pointsRow');
    const esgToggle = document.getElementById('esgToggle');
    const miniSvg = document.getElementById('miniForestSvg');
    const plantLabel = document.getElementById('plantLabel');
    const viewForestBtn = document.getElementById('viewForestBtn');
    const flightFootprint = document.getElementById('flightFootprint');
    const impactValue = document.getElementById('impactValue');
    const mechanicTitle = document.getElementById('mechanicTitle');
    const mechanicCopy = document.getElementById('mechanicCopy');
    const projectNote = document.getElementById('projectNote');
    const esgReceipt = document.getElementById('esgReceipt');
    const receiptTitle = document.getElementById('receiptTitle');
    const receiptMeta = document.getElementById('receiptMeta');
    const continueBtn = document.getElementById('continueBtn');
    const confirmationSheet = document.getElementById('confirmationSheet');
    const closeConfirmation = document.getElementById('closeConfirmation');
    const confirmationTitle = document.getElementById('confirmationTitle');
    const confirmationMeta = document.getElementById('confirmationMeta');

    const fmt = (n) => n.toLocaleString('en-US') + ' KZT';
    const fmtKg = (n) => '~' + Number(n).toLocaleString('en-US') + ' kg CO₂';

    let miniRotation = 0;
    try {
      const savedMiniRotation = sessionStorage.getItem('airAstanaForest.miniRotation');
      const savedFullRotation = sessionStorage.getItem('airAstanaForest.rotation');
      miniRotation = savedMiniRotation !== null ? Number(savedMiniRotation) : Number(savedFullRotation || 0);
    } catch {}

    function setJourneyStage(stage) {
      document.querySelectorAll('.journey-step').forEach((step, idx) => {
        step.classList.toggle('complete', stage === 'receipt' ? idx < 2 : idx === 0);
        step.classList.toggle('active', stage === 'receipt' ? idx === 2 : idx === 1);
      });
    }

    function getActivePlant() {
      const tier = document.querySelector('.esg-tier.selected');
      if (tier) {
        return {
          type: TIER_TO_PLANT[tier.dataset.tier],
          name: tier.querySelector('.esg-tier-name').textContent,
          amount: Number(tier.dataset.amount),
          points: Number(tier.dataset.points),
          co2: Number(tier.dataset.co2),
          offset: Number(tier.dataset.offset),
          impact: tier.dataset.impact,
          mechanic: tier.dataset.mechanic,
          project: tier.dataset.project,
          plant: tier.dataset.plant
        };
      }
      return { ...DEFAULT_ESG };
    }

    // Render mini forest preview
    function drawMini(previewPlant = null, animatePreview = false) {
      if (!miniSvg) return;
      const forest = loadForest();
      const render = [...forest];
      if (previewPlant) render.push(previewPlant);
      renderForest(miniSvg, render, {
        tileW: 16,
        tileH: 8,
        gridSize: 5,
        animateNew: animatePreview ? previewPlant : null,
        plantScale: 1.85,
        rotation: miniRotation
      });
    }

    function getPreviewPlant() {
      if (!esgToggle.checked) return null;
      const cfg = getActivePlant();
      const forest = loadForest();
      const slot = findEmptySlot(forest);
      if (!slot) return null;
      return { x: slot.x, y: slot.y, type: cfg.type, stage: 'seedling', preview: true };
    }

    function updatePlantLabel() {
      if (!plantLabel) return;
      if (!esgToggle.checked) {
        plantLabel.innerHTML = 'Toggle Fly Green to plant a seed';
        return;
      }
      const cfg = getActivePlant();
      plantLabel.innerHTML = `Your seed: <strong>${cfg.plant}</strong>`;
    }

    const updateTotals = () => {
      const active = esgToggle.checked;
      const cfg = active ? getActivePlant() : null;
      const amount = cfg ? cfg.amount : 0;
      const points = cfg ? cfg.points : 0;
      const name = cfg ? cfg.name : '';
      const co2 = cfg ? cfg.co2 : 0;

      const total = BASE_TOTAL + amount;
      totalFooter.textContent = fmt(total);
      totalSum.textContent = fmt(total);
      if (flightFootprint) flightFootprint.textContent = fmtKg(210);
      if (impactValue) impactValue.textContent = cfg ? cfg.impact : 'Not selected';
      if (mechanicTitle) mechanicTitle.textContent = cfg ? cfg.impact : 'Choose a contribution';
      if (mechanicCopy) {
        mechanicCopy.textContent = cfg
          ? cfg.mechanic
          : 'Fly Green can be added in this ancillary step without changing the booking flow.';
      }
      if (projectNote) {
        projectNote.textContent = cfg
          ? `Verified via ${cfg.project} records.`
          : 'Verified contribution appears after payment.';
      }

      if (active && amount > 0) {
        esgRow.style.display = '';
        esgTierLabel.textContent = name ? `(${name})` : '';
        esgAmount.textContent = fmt(amount);
      } else {
        esgRow.style.display = 'none';
      }

      if (active && co2 > 0) {
        carbonRow.style.display = '';
        carbonAmount.textContent = fmtKg(co2).replace(' CO₂', '');
      } else {
        carbonRow.style.display = 'none';
      }

      if (active && points > 0) {
        pointsRow.style.display = '';
        esgPoints.textContent = `+${points} pts`;
      } else {
        pointsRow.style.display = 'none';
      }

      if (esgReceipt) {
        esgReceipt.classList.toggle('is-muted', !active);
      }
      if (receiptTitle) {
        receiptTitle.textContent = active ? `${name} added to booking` : 'Fly Green not added';
      }
      if (receiptMeta) {
        receiptMeta.textContent = active
          ? `${fmtKg(co2)} booked · +${points} pts · ${cfg.plant} seed`
          : 'Select a tier to add an impact receipt to this trip';
      }
      if (confirmationTitle) {
        confirmationTitle.textContent = active ? 'Fly Green is ready for payment' : 'Continue without Fly Green';
      }
      if (confirmationMeta) {
        confirmationMeta.textContent = active
          ? `${name} will add ${fmt(amount)}, offset ${fmtKg(co2)}, and earn +${points} Nomad Points.`
          : 'This booking will continue without a CO₂ offset contribution.';
      }

      totalFooter.classList.remove('pulse');
      void totalFooter.offsetWidth;
      totalFooter.classList.add('pulse');

      drawMini(getPreviewPlant(), true);
      updatePlantLabel();
    };

    esgToggle.addEventListener('change', updateTotals);

    if (miniSvg) {
      initForestRotation(miniSvg, (nextRotation) => {
        miniRotation = nextRotation;
        try { sessionStorage.setItem('airAstanaForest.miniRotation', String(miniRotation)); } catch {}
        drawMini(getPreviewPlant(), false);
      });
    }

    document.querySelectorAll('.esg-tier').forEach((tier) => {
      tier.addEventListener('click', () => {
        document.querySelectorAll('.esg-tier').forEach((t) => {
          t.classList.remove('selected');
          t.setAttribute('aria-checked', 'false');
        });
        tier.classList.add('selected');
        tier.setAttribute('aria-checked', 'true');
        if (!esgToggle.checked) esgToggle.checked = true;
        updateTotals();
      });
    });

    totalBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = totalBtn.getAttribute('aria-expanded') === 'true';
      totalBtn.setAttribute('aria-expanded', String(!open));
      totalPanel.hidden = open;
    });

    document.addEventListener('click', (e) => {
      if (!totalBtn.contains(e.target) && !totalPanel.contains(e.target)) {
        totalBtn.setAttribute('aria-expanded', 'false');
        totalPanel.hidden = true;
      }
    });

    if (continueBtn && confirmationSheet) {
      continueBtn.addEventListener('click', () => {
        totalBtn.setAttribute('aria-expanded', 'false');
        totalPanel.hidden = true;
        confirmationSheet.hidden = false;
        setJourneyStage('receipt');
      });
    }

    if (closeConfirmation && confirmationSheet) {
      closeConfirmation.addEventListener('click', () => {
        confirmationSheet.hidden = true;
        setJourneyStage('fly-green');
      });
    }

    if (confirmationSheet) {
      confirmationSheet.addEventListener('click', (e) => {
        if (e.target === confirmationSheet) {
          confirmationSheet.hidden = true;
          setJourneyStage('fly-green');
        }
      });
    }

    // View full forest — commits the preview plant
    if (viewForestBtn) {
      viewForestBtn.addEventListener('click', (e) => {
        const preview = getPreviewPlant();
        if (preview) {
          delete preview.preview;
          const forest = loadForest();
          forest.push(preview);
          saveForest(forest);
          try { sessionStorage.setItem('airAstanaForest.lastPlanted', JSON.stringify({ x: preview.x, y: preview.y })); } catch {}
        }
      });
    }

    // Ripple for buttons
    document.querySelectorAll('.ghost-btn, .continue-btn, .edit-btn, .back-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position:absolute;border-radius:50%;background:rgba(184,146,90,0.3);
          transform:scale(0);animation:ripple 0.5s ease-out;pointer-events:none;
        `;
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
      });
    });

    updateTotals();
    return true;
  }

  // Inject shared animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple { to { transform: scale(2.5); opacity: 0; } }
    @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.06); color: #2d8a5a; } 100% { transform: scale(1); } }
    .pulse { animation: pulse 0.35s ease; display: inline-block; }
    @keyframes plantDrop {
      0%   { transform: translateY(-40px) scale(var(--plant-start-scale, 0.2)); opacity: 0; }
      60%  { transform: translateY(6px)   scale(var(--plant-pop-scale, 1.08)); opacity: 1; }
      80%  { transform: translateY(-2px)  scale(var(--plant-settle-scale, 0.98)); }
      100% { transform: translateY(0)     scale(var(--plant-scale, 1)); }
    }
    .plant-drop-in > *:not(ellipse:first-child) { transform-origin: 0 0; }
    .plant-drop-in { animation: plantDrop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both; transform-box: fill-box; transform-origin: center bottom; }
  `;
  document.head.appendChild(style);

  // Boot
  document.addEventListener('DOMContentLoaded', () => {
    initForestPage() || initBookingPage();
  });
  // Also run immediately in case DOMContentLoaded already fired
  if (document.readyState !== 'loading') {
    initForestPage() || initBookingPage();
  }
})();
