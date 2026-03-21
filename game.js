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

const wordTranslations = {
  red: 'rouge',
  blue: 'bleu',
  green: 'vert',
  yellow: 'jaune',
  orange: 'orange',
  purple: 'violet',
  pink: 'rose',
  brown: 'marron',
  cat: 'chat',
  dog: 'chien',
  horse: 'cheval',
  duck: 'canard',
  rabbit: 'lapin',
  tiger: 'tigre',
  lion: 'lion',
  monkey: 'singe',
  apple: 'pomme',
  banana: 'banane',
  grape: 'raisin',
  lemon: 'citron',
  pear: 'poire',
  peach: 'peche',
  melon: 'melon',
  carrot: 'carotte',
  potato: 'pomme de terre',
  tomato: 'tomate',
  onion: 'oignon',
  pepper: 'poivron',
  cabbage: 'chou',
  bean: 'haricot',
  pea: 'petit pois',
  book: 'livre',
  pencil: 'crayon',
  eraser: 'gomme',
  ruler: 'regle',
  marker: 'feutre',
  notebook: 'cahier',
  backpack: 'sac a dos',
  scissors: 'ciseaux',
  shirt: 'chemise',
  pants: 'pantalon',
  shoes: 'chaussures',
  socks: 'chaussettes',
  hat: 'chapeau',
  dress: 'robe',
  skirt: 'jupe',
  jacket: 'veste',
  head: 'tete',
  hand: 'main',
  foot: 'pied',
  arm: 'bras',
  leg: 'jambe',
  nose: 'nez',
  mouth: 'bouche',
  eyes: 'yeux',
  mother: 'mere',
  father: 'pere',
  sister: 'soeur',
  brother: 'frere',
  grandma: 'grand-mere',
  grandpa: 'grand-pere',
  uncle: 'oncle',
  aunt: 'tante',
  kitchen: 'cuisine',
  bedroom: 'chambre',
  bathroom: 'salle de bain',
  garden: 'jardin',
  garage: 'garage',
  attic: 'grenier',
  balcony: 'balcon',
  office: 'bureau',
  chair: 'chaise',
  table: 'table',
  sofa: 'canape',
  bed: 'lit',
  lamp: 'lampe',
  mirror: 'miroir',
  carpet: 'tapis',
  clock: 'horloge',
  car: 'voiture',
  bus: 'bus',
  train: 'train',
  bike: 'velo',
  plane: 'avion',
  boat: 'bateau',
  truck: 'camion',
  subway: 'metro',
  doctor: 'medecin',
  teacher: 'professeur',
  farmer: 'fermier',
  pilot: 'pilote',
  chef: 'chef',
  nurse: 'infirmier',
  artist: 'artiste',
  baker: 'boulanger',
  football: 'football',
  tennis: 'tennis',
  swimming: 'natation',
  running: 'course',
  jumping: 'saut',
  cycling: 'cyclisme',
  dancing: 'danse',
  skating: 'patinage',
  sunny: 'ensoleille',
  rainy: 'pluvieux',
  windy: 'venteux',
  cloudy: 'nuageux',
  snowy: 'enneige',
  stormy: 'orageux',
  foggy: 'brumeux',
  icy: 'gele',
  happy: 'heureux',
  sad: 'triste',
  angry: 'en colere',
  scared: 'effraye',
  tired: 'fatigue',
  calm: 'calme',
  proud: 'fier',
  shy: 'timide',
  reading: 'lire',
  writing: 'ecrire',
  sleeping: 'dormir',
  eating: 'manger',
  playing: 'jouer',
  walking: 'marcher',
  climbing: 'grimper',
  singing: 'chanter',
};

const roundDifficultyProfiles = [
  {
    label: 'Echauffement',
    targetIndexes: [0, 1, 2],
    distractorOffset: 0,
    distractorCount: 4,
    chickenSpeed: 34,
    speakDistance: 138,
    interactDistance: 98,
    bubbleDuration: 3600,
    speechRate: 0.84,
  },
  {
    label: 'Entrainement',
    targetIndexes: [0, 2, 4, 6],
    distractorOffset: 2,
    distractorCount: 5,
    chickenSpeed: 52,
    speakDistance: 118,
    interactDistance: 92,
    bubbleDuration: 2900,
    speechRate: 0.94,
  },
  {
    label: 'Sprint final',
    targetIndexes: [1, 2, 3, 5, 7],
    distractorOffset: 4,
    distractorCount: 6,
    chickenSpeed: 70,
    speakDistance: 102,
    interactDistance: 86,
    bubbleDuration: 2200,
    speechRate: 1.02,
  },
];

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
  roundsPerGame: 3,
  speakDistance: 110,
  interactDistance: 92,
  coopDistance: 132,
  maxMistakesBeforeLose: 1,
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
const overlayNotebookButton = document.getElementById('overlayNotebookButton');
const resultPanel = document.getElementById('resultPanel');
const resultLabel = document.getElementById('resultLabel');
const overlayStars = document.getElementById('overlayStars');
const recapPanel = document.getElementById('recapPanel');
const recapRounds = document.getElementById('recapRounds');
const notebookOverlay = document.getElementById('notebookOverlay');
const notebookPageCurrent = document.getElementById('notebookPageCurrent');
const notebookPageTotal = document.getElementById('notebookPageTotal');
const notebookLeftPageBody = document.getElementById('notebookLeftPageBody');
const notebookRightPageBody = document.getElementById('notebookRightPageBody');
const notebookTurnLeaf = document.getElementById('notebookTurnLeaf');
const notebookTurnFront = document.getElementById('notebookTurnFront');
const notebookTurnBack = document.getElementById('notebookTurnBack');
const notebookPrevButton = document.getElementById('notebookPrevButton');
const notebookNextButton = document.getElementById('notebookNextButton');
const closeNotebookButton = document.getElementById('closeNotebookButton');
const promptText = document.getElementById('promptText');
const roundDetailText = document.getElementById('roundDetailText');
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
  roundReports: [],
  notebookOpen: false,
  resumeAfterNotebook: false,
  notebookSpreadIndex: 0,
  notebookAnimating: false,
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

function getTranslation(word) {
  return wordTranslations[word] || word;
}

function getCurrentRound() {
  return state.sessionRounds[state.roundIndex];
}

function buildSessionRound(theme, roundIndex) {
  const profile =
    roundDifficultyProfiles[Math.min(roundIndex, roundDifficultyProfiles.length - 1)];
  const targets = profile.targetIndexes.map((index) => theme.targets[index]).filter(Boolean);
  const distractors = theme.distractors
    .slice(profile.distractorOffset)
    .concat(theme.distractors.slice(0, profile.distractorOffset))
    .slice(0, profile.distractorCount);

  return {
    prompt: theme.prompt,
    detail: `${profile.label} · Theme : ${capitalize(theme.label)}`,
    themeLabel: theme.label,
    difficultyLabel: profile.label,
    hint: `${theme.hint} Cette manche attend: ${targets.join(', ')}.`,
    targets,
    pool: shuffle([...targets, ...distractors]),
    requiredCount: targets.length,
    chickenCount: targets.length + distractors.length,
    chickenSpeed: profile.chickenSpeed,
    speakDistance: profile.speakDistance,
    interactDistance: profile.interactDistance,
    bubbleDuration: profile.bubbleDuration,
    speechRate: profile.speechRate,
  };
}

function pickSessionRounds() {
  const pickedThemes = shuffle(
    exerciseThemes.map((theme) => ({
      ...theme,
      targets: [...theme.targets],
      distractors: [...theme.distractors],
    }))
  ).slice(0, settings.roundsPerGame);

  return pickedThemes.map((theme, index) => buildSessionRound(theme, index));
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

function setRecapVisible(visible) {
  if (!recapPanel) {
    return;
  }
  recapPanel.classList.toggle('hidden', !visible);
}

function clearRecap() {
  if (!recapRounds) {
    return;
  }
  recapRounds.innerHTML = '';
}

function createRoundReport(round, roundIndex) {
  return {
    title: `Manche ${roundIndex + 1} · ${capitalize(round.themeLabel)}`,
    prompt: round.prompt,
    targets: round.targets.map((word) => ({ word, found: false })),
    wrongWords: [],
  };
}

function getCurrentRoundReport() {
  return state.roundReports[state.roundIndex];
}

function markTargetFound(word) {
  const report = getCurrentRoundReport();
  const entry = report?.targets.find((target) => target.word === word);
  if (entry) {
    entry.found = true;
  }
}

function markWrongWord(word) {
  const report = getCurrentRoundReport();
  if (report) {
    report.wrongWords.push(word);
  }
}

function renderRecap() {
  if (!recapRounds) {
    return;
  }

  clearRecap();

  state.roundReports.filter(Boolean).forEach((report, index) => {
    const roundCard = document.createElement('section');
    roundCard.className = 'recap-round';

    const title = document.createElement('p');
    title.className = 'recap-round-title';
    title.textContent = report.title || (state.roundReports.length > 1 ? `Manche ${index + 1}` : 'Mots de la manche');
    roundCard.appendChild(title);

    const wordList = document.createElement('div');
    wordList.className = 'recap-word-list';

    report.targets.forEach((target) => {
      const badge = document.createElement('span');
      badge.className = `recap-word ${target.found ? 'found' : 'missed'}`;
      badge.textContent = target.word;
      wordList.appendChild(badge);
    });

    roundCard.appendChild(wordList);

    const note = document.createElement('p');
    note.className = 'recap-round-note';
    note.textContent = report.prompt;
    roundCard.appendChild(note);

    if (report.wrongWords.length > 0) {
      const errorTitle = document.createElement('p');
      errorTitle.className = 'recap-error-title';
      errorTitle.textContent = 'Poules deposees par erreur';
      roundCard.appendChild(errorTitle);

      const errorList = document.createElement('div');
      errorList.className = 'recap-error-list';

      report.wrongWords.forEach((word) => {
        const errorBadge = document.createElement('span');
        errorBadge.className = 'recap-error';
        errorBadge.textContent = word;
        errorList.appendChild(errorBadge);
      });

      roundCard.appendChild(errorList);
    }

    recapRounds.appendChild(roundCard);
  });
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildNotebookPageMarkup(theme, index) {
  if (!theme) {
    return `
      <div class="notebook-page-header">
        <span class="notebook-topic-badge">Pause</span>
        <span class="notebook-page-number">Page ${index + 1}</span>
      </div>
      <h3 class="notebook-page-title">Page blanche</h3>
      <p class="notebook-page-note">Cette feuille attend la prochaine lecon du poulailler.</p>
      <div class="notebook-empty-state"></div>
      <p class="notebook-page-footer">Tourne la page pour continuer le cahier.</p>
    `;
  }

  const words = theme.targets
    .map(
      (word, wordIndex) => `
        <div class="notebook-word-row">
          <span class="notebook-word-index">${String(wordIndex + 1).padStart(2, '0')}</span>
          <span class="notebook-word-term">${escapeHtml(capitalize(word))}</span>
          <span class="notebook-word-translation">${escapeHtml(capitalize(getTranslation(word)))}</span>
        </div>`
    )
    .join('');

  return `
    <div class="notebook-page-header">
      <span class="notebook-topic-badge">Theme ${index + 1}</span>
      <span class="notebook-page-number">Page ${index + 1}</span>
    </div>
    <h3 class="notebook-page-title">${escapeHtml(capitalize(theme.label))}</h3>
    <p class="notebook-page-note">${escapeHtml(theme.prompt)}</p>
    <div class="notebook-word-list">${words}</div>
    <p class="notebook-page-footer">Relis les mots, memorise-les, puis retourne sauver les poules.</p>
  `;
}

function getNotebookSpreadCount() {
  return Math.ceil(exerciseThemes.length / 2);
}

function getNotebookSpreadThemes(spreadIndex) {
  const leftIndex = spreadIndex * 2;
  const rightIndex = leftIndex + 1;
  return {
    leftTheme: exerciseThemes[leftIndex] || null,
    leftIndex,
    rightTheme: exerciseThemes[rightIndex] || null,
    rightIndex,
  };
}

function updateNotebookControls() {
  const { leftIndex, rightIndex, rightTheme } = getNotebookSpreadThemes(state.notebookSpreadIndex);

  if (notebookPageCurrent) {
    notebookPageCurrent.textContent = rightTheme ? `${leftIndex + 1}-${rightIndex + 1}` : `${leftIndex + 1}`;
  }
  if (notebookPageTotal) {
    notebookPageTotal.textContent = `${exerciseThemes.length}`;
  }

  if (notebookPrevButton) {
    notebookPrevButton.disabled = state.notebookAnimating || state.notebookSpreadIndex === 0;
  }
  if (notebookNextButton) {
    notebookNextButton.disabled =
      state.notebookAnimating || state.notebookSpreadIndex >= getNotebookSpreadCount() - 1;
  }
}

function setNotebookSpread(spreadIndex) {
  const boundedIndex = clamp(spreadIndex, 0, getNotebookSpreadCount() - 1);
  state.notebookSpreadIndex = boundedIndex;

  const { leftTheme, leftIndex, rightTheme, rightIndex } = getNotebookSpreadThemes(boundedIndex);

  if (notebookLeftPageBody) {
    notebookLeftPageBody.innerHTML = buildNotebookPageMarkup(leftTheme, leftIndex);
  }
  if (notebookRightPageBody) {
    notebookRightPageBody.innerHTML = buildNotebookPageMarkup(rightTheme, rightIndex);
  }

  updateNotebookControls();
}

function animateNotebookToSpread(targetSpreadIndex) {
  const boundedIndex = clamp(targetSpreadIndex, 0, getNotebookSpreadCount() - 1);
  if (boundedIndex === state.notebookSpreadIndex || state.notebookAnimating) {
    return;
  }

  if (!notebookTurnLeaf || !notebookTurnFront || !notebookTurnBack) {
    setNotebookSpread(boundedIndex);
    return;
  }

  const currentSpread = getNotebookSpreadThemes(state.notebookSpreadIndex);
  const targetSpread = getNotebookSpreadThemes(boundedIndex);
  const isNext = boundedIndex > state.notebookSpreadIndex;

  if (isNext) {
    notebookTurnFront.innerHTML = buildNotebookPageMarkup(currentSpread.rightTheme, currentSpread.rightIndex);
    notebookTurnBack.innerHTML = buildNotebookPageMarkup(targetSpread.leftTheme, targetSpread.leftIndex);
  } else {
    notebookTurnFront.innerHTML = buildNotebookPageMarkup(currentSpread.leftTheme, currentSpread.leftIndex);
    notebookTurnBack.innerHTML = buildNotebookPageMarkup(targetSpread.rightTheme, targetSpread.rightIndex);
  }

  state.notebookAnimating = true;
  updateNotebookControls();

  notebookTurnLeaf.classList.remove('hidden', 'is-turning-next', 'is-turning-prev', 'is-on-left', 'is-on-right');
  notebookTurnLeaf.classList.add(isNext ? 'is-on-right' : 'is-on-left');
  void notebookTurnLeaf.offsetWidth;
  notebookTurnLeaf.classList.add(isNext ? 'is-turning-next' : 'is-turning-prev');

  notebookTurnLeaf.addEventListener(
    'animationend',
    () => {
      notebookTurnLeaf.classList.add('hidden');
      notebookTurnLeaf.classList.remove('is-turning-next', 'is-turning-prev', 'is-on-left', 'is-on-right');
      state.notebookAnimating = false;
      setNotebookSpread(boundedIndex);
    },
    { once: true }
  );
}

function renderNotebook() {
  if (!notebookLeftPageBody || !notebookRightPageBody) {
    return;
  }

  setNotebookSpread(0);
}

function openNotebook() {
  if (!notebookOverlay || state.notebookOpen) {
    return;
  }
  if (overlay.classList.contains('hidden')) {
    return;
  }

  state.resumeAfterNotebook = state.running && overlay.classList.contains('hidden');
  state.notebookOpen = true;
  state.running = false;
  state.keys.clear();
  window.speechSynthesis?.cancel();
  updateNotebookControls();
  notebookOverlay.classList.remove('hidden');
}

function closeNotebook() {
  if (!notebookOverlay || !state.notebookOpen) {
    return;
  }

  notebookOverlay.classList.add('hidden');
  state.notebookOpen = false;
  state.notebookAnimating = false;
  notebookTurnLeaf?.classList.add('hidden');
  notebookTurnLeaf?.classList.remove('is-turning-next', 'is-turning-prev', 'is-on-left', 'is-on-right');

  if (state.resumeAfterNotebook && overlay.classList.contains('hidden') && !state.gameFinished) {
    state.running = true;
    state.lastFrame = performance.now();
  }

  state.resumeAfterNotebook = false;
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
  state.roundReports[state.roundIndex] = createRoundReport(round, state.roundIndex);
  const words = shuffle([...round.pool]).slice(0, round.chickenCount);

  for (let i = 0; i < words.length; i += 1) {
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
  if (roundDetailText) {
    roundDetailText.textContent = `Manche ${state.roundIndex + 1} / ${state.sessionRounds.length} · ${round.detail}`;
  }
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
  const round = getCurrentRound();
  messageBubble.textContent = text;
  messageBubble.classList.remove('hidden');
  messageBubble.style.left = `${toScreenX(chicken.x)}px`;
  messageBubble.style.top = `${toScreenY(chicken.y) - 20}px`;
  state.bubbleUntil = performance.now() + (round?.bubbleDuration || 3000);
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

function speakWord(word, rate = 0.9) {
  if (!('speechSynthesis' in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = rate;
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
  const round = getCurrentRound();

  for (const chicken of state.chickens) {
    chicken.node?.classList.remove('is-speaking');
  }

  if (nearest.chicken && nearest.distance <= (round?.speakDistance || settings.speakDistance)) {
    nearest.chicken.node?.classList.add('is-speaking');
    if (state.lastSpokenChickenId !== nearest.chicken.id) {
      showBubble(capitalize(nearest.chicken.word), nearest.chicken);
      speakWord(nearest.chicken.word, round?.speechRate || 0.9);
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

  const round = getCurrentRound();
  const speed = round?.chickenSpeed || (settings.chickenBaseSpeed + state.roundIndex * settings.chickenSpeedStep);
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
  const round = getCurrentRound();
  const nearest = nearestFreeChicken();
  if (nearest.chicken && nearest.distance <= (round?.interactDistance || settings.interactDistance)) {
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
    markTargetFound(chicken.word);
    playSuccessSound();
    showFlash(`Oui: ${capitalize(chicken.word)}`, 'success');
  } else {
    state.mistakes += 1;
    markWrongWord(chicken.word);
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
      showFlash(`Manche ${state.roundIndex + 1}`);
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
    overlayText.textContent = `Tu as termine les ${state.sessionRounds.length} manches avec ${state.mistakes} erreur(s).`;
    setResultPanel(true, 'Victoire', stars);
    overlayButton.textContent = 'Rejouer';
  } else {
    overlayTitle.textContent = 'Les poules se sont echappees';
    overlayText.textContent = `La partie s arrete a la manche ${state.roundIndex + 1}. Tu as atteint ${state.mistakes} erreurs.`;
    setResultPanel(true, 'Defaite', stars);
    overlayButton.textContent = 'Recommencer';
  }
  renderRecap();
  setRecapVisible(true);
  overlay.classList.remove('hidden');
}

function startGame() {
  closeNotebook();
  state.gameFinished = false;
  state.roundIndex = 0;
  state.sessionRounds = pickSessionRounds();
  state.mistakes = 0;
  state.hintsUsed = 0;
  state.roundReports = [];
  setResultPanel(false);
  setRecapVisible(false);
  clearRecap();
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
    'Tu joues 3 manches par partie. Approche-toi d une poule pour lire et entendre son mot, porte-la avec E puis depose les bonnes au poulailler. Plus tu avances, plus les poules sont rapides. Le cahier reste disponible sur l ecran d accueil et l ecran de fin.';
  setResultPanel(false);
  setRecapVisible(false);
  overlayButton.textContent = state.gameFinished ? 'Rejouer' : 'Continuer';
  overlay.classList.remove('hidden');
}

function useHint() {
  const round = getCurrentRound();
  if (!round) {
    return;
  }
  state.hintsUsed += 1;
  if (hintText) {
    hintText.textContent = round.hint;
  }
  showFlash('Indice affiche');
}

function resetGame() {
  clearGameTimers();
  window.speechSynthesis?.cancel();
  closeNotebook();
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
  if (key === 'escape' && state.notebookOpen) {
    event.preventDefault();
    closeNotebook();
    return;
  }
  if (key === 'n') {
    if (overlay.classList.contains('hidden') && !state.notebookOpen) {
      return;
    }
    event.preventDefault();
    if (state.notebookOpen) {
      closeNotebook();
    } else {
      openNotebook();
    }
    return;
  }
  if (state.notebookOpen) {
    if (key === 'arrowright' || key === 'd') {
      event.preventDefault();
      animateNotebookToSpread(state.notebookSpreadIndex + 1);
      return;
    }
    if (key === 'arrowleft' || key === 'q' || key === 'a') {
      event.preventDefault();
      animateNotebookToSpread(state.notebookSpreadIndex - 1);
      return;
    }
    return;
  }
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
  if (state.notebookOpen) {
    return;
  }
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
overlayNotebookButton?.addEventListener('click', openNotebook);
closeNotebookButton?.addEventListener('click', closeNotebook);
notebookPrevButton?.addEventListener('click', () => animateNotebookToSpread(state.notebookSpreadIndex - 1));
notebookNextButton?.addEventListener('click', () => animateNotebookToSpread(state.notebookSpreadIndex + 1));
notebookOverlay?.addEventListener('click', (event) => {
  if (event.target === notebookOverlay) {
    closeNotebook();
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
renderNotebook();
state.sessionRounds = pickSessionRounds();
spawnRound();
state.running = false;
requestAnimationFrame((now) => {
  state.lastFrame = now;
  requestAnimationFrame(frame);
});
