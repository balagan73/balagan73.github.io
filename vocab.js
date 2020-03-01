(function(){

  let lessons = []; 

  // Lecture 1
  lessons['german'] = [];
  lessons['hungarian'] = [];
  lessons['german'].push(['noch', 'der Vater', 'die Mutter', 'das Kind', 'die Rose', 'der Informatiker', 'der Woche', 'der Tag', 'das Mädchen', 'das Brot']);
  lessons['hungarian'].push(['még', 'apa', 'anya', 'gyerek', 'rózsa', 'informatikus', 'hét', 'nap', 'lány', 'kenyér']);
  // Use lessons['german'][lecturenumber - 1].push ...
  lessons['german'][0].push('das Fräulein', 'die Übung', 'der Apfel', 'die Äpfel', 'die Frau', 'üben');
  lessons['hungarian'][0].push('kisasszony','gyakorlat', 'alma', 'almák', 'asszony', 'gyakorolni');

  // Lecture 2
  lessons['german'].push(['das Haus']);
  lessons['hungarian'].push(['ház']);

  if (lessons['german'].length != lessons['hungarian'].length) {
      console.log('Different german and hungarian lessons array length!!')
  }
  
  let words = [];
  words['hungarian'] = [];
  words['german'] = [];

  for (let i = 0; i < lessons['german'].length; i++) {
    for (let j = 0; j < lessons['german'][i].length; j++) {
      if (lessons['german'[i].length != lessons['hungarian'][i].length]) {
        console.log('Different number of german and hungarian words in lesson number: ' + i); 
      }
      words['german'].push(lessons['german'][i][j]);
      words['hungarian'].push(lessons['hungarian'][i][j]);
    }
  }

  let goodAnswer;

  function pickWord() {
    let number = Math.floor(Math.random() * words['german'].length);
    let choice = [];
    choice['ger'] = words['german'][number];
    choice['hun'] = words['hungarian'][number];
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