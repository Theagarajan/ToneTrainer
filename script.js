2 / 2
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
  { word1: { text: 'nǎ', audio: 'audio/nǎ.mp3' }, word2: { text: 'nà', audio: 'audio/nà.mp3' } }
];

let currentPair;
let answer;

function start() {
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
