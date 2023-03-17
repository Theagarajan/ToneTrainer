const minimalPairs = [
  { word1: { text: 'mā', audio: 'audio/mā.mp3' }, word2: { text: 'má', audio: 'audio/má.mp3' } },
  { word1: { text: 'mǎ', audio: 'audio/mǎ.mp3' }, word2: { text: 'mà', audio: 'audio/mà.mp3' } },
  { word1: { text: 'bō', audio: 'audio/bō.mp3' }, word2: { text: 'bó', audio: 'audio/bó.mp3' } },
  { word1: { text: 'bǒ', audio: 'audio/bǒ.mp3' }, word2: { text: 'bò', audio: 'audio/bò.mp3' } },
  { word1: { text: 'pī', audio: 'audio/pī.mp3' }, word2: { text: 'pí', audio: 'audio/pí.mp3' } },
  { word1: { text: 'pǐ', audio: 'audio/pǐ.mp3' }, word2: { text: 'pì', audio: 'audio/pì.mp3' } },
  { word1: { text: 'mō', audio: 'audio/mō.mp3' }, word2: { text: 'mó', audio: 'audio/mó.mp3' } },
  { word1: { text: 'mǒ', audio: 'audio/mǒ.mp3' }, word2: { text: 'mò', audio: 'audio/mò.mp3' } },
  { word1: { text: 'fēn', audio: 'audio/fēn.mp3' }, word2: { text: 'fén', audio: 'audio/fén.mp3' } },
  { word1: { text: 'fěn', audio: 'audio/fěn.mp3' }, word2: { text: 'fèn', audio: 'audio/fèn.mp3' } },
  { word1: { text: 'dā', audio: 'audio/dā.mp3' }, word2: { text: 'dá', audio: 'audio/dá.mp3' } },
  { word1: { text: 'dǎ', audio: 'audio/dǎ.mp3' }, word2: { text: 'dà', audio: 'audio/dà.mp3' } },
  { word1: { text: 'tā', audio: 'audio/tā.mp3' }, word2: { text: 'tá', audio: 'audio/tá.mp3' } },
  { word1: { text: 'tǎ', audio: 'audio/tǎ.mp3' }, word2: { text: 'tà', audio: 'audio/tà.mp3' } },
  { word1: { text: 'nā', audio: 'audio/nā.mp3' }, word2: { text: 'ná', audio: 'audio/ná.mp3' } },
  { word1: { text: 'nǎ', audio: 'audio/nǎ.mp3' }, word2: { text: 'nà', audio: 'audio/nà.mp3' } },
  { word1: { text: 'lā', audio: 'audio/lā.mp3' }, word2: { text: 'lá', audio: 'audio/lá.mp3' } },
  { word1: { text: 'lǎ', audio: 'audio/lǎ.mp3' }, word2: { text: 'là', audio: 'audio/là.mp3' } },
  { word1: { text: 'gū', audio: 'audio/gū.mp3' }, word2: { text: 'gú', audio: 'audio/gú.mp3' } },
  { word1: { text: 'gǔ', audio: 'audio/gǔ.mp3' }, word2: { text: 'gù', audio: 'audio/gù.mp3' } },
  { word1: { text: 'kū', audio: 'audio/kū.mp3' }, word2: { text: 'kú', audio: 'audio/kú.mp3' } },
  { word1: { text: 'kǔ', audio: 'audio/kǔ.mp3' }, word2: { text: 'kù', audio: 'audio/kù.mp3' } },
  { word1: { text: 'hā', audio: 'audio/hā.mp3' }, word2: { text: 'há', audio: 'audio/há.mp3' } },
  { word1: { text: 'hǎ', audio: 'audio/hǎ.mp3' }, word2: { text: 'hà', audio: 'audio/hà.mp3' } },
  { word1: { text: 'jī', audio: 'audio/jī.mp3' }, word2: { text: 'jí', audio: 'audio/jí.mp3' } },
  { word1: { text: 'jǐ', audio: 'audio/jǐ.mp3' }, word2: { text: 'jì', audio: 'audio/jì.mp3' } },
  { word1: { text: 'qī', audio: 'audio/qī.mp3' }, word2: { text: 'qí', audio: 'audio/qí.mp3' } },
  { word1: { text: 'qǐ', audio: 'audio/qǐ.mp3' }, word2: { text: 'qì', audio: 'audio/qì.mp3' } },
  { word1: { text: 'xī', audio: 'audio/xī.mp3' }, word2: { text: 'xí', audio: 'audio/xí.mp3' } },
  { word1: { text: 'xǐ', audio: 'audio/xǐ.mp3' }, word2: { text: 'xì', audio: 'audio/xì.mp3' } },
];

let currentPair;
let answer;

function start() {
  document.getElementById('description').style.display = 'none';
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  nextPair();
}

function loadPair() {
  currentPair = minimalPairs[Math.floor(Math.random() * minimalPairs.length)];
  answer = Math.floor(Math.random() * 2);

  document.getElementById('word1').innerText = currentPair.word1.text;
  document.getElementById('word2').innerText = currentPair.word2.text;

  document.getElementById('feedback').innerText = '';
}

function playAudio() {
  let audio = new Audio(currentPair[`word${answer + 1}`].audio);
  audio.play();
}

function checkAnswer(userAnswer) {
  if (userAnswer === answer) {
    document.getElementById('feedback').innerText = 'Correct!';
  } else {
    document.getElementById('feedback').innerText = 'Incorrect. Try again!';
  }
}

function nextPair() {
  loadPair();
  playAudio();
}
