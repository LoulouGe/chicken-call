const exerciseThemes = [
  {
    label: 'une couleur',
    prompt: 'Amene les poules qui disent une couleur en anglais.',
    hint: 'Ecoute bien les couleurs de base et leurs variantes.',
    targets: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'],
    distractors: ['table', 'window', 'river', 'teacher', 'pencil', 'market', 'garden', 'pillow'],
  },
  {
    label: 'un animal',
    prompt: 'Amene les poules qui disent un animal.',
    hint: 'Cherche des noms d animaux tres connus.',
    targets: ['cat', 'dog', 'horse', 'duck', 'rabbit', 'tiger', 'lion', 'monkey'],
    distractors: ['chair', 'bottle', 'planet', 'sofa', 'kitchen', 'rocket', 'bread', 'folder'],
  },
  {
    label: 'un fruit',
    prompt: 'Amene les poules qui disent un fruit.',
    hint: 'Ce sont tous des aliments sucrés que l on mange souvent au dessert.',
    targets: ['apple', 'banana', 'orange', 'grape', 'lemon', 'pear', 'peach', 'melon'],
    distractors: ['teacher', 'blanket', 'ladder', 'window', 'notebook', 'hammer', 'river', 'village'],
  },
  {
    label: 'un legume',
    prompt: 'Amene les poules qui disent un legume.',
    hint: 'Pense au potager.',
    targets: ['carrot', 'potato', 'tomato', 'onion', 'pepper', 'cabbage', 'bean', 'pea'],
    distractors: ['cloud', 'pencil', 'jacket', 'station', 'rabbit', 'pillow', 'bottle', 'guitar'],
  },
  {
    label: 'un objet d ecole',
    prompt: 'Amene les poules qui disent un objet d ecole.',
    hint: 'Tu peux trouver ces mots dans une trousse ou un cartable.',
    targets: ['book', 'pencil', 'eraser', 'ruler', 'marker', 'notebook', 'backpack', 'scissors'],
    distractors: ['chicken', 'river', 'banana', 'doctor', 'window', 'blanket', 'helmet', 'garden'],
  },
  {
    label: 'un vetement',
    prompt: 'Amene les poules qui disent un vetement.',
    hint: 'Ce sont des habits ou des accessoires qu on porte.',
    targets: ['shirt', 'pants', 'shoes', 'socks', 'hat', 'dress', 'skirt', 'jacket'],
    distractors: ['carrot', 'spoon', 'planet', 'teacher', 'bridge', 'apple', 'mirror', 'rocket'],
  },
  {
    label: 'une partie du corps',
    prompt: 'Amene les poules qui disent une partie du corps.',
    hint: 'Ecoute les mots qu on utilise pour decrire le corps humain.',
    targets: ['head', 'hand', 'foot', 'arm', 'leg', 'nose', 'mouth', 'eyes'],
    distractors: ['table', 'train', 'flower', 'bottle', 'guitar', 'window', 'market', 'pocket'],
  },
  {
    label: 'un membre de la famille',
    prompt: 'Amene les poules qui disent un membre de la famille.',
    hint: 'Pense a la famille proche et a la famille elargie.',
    targets: ['mother', 'father', 'sister', 'brother', 'grandma', 'grandpa', 'uncle', 'aunt'],
    distractors: ['carrot', 'school', 'river', 'blanket', 'helmet', 'orange', 'ladder', 'rocket'],
  },
  {
    label: 'une piece ou un lieu de la maison',
    prompt: 'Amene les poules qui disent une piece ou un lieu de la maison.',
    hint: 'Ces mots parlent des endroits dans ou autour de la maison.',
    targets: ['kitchen', 'bedroom', 'bathroom', 'garden', 'garage', 'attic', 'balcony', 'office'],
    distractors: ['tiger', 'pencil', 'banana', 'jacket', 'spoon', 'cloud', 'bottle', 'doctor'],
  },
  {
    label: 'un meuble ou objet de la maison',
    prompt: 'Amene les poules qui disent un meuble ou objet de la maison.',
    hint: 'Imagine ce que tu peux voir dans un salon ou une chambre.',
    targets: ['chair', 'table', 'sofa', 'bed', 'lamp', 'mirror', 'carpet', 'clock'],
    distractors: ['rabbit', 'teacher', 'melon', 'station', 'jacket', 'planet', 'guitar', 'pepper'],
  },
  {
    label: 'un moyen de transport',
    prompt: 'Amene les poules qui disent un moyen de transport.',
    hint: 'Ces mots servent a se deplacer.',
    targets: ['car', 'bus', 'train', 'bike', 'plane', 'boat', 'truck', 'subway'],
    distractors: ['pillow', 'banana', 'window', 'farmer', 'flower', 'blanket', 'teacher', 'cabbage'],
  },
  {
    label: 'un metier',
    prompt: 'Amene les poules qui disent un metier.',
    hint: 'Ce sont tous des jobs.',
    targets: ['doctor', 'teacher', 'farmer', 'pilot', 'chef', 'nurse', 'artist', 'baker'],
    distractors: ['carrot', 'window', 'rocket', 'blanket', 'orange', 'station', 'pencil', 'river'],
  },
  {
    label: 'un sport ou une activite physique',
    prompt: 'Amene les poules qui disent un sport ou une activite physique.',
    hint: 'On peut faire ces activites a l ecole ou pour le loisir.',
    targets: ['football', 'tennis', 'swimming', 'running', 'jumping', 'cycling', 'dancing', 'skating'],
    distractors: ['kitchen', 'rabbit', 'pillow', 'ladder', 'window', 'tomato', 'doctor', 'planet'],
  },
  {
    label: 'un mot de meteo',
    prompt: 'Amene les poules qui disent un mot de meteo.',
    hint: 'Pense au ciel, a la pluie, au vent et au froid.',
    targets: ['sunny', 'rainy', 'windy', 'cloudy', 'snowy', 'stormy', 'foggy', 'icy'],
    distractors: ['teacher', 'banana', 'pocket', 'jacket', 'mirror', 'bottle', 'garden', 'rocket'],
  },
  {
    label: 'une emotion ou un etat',
    prompt: 'Amene les poules qui disent une emotion ou un etat.',
    hint: 'Ces mots servent a decrire comment on se sent.',
    targets: ['happy', 'sad', 'angry', 'scared', 'tired', 'calm', 'proud', 'shy'],
    distractors: ['potato', 'table', 'window', 'helmet', 'banana', 'teacher', 'rocket', 'market'],
  },
  {
    label: 'un verbe en -ing',
    prompt: 'Amene les poules qui disent un verbe en -ing.',
    hint: 'Ecoute les mots qui finissent par ing.',
    targets: ['reading', 'writing', 'sleeping', 'eating', 'playing', 'walking', 'climbing', 'singing'],
    distractors: ['carrot', 'window', 'bottle', 'market', 'pillow', 'doctor', 'banana', 'train'],
  },
];

const exercisePatterns = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 2, 4, 6],
  [1, 3, 5, 7],
  [0, 1, 4, 5],
];

function buildExerciseBank() {
  return exerciseThemes.flatMap((theme) =>
    exercisePatterns.map((pattern, patternIndex) => {
      const targets = pattern.map((index) => theme.targets[index]);
      const distractors = theme.distractors
        .slice(patternIndex, patternIndex + 5)
        .concat(theme.distractors.slice(0, patternIndex))
        .slice(0, 5);
      return {
        prompt: theme.prompt,
        hint: `${theme.hint} Cette manche attend: ${targets.join(', ')}.`,
        targets,
        pool: shuffle([...targets, ...distractors]),
        requiredCount: targets.length,
      };
    })
  );
}

const exerciseBank = buildExerciseBank();

const settings = {
  width: 1000,
  height: 625,
  playArea: {
    left: 92,
    right: 910,
    top: 96,
    bottom: 552,
  },
  chickenCount: 9,
  playerSpeed: 190,
  chickenBaseSpeed: 34,
  chickenSpeedStep: 12,
  roundsPerGame: 1,
  speakDistance: 110,
  interactDistance: 92,
  coopDistance: 132,
  maxMistakesBeforeLose: 3,
};

const board = document.getElementById('gameBoard');
const playerNode = document.getElementById('player');
const stackAnchor = document.getElementById('stackAnchor');
const coopNode = document.getElementById('coop');
const messageBubble = document.getElementById('messageBubble');
const flashText = document.getElementById('flashText');
const joystickBase = document.getElementById('joystickBase');
const joystickKnob = document.getElementById('joystickKnob');
const pickupButton = document.getElementById('pickupButton');
const dropButton = document.getElementById('dropButton');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const overlayButton = document.getElementById('overlayButton');
const resultPanel = document.getElementById('resultPanel');
const resultLabel = document.getElementById('resultLabel');
const overlayStars = document.getElementById('overlayStars');
const promptText = document.getElementById('promptText');
const targetWords = document.getElementById('targetWords');
const roundText = document.getElementById('roundText');
const remainingText = document.getElementById('remainingText');
const stackText = document.getElementById('stackText');
const mistakeText = document.getElementById('mistakeText');
const hintText = document.getElementById('hintText');
const hintButton = document.getElementById('hintButton');
const restartButton = document.getElementById('restartButton');
const howToButton = document.getElementById('howToButton');
const lifeHearts = Array.from(document.querySelectorAll('.life-heart'));
const isMacDesktop =
  /Mac/i.test(navigator.platform || navigator.userAgent) && (navigator.maxTouchPoints || 0) <= 1;

const state = {
  running: false,
  roundIndex: 0,
  sessionRounds: [],
  chickens: [],
  carried: [],
  rescuedThisRound: 0,
  mistakes: 0,
  hintsUsed: 0,
  keys: new Set(),
  touchVector: { x: 0, y: 0 },
  joystickPointerId: null,
  lastFrame: 0,
  player: { x: 480, y: 420 },
  coop: { x: 828, y: 188 },
  lastSpokenChickenId: null,
  bubbleUntil: 0,
  currentBubbleChickenId: null,
  activeTimers: [],
  audioContext: null,
  muted: false,
  depositing: false,
  gameFinished: false,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function randomPlayableX(padding = 0) {
  return randomBetween(settings.playArea.left + padding, settings.playArea.right - padding);
}

function randomPlayableY(padding = 0) {
  return randomBetween(settings.playArea.top + padding, settings.playArea.bottom - padding);
}

function toScreenX(x) {
  return (x / settings.width) * board.clientWidth;
}

function toScreenY(y) {
  return (y / settings.height) * board.clientHeight;
}

function normalize(vector) {
  const magnitude = Math.hypot(vector.x, vector.y) || 1;
  return { x: vector.x / magnitude, y: vector.y / magnitude };
}

function getCurrentRound() {
  return state.sessionRounds[state.roundIndex];
}

function pickSessionRounds() {
  return shuffle(
    exerciseBank.map((round) => ({
      ...round,
      targets: [...round.targets],
      pool: [...round.pool],
    }))
  ).slice(0, settings.roundsPerGame);
}

function clearGameTimers() {
  for (const timer of state.activeTimers) {
    window.clearTimeout(timer);
  }
  state.activeTimers = [];
}

function schedule(callback, delay) {
  const timer = window.setTimeout(() => {
    state.activeTimers = state.activeTimers.filter((id) => id !== timer);
    callback();
  }, delay);
  state.activeTimers.push(timer);
}

function renderStars(filledStars) {
  if (!overlayStars) {
    return;
  }
  overlayStars.innerHTML = '';
  for (let index = 0; index < 3; index += 1) {
    const star = document.createElement('div');
    star.className = `overlay-star ${index < filledStars ? 'filled' : 'empty'}`;
    star.textContent = '★';
    overlayStars.appendChild(star);
  }
}

function setResultPanel(visible, label = '', stars = 0) {
  if (!resultPanel || !resultLabel) {
    return;
  }
  resultPanel.classList.toggle('hidden', !visible);
  if (visible) {
    resultLabel.textContent = label;
    renderStars(stars);
  }
}

function updateLifeHearts() {
  if (lifeHearts.length === 0) {
    return;
  }
  const lostHearts = Math.min(state.mistakes, settings.maxMistakesBeforeLose);
  lifeHearts.forEach((heart, index) => {
    heart.classList.toggle('lost', index < lostHearts);
  });
}

function createChickenElement(chicken) {
  const node = document.createElement('div');
  node.className = `chicken ${chicken.isTarget ? 'correct' : 'wrong'}`;
  node.dataset.id = chicken.id;
  node.innerHTML =
    '<div class="chicken-shadow"></div><div class="chicken-body"></div><div class="chicken-face"></div>';
  board.appendChild(node);
  chicken.node = node;
}

function createCarriedElement(chicken) {
  const node = document.createElement('div');
  node.className = `carried-chicken ${chicken.isTarget ? 'correct' : 'wrong'}`;
  node.innerHTML =
    '<div class="carried-shadow"></div><div class="carried-body"></div><div class="carried-face"></div>';
  stackAnchor.appendChild(node);
  chicken.carriedNode = node;
}

function removeChickenElement(chicken) {
  chicken.node?.remove();
  chicken.node = null;
}

function removeCarriedElement(chicken) {
  chicken.carriedNode?.remove();
  chicken.carriedNode = null;
}

function spawnRound() {
  clearGameTimers();
  for (const chicken of state.chickens) {
    removeChickenElement(chicken);
    removeCarriedElement(chicken);
  }
  state.chickens = [];
  state.carried = [];
  state.rescuedThisRound = 0;
  state.depositing = false;
  state.lastSpokenChickenId = null;
  state.currentBubbleChickenId = null;
  state.bubbleUntil = 0;
  hideBubble();

  const round = getCurrentRound();
  const words = shuffle([...round.pool]).slice(0, settings.chickenCount);
  const chosenTargetIds = new Set();

  words.forEach((word, index) => {
    const isTarget = round.targets.includes(word);
    if (isTarget && chosenTargetIds.size < round.requiredCount) {
      chosenTargetIds.add(index);
    }
  });

  for (let i = 0; i < settings.chickenCount; i += 1) {
    const word = words[i];
    const isTarget = round.targets.includes(word);
    const chicken = {
      id: `${state.roundIndex}-${i}`,
      word,
      isTarget,
      x: randomPlayableX(36),
      y: randomPlayableY(42),
      vx: randomBetween(-1, 1),
      vy: randomBetween(-1, 1),
      wanderTimer: randomBetween(0.4, 1.8),
      carried: false,
      delivered: false,
      node: null,
      carriedNode: null,
    };
    createChickenElement(chicken);
    state.chickens.push(chicken);
  }

  state.player = {
    x: (settings.playArea.left + settings.playArea.right) / 2 - 30,
    y: settings.playArea.bottom - 72,
  };
  updateRoundUI();
  updatePlayer();
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function updateRoundUI() {
  const round = getCurrentRound();
  const remaining = round.requiredCount - state.rescuedThisRound;
  promptText.textContent = round.prompt;
  targetWords.textContent = `Mots attendus: ${round.targets.join(', ')}`;
  if (roundText) {
    roundText.textContent = `${state.roundIndex + 1} / ${state.sessionRounds.length}`;
  }
  remainingText.textContent = `${remaining}`;
  stackText.textContent = `${state.carried.length}`;
  mistakeText.textContent = `${state.mistakes} / ${settings.maxMistakesBeforeLose}`;
  updateLifeHearts();
  if (hintText && state.hintsUsed === 0) {
    hintText.textContent = "Appuie sur H ou sur le bouton pour afficher l'indice.";
  }
}

function showBubble(text, chicken) {
  messageBubble.textContent = text;
  messageBubble.classList.remove('hidden');
  messageBubble.style.left = `${toScreenX(chicken.x)}px`;
  messageBubble.style.top = `${toScreenY(chicken.y) - 20}px`;
  state.bubbleUntil = performance.now() + 3000;
  state.currentBubbleChickenId = chicken.id;
}

function hideBubble() {
  messageBubble.classList.add('hidden');
  state.currentBubbleChickenId = null;
}

function showFlash(text, tone = 'default') {
  flashText.textContent = text;
  flashText.className = `flash-text ${tone}`;
  flashText.classList.remove('hidden');
  schedule(() => flashText.classList.add('hidden'), 1100);
}

function initAudio() {
  if (!state.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      state.audioContext = new AudioContextClass();
    }
  }
}

function playTone(type, frequency, duration, volume = 0.03) {
  if (!state.audioContext || state.muted) {
    return;
  }
  const now = state.audioContext.currentTime;
  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(state.audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function playSuccessSound() {
  playTone('triangle', 700, 0.15, 0.045);
  schedule(() => playTone('triangle', 930, 0.18, 0.045), 80);
}

function playErrorSound() {
  playTone('square', 210, 0.12, 0.035);
  schedule(() => playTone('square', 160, 0.18, 0.03), 70);
}

function playPickupSound() {
  playTone('sine', 480, 0.08, 0.025);
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 1.4;
  window.speechSynthesis.speak(utterance);
}

function nearestFreeChicken() {
  let best = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const chicken of state.chickens) {
    if (chicken.delivered || chicken.carried) {
      continue;
    }
    const d = distance(chicken, state.player);
    if (d < bestDistance) {
      bestDistance = d;
      best = chicken;
    }
  }
  return { chicken: best, distance: bestDistance };
}

function updateSpeaker(now) {
  const nearest = nearestFreeChicken();

  for (const chicken of state.chickens) {
    chicken.node?.classList.remove('is-speaking');
  }

  if (nearest.chicken && nearest.distance <= settings.speakDistance) {
    nearest.chicken.node?.classList.add('is-speaking');
    if (state.lastSpokenChickenId !== nearest.chicken.id) {
      showBubble(capitalize(nearest.chicken.word), nearest.chicken);
      speakWord(nearest.chicken.word);
      state.lastSpokenChickenId = nearest.chicken.id;
    } else if (state.currentBubbleChickenId === nearest.chicken.id) {
      messageBubble.style.left = `${toScreenX(nearest.chicken.x)}px`;
      messageBubble.style.top = `${toScreenY(nearest.chicken.y) - 20}px`;
    }
  } else {
    state.lastSpokenChickenId = null;
  }

  if (state.currentBubbleChickenId && now > state.bubbleUntil) {
    hideBubble();
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function updatePlayer() {
  playerNode.style.left = `${toScreenX(state.player.x)}px`;
  playerNode.style.top = `${toScreenY(state.player.y)}px`;
  playerNode.style.zIndex = `${100 + Math.round(state.player.y)}`;
  updateCoopGlow();
  updateCarriedStack();
}

function updateCarriedStack() {
  state.carried.forEach((chicken, index) => {
    if (!chicken.carriedNode) {
      createCarriedElement(chicken);
    }
    chicken.carriedNode.style.left = '0px';
    chicken.carriedNode.style.top = `${72 - index * 16}px`;
    chicken.carriedNode.style.zIndex = `${80 + index}`;
  });
  stackText.textContent = `${state.carried.length}`;
}

function updateChicken(chicken, dt) {
  if (chicken.carried || chicken.delivered) {
    return;
  }

  chicken.wanderTimer -= dt;
  if (chicken.wanderTimer <= 0) {
    chicken.wanderTimer = randomBetween(0.8, 2.4);
    const angle = randomBetween(0, Math.PI * 2);
    chicken.vx = Math.cos(angle);
    chicken.vy = Math.sin(angle);
  }

  const speed = settings.chickenBaseSpeed + state.roundIndex * settings.chickenSpeedStep;
  chicken.x += chicken.vx * speed * dt;
  chicken.y += chicken.vy * speed * dt;

  if (chicken.x < settings.playArea.left || chicken.x > settings.playArea.right) {
    chicken.vx *= -1;
    chicken.x = clamp(chicken.x, settings.playArea.left, settings.playArea.right);
  }
  if (chicken.y < settings.playArea.top || chicken.y > settings.playArea.bottom) {
    chicken.vy *= -1;
    chicken.y = clamp(chicken.y, settings.playArea.top, settings.playArea.bottom);
  }

  chicken.node.style.left = `${toScreenX(chicken.x)}px`;
  chicken.node.style.top = `${toScreenY(chicken.y)}px`;
  chicken.node.style.zIndex = `${40 + Math.round(chicken.y)}`;
}

function movePlayer(dt) {
  let x = 0;
  let y = 0;
  const active = new Set([...state.keys]);
  if (active.has('arrowup') || active.has('z') || active.has('w')) {
    y -= 1;
  }
  if (active.has('arrowdown') || (!isMacDesktop && active.has('s'))) {
    y += 1;
  }
  if (active.has('arrowleft') || active.has('q') || active.has('a')) {
    x -= 1;
  }
  if (active.has('arrowright') || active.has('d')) {
    x += 1;
  }

  x += state.touchVector.x;
  y += state.touchVector.y;

  if (!x && !y) {
    return;
  }

  const direction = normalize({ x, y });
  state.player.x += direction.x * settings.playerSpeed * dt;
  state.player.y += direction.y * settings.playerSpeed * dt;

  state.player.x = clamp(state.player.x, settings.playArea.left, settings.playArea.right);
  state.player.y = clamp(state.player.y, settings.playArea.top, settings.playArea.bottom);
}

function tryInteract() {
  if (!state.running || state.depositing) {
    return;
  }

  if (state.carried.length > 0) {
    tryDrop();
  } else {
    tryPickup();
  }
}

function tryPickup() {
  if (!state.running || state.depositing) {
    return;
  }

  initAudio();
  const nearest = nearestFreeChicken();
  if (nearest.chicken && nearest.distance <= settings.interactDistance) {
    pickupChicken(nearest.chicken);
  } else {
    showFlash('Approche-toi d une poule');
  }
}

function tryDrop() {
  if (!state.running || state.depositing) {
    return;
  }

  if (state.carried.length === 0) {
    showFlash('Tu ne portes aucune poule');
    return;
  }

  initAudio();
  const coopDistance = distance(state.player, state.coop);
  if (coopDistance <= settings.coopDistance) {
    depositTopChicken();
  } else {
    dropTopChickenAtPlayer();
  }
}

function pickupChicken(chicken) {
  chicken.carried = true;
  removeChickenElement(chicken);
  createCarriedElement(chicken);
  state.carried.push(chicken);
  playPickupSound();
  showFlash(`${capitalize(chicken.word)} embarquee`);
  updateRoundUI();
}

function depositTopChicken() {
  state.depositing = true;
  const chicken = state.carried.pop();
  updateRoundUI();
  processDeliveredChicken(chicken);
  updateCarriedStack();
  schedule(() => {
    state.depositing = false;
    checkRoundProgress();
  }, 180);
}

function dropTopChickenAtPlayer() {
  const chicken = state.carried.pop();
  if (!chicken) {
    return;
  }

  removeCarriedElement(chicken);
  chicken.carried = false;
  chicken.delivered = false;
  chicken.x = clamp(state.player.x + randomBetween(-28, 28), settings.playArea.left, settings.playArea.right);
  chicken.y = clamp(state.player.y + randomBetween(-12, 20), settings.playArea.top, settings.playArea.bottom);
  chicken.vx = randomBetween(-1, 1);
  chicken.vy = randomBetween(-1, 1);
  createChickenElement(chicken);
  showFlash(`${capitalize(chicken.word)} reposee`);
  updateRoundUI();
  updateCarriedStack();
}

function processDeliveredChicken(chicken) {
  removeCarriedElement(chicken);
  chicken.carried = false;

  if (chicken.isTarget) {
    chicken.delivered = true;
    state.rescuedThisRound += 1;
    playSuccessSound();
    showFlash(`Oui: ${capitalize(chicken.word)}`, 'success');
  } else {
    state.mistakes += 1;
    playErrorSound();
    showFlash(`Non: ${capitalize(chicken.word)}`, 'danger');
    chicken.x = randomPlayableX(28);
    chicken.y = randomPlayableY(34);
    chicken.vx = randomBetween(-1, 1);
    chicken.vy = randomBetween(-1, 1);
    createChickenElement(chicken);
  }

  updateRoundUI();
  if (state.mistakes >= settings.maxMistakesBeforeLose) {
    finishGame(false);
  }
}

function checkRoundProgress() {
  if (state.gameFinished) {
    return;
  }

  const round = getCurrentRound();
  if (state.rescuedThisRound >= round.requiredCount) {
    if (state.roundIndex === state.sessionRounds.length - 1) {
      finishGame(true);
    } else {
      state.roundIndex += 1;
      showFlash('Nouvelle manche');
      spawnRound();
    }
  }
}

function updateCoopGlow() {
  if (!coopNode) {
    return;
  }
  const canDeposit = state.carried.length > 0 && distance(state.player, state.coop) <= settings.coopDistance;
  coopNode.classList.toggle('can-deposit', canDeposit);
}

function finishGame(victory) {
  if (state.gameFinished) {
    return;
  }
  state.gameFinished = true;
  state.running = false;
  window.speechSynthesis?.cancel();

  const stars = victory ? Math.max(1, 3 - state.mistakes) : 0;
  if (victory) {
    overlayTitle.textContent = 'Mission accomplie';
    overlayText.textContent = `Tu as reussi l exercice avec ${state.mistakes} erreur(s).`;
    setResultPanel(true, 'Victoire', stars);
    overlayButton.textContent = 'Rejouer';
  } else {
    overlayTitle.textContent = 'Les poules se sont echappees';
    overlayText.textContent = `Tu as atteint ${state.mistakes} erreurs. A la troisieme erreur, la partie est perdue.`;
    setResultPanel(true, 'Defaite', stars);
    overlayButton.textContent = 'Recommencer';
  }
  overlay.classList.remove('hidden');
}

function startGame() {
  state.gameFinished = false;
  state.roundIndex = 0;
  state.sessionRounds = pickSessionRounds();
  state.mistakes = 0;
  state.hintsUsed = 0;
  setResultPanel(false);
  if (hintText) {
    hintText.textContent = "Appuie sur H ou sur le bouton pour afficher l'indice.";
  }
  overlay.classList.add('hidden');
  spawnRound();
  state.running = true;
  state.lastFrame = performance.now();
}

function showHowToPlay() {
  state.running = false;
  overlayTitle.textContent = 'Comment jouer';
  overlayText.textContent =
    'Tu joues une seule manche par partie. Approche-toi d une poule pour lire et entendre son mot, porte-la avec E puis depose les bonnes au poulailler. A la troisieme erreur, la partie est perdue.';
  setResultPanel(false);
  overlayButton.textContent = state.gameFinished ? 'Rejouer' : 'Continuer';
  overlay.classList.remove('hidden');
}

function useHint() {
  const round = getCurrentRound();
  state.hintsUsed += 1;
  if (hintText) {
    hintText.textContent = round.hint;
  }
  showFlash('Indice affiche');
}

function resetGame() {
  clearGameTimers();
  window.speechSynthesis?.cancel();
  startGame();
}

function frame(now) {
  const dt = Math.min((now - state.lastFrame) / 1000, 0.033);
  state.lastFrame = now;

  if (state.running) {
    movePlayer(dt);
    updatePlayer();
    for (const chicken of state.chickens) {
      updateChicken(chicken, dt);
    }
    updateSpeaker(now);
  }

  requestAnimationFrame(frame);
}

function handleKeyDown(event) {
  const key = event.key.toLowerCase();
  if (key === 'e') {
    event.preventDefault();
    tryPickup();
    return;
  }
  if (isMacDesktop && key === 's') {
    event.preventDefault();
    tryDrop();
    return;
  }
  if (key === 'h') {
    event.preventDefault();
    useHint();
    return;
  }
  if (key === 'enter') {
    event.preventDefault();
    if (overlay.classList.contains('hidden')) {
      if (!state.running) {
        state.running = true;
      }
    } else if (state.gameFinished) {
      startGame();
    } else {
      overlay.classList.add('hidden');
      state.running = true;
    }
    return;
  }
  state.keys.add(key);
}

function handleKeyUp(event) {
  state.keys.delete(event.key.toLowerCase());
}

function bindTouchControls() {
  if (joystickBase && joystickKnob) {
    const moveKnob = (clientX, clientY) => {
      const rect = joystickBase.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rawX = clientX - centerX;
      const rawY = clientY - centerY;
      const maxRadius = rect.width * 0.32;
      const magnitude = Math.hypot(rawX, rawY);
      const limited = magnitude > maxRadius && magnitude > 0
        ? { x: (rawX / magnitude) * maxRadius, y: (rawY / magnitude) * maxRadius }
        : { x: rawX, y: rawY };

      joystickKnob.style.transform = `translate(${limited.x}px, ${limited.y}px)`;
      state.touchVector.x = limited.x / maxRadius;
      state.touchVector.y = limited.y / maxRadius;
    };

    const resetJoystick = () => {
      state.touchVector.x = 0;
      state.touchVector.y = 0;
      state.joystickPointerId = null;
      joystickKnob.style.transform = 'translate(0, 0)';
    };

    joystickBase.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      state.joystickPointerId = event.pointerId;
      joystickBase.setPointerCapture(event.pointerId);
      moveKnob(event.clientX, event.clientY);
    });

    joystickBase.addEventListener('pointermove', (event) => {
      if (state.joystickPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      moveKnob(event.clientX, event.clientY);
    });

    const endJoystick = (event) => {
      if (state.joystickPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      resetJoystick();
    };

    joystickBase.addEventListener('pointerup', endJoystick);
    joystickBase.addEventListener('pointercancel', endJoystick);
    joystickBase.addEventListener('lostpointercapture', resetJoystick);
  }

  pickupButton?.addEventListener('click', tryPickup);
  dropButton?.addEventListener('click', tryDrop);
}

function setupDesktopActionLabels() {
  if (!isMacDesktop) {
    return;
  }
  if (pickupButton) {
    pickupButton.textContent = 'Prendre (E)';
  }
  if (dropButton) {
    dropButton.textContent = 'Deposer (S)';
  }
}

overlayButton.addEventListener('click', () => {
  if (state.gameFinished) {
    startGame();
  } else {
    initAudio();
    overlay.classList.add('hidden');
    state.running = true;
  }
});

hintButton?.addEventListener('click', useHint);
restartButton?.addEventListener('click', resetGame);
howToButton?.addEventListener('click', showHowToPlay);
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
window.addEventListener('blur', () => state.keys.clear());

bindTouchControls();
setupDesktopActionLabels();
state.sessionRounds = pickSessionRounds();
spawnRound();
state.running = false;
requestAnimationFrame((now) => {
  state.lastFrame = now;
  requestAnimationFrame(frame);
});
