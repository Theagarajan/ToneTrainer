const minimalPairs = [
  { word1: { text: 'mā', audio: 'audio/mā.mp3' }, word2: { text: 'má', audio: 'audio/má.mp3' } },
  { word1: { text: 'mǎ', audio: 'audio/mǎ.mp3' }, word2: { text: 'mà', audio: 'audio/mà.mp3' } },
  // ... more minimal pairs
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