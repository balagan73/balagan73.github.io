(function(){

  let pages = []; 

  // Lecture 1
  pages['ger'] = [];
  pages['hun'] = [];
  pages['ger'].push(['aber',   'ach so',   'der Alltag', 'andere', 'auch', 'begrüßen', 'die Begrüßung', 'der Beruf',  'da', 'das']);
  pages['hun'].push(['de',     'vagy úgy', 'hétköznap',  'más',    'is',  'üdvözölni', 'üdvözlés',     'foglalkozás', 'itt', 'ez']);
  pages['ger'][0].push('Deutsch',   'falsch',   'der Familienname', 'die Frau', 'Grüß dich!', 'Guten Tag!', 'heißen',  'hören', 'jetzt', 'kommen');
  pages['hun'][0].push('német',     'hamis',    'családnév',  'asszony',    'Üdvözöllek!',  'Jó napot!', 'hívni',     'hallani', 'most', 'jönni');
  pages['ger'][0].push('Kurs',   'der Kursteilnehmer',   'das Land', 'der Lehrer', 'lernen', 'die Liste', 'nicht', 'oder',  'richtig', 'die Schweiz');
  pages['hun'][0].push('tanfolyam', 'tanfolyami résztvevő', 'ország', 'tanár',    'tanulni',  'lista',    'nem',   'vagy', 'helyes', 'Svájc');
  pages['ger'][0].push('die Stadt',   'der Student',   'der Tag', 'der Teilnehmer', 'und', 'vor stellen', 'der Vorname', 'die Vorstellung',  'was?', 'wohnen');
  pages['hun'][0].push('város',     'egyetemista',    'nap',       'résztvevő',    'és',   'bemutatni',   'keresztnév',  'bemutatkozás', 'mi?', 'lakni');

  //pages['ger'].push(['',   '',   '', '', '', '', '', '',  '', '']);
  //pages['hun'].push(['',     '', '',  '',    '',  '', '',     '', '', '']);

  // Use pages['ger'][pagenumber - 6].push ...
  //pages['ger'][0].push('das Fräulein', 'die Übung', 'der Apfel', 'die Äpfel', 'die Frau', 'üben');
  //pages['hun'][0].push('kisasszony','gyakorlat', 'alma', 'almák', 'asszony', 'gyakorolni');

  // Start new page by pushing an array.
  //pages['ger'].push(['das Haus']);
  //pages['hun'].push(['ház']);

  if (pages['ger'].length != pages['hun'].length) {
      console.log('Different ger and hun pages array length!!')
  }
  
  let words = [];
  words['hun'] = [];
  words['ger'] = [];

  for (let i = 0; i < pages['ger'].length; i++) {
    for (let j = 0; j < pages['ger'][i].length; j++) {
      if (pages['ger'][i].length != pages['hun'][i].length) {
        console.log('Different number of ger and hun words in lesson number: ' + i); 
      }
      words['ger'].push(pages['ger'][i][j]);
      words['hun'].push(pages['hun'][i][j]);
    }
  }

  let goodAnswer;

  function pickWord() {
    let number = Math.floor(Math.random() * words['ger'].length);
    let choice = [];
    choice['ger'] = words['ger'][number];
    choice['hun'] = words['hun'][number];
    goodAnswer = choice['hun'];
    // Insert answer in its row.
    let qdiv = document.getElementsByName('qdiv')[0];

    // Create and populate new divs for answer and question.
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'answer');
    div2.setAttribute('name', 'answer');

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'question');
    div1.setAttribute('name', 'question');
    div1.innerHTML = choice['ger'];

    // Create div for new row.
    let newqdiv = document.createElement('div');
    newqdiv.setAttribute('class', 'qdiv');
    newqdiv.setAttribute('name', 'qdiv');
    newqdiv.appendChild(div1);
    newqdiv.appendChild(div2);
    // Insert new row on top.
    qdiv.parentNode.insertBefore(newqdiv, qdiv);
  }

  // Create first question.
  pickWord();

  // Add eventlistener to text field.
  let input = document.getElementsByName('input');
  input[0].addEventListener('keyup', function(event) {
    // Number 13 is the "Enter" key on the keyboard.
    if (event.keyCode === 13 && input[0].value.trim() != '') {
      // Cancel the default action, if needed.
      event.preventDefault();
      checkAnswer(input[0].value);
      input[0].value = '';
    }
  }); 
  
  // Add eventlistener to send button.
  let button = document.getElementsByName('send');
  button[0].addEventListener('click', function(event) {
    let input = document.getElementsByName('input');
    if (input[0].value.trim() != '') {
      // Cancel the default action, if needed.
      event.preventDefault();
      checkAnswer(input[0].value);
      input[0].value = '';
      input[0].focus();
    }
  }); 

  function checkAnswer(answer) {
    //Insert answer in it's row.
    let adiv = document.getElementsByName('answer')[0];
    adiv.innerHTML = answer;
    answer = prepareWord(answer);
    if (answer == goodAnswer) {
      adiv.setAttribute('class', 'answer correct');
    }
    else {
      adiv.setAttribute('class', 'answer wrong');
    }
    pickWord();
  }

  // Trims whitespaces and articles from beginning of a word
  // and makes string lowercase.
  function prepareWord(word) {
    word = word.toLowerCase();
    word = word.trim();
    if (word.startsWith('a ')) {
      word = word.substring(2, word.length);
    }
    if (word.startsWith('az ')) {
      word = word.substring(3, word.length);
    }
    return word;
  }


})()