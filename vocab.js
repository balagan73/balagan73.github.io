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
  //console.log("lessons: ");
  //console.log(lessons);

  if (lessons['german'].length != lessons['hungarian'].length) {
      console.log('Different german and hungarian lessons array length!!')
  }
  
  let words = [];
  words['hungarian'] = [];
  words['german'] = [];
  //console.log(lessons['german'].length)

  for (let i = 0; i < lessons['german'].length; i++) {
    for (let j = 0; j < lessons['german'][i].length; j++) {
      if (lessons['german'[i].length != lessons['hungarian'][i].length]) {
        console.log('Different number of german and hungarian words in lesson number: ' + i); 
      }
      words['german'].push(lessons['german'][i][j]);
      words['hungarian'].push(lessons['hungarian'][i][j]);
    }
  }
  //console.log("words: ");
  //console.log(words);

  function pickWord() {
    let number = Math.floor(Math.random() * words['german'].length);
    let choice = [];
    choice['ger'] = words['german'][number];
    choice['hun'] = words['hungarian'][number];
    return choice;
  }

  let qElement = document.getElementsByName('question');
  let choice = pickWord();
  qElement[0].innerHTML = choice['ger'];
  let correctAnswer = choice['hun'];
  console.log('corransw');
  console.log(choice);

  let input = document.getElementsByName('input');
  input[0].addEventListener('keyup', function(event) {
    // keyup not good for mobile
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      checkAnswer(input[0].value);
      input[0].value = '';
    }
  }); 

  function checkAnswer(answer) {

    // insert answer in its row
    let qdiv = document.getElementsByName('qdiv')[0];
    let adiv = document.getElementsByName('answer')[0];
    adiv.innerHTML = answer;

    // create and populate new divs for answer and question
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'answer');
    div2.setAttribute('name', 'answer');

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'question');
    div1.setAttribute('name', 'question');

    let newword = pickWord()['ger'];
    div1.innerHTML = newword;

    // create div for new row
    let newqdiv = document.createElement('div');
    newqdiv.setAttribute('class', 'qdiv');
    newqdiv.setAttribute('name', 'qdiv');
    newqdiv.appendChild(div1);
    newqdiv.appendChild(div2);
    // insert new row on top
    qdiv.parentNode.insertBefore(newqdiv, qdiv);

  }

})()