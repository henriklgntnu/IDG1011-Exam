let content = document.getElementById("quiz-content"); // For displaying the questions and answers

let points = 0; // Points counter

function qOne(el) {
  if (el.innerHTML == "- 22") {
    points++; 
  }

  content.innerHTML = `
            <h2>2. Where was I born?</h2>
            <h3 onclick="qTwo(this)">- Stockholm</h3>
            <h3 onclick="qTwo(this)">- Oslo</h3>
            <h3 onclick="qTwo(this)">- Lillehammer</h3>`;
}

function qTwo(el) {
  if (el.innerHTML == "- Lillehammer") {
    points++;
  }

  content.innerHTML = `
            <h2>3. Which drink is my favourite?</h2>
            <h3 onclick="qThree(this)">- Fanta</h3>
            <h3 onclick="qThree(this)">- Coca cola</h3>
            <h3 onclick="qThree(this)">- Carlsberg</h3>`;
}

function qThree(el) {
  if (el.innerHTML == "- Coca cola") {
    points++;
  }

  content.innerHTML = `
            <h2>4. What is my favourite sport?</h2>
            <h3 onclick="qFour(this)">- Taekwondo</h3>
            <h3 onclick="qFour(this)">- Handball</h3>
            <h3 onclick="qFour(this)">- Football</h3>`;
}

function qFour(el) {
  if (el.innerHTML == "- Taekwondo") {
    points++;
  }

  content.innerHTML = `
            <h2>5. My biggest fear is?</h2>
            <h3 onclick="result(this)">- Spiders</h3>
            <h3 onclick="result(this)">- Heights</h3>
            <h3 onclick="result(this)">- My mom</h3>`;
}

function result(el) {
  if (el.innerHTML == "- My mom") {
    points++;
  }

  if (points < 3) {
    content.innerHTML = `
                <h2 class="none">You answered ${points} correct out of 5</h2>
                <h2 class="none">Please try again, you can do it!</h2>
                <h2 onclick="restart()">Try again >></h2>`;
  } else if (points > 3) {
    content.innerHTML = `
                <h2 class="none">You answered ${points} correct out of 5</h2>
                <h2 class="none">You know a lot about me!</h2>
                <h2 onclick="restart()">Try again >></h2>`;
  }
}

function restart() {
  points = 0;

  content.innerHTML = `
                    <h2>How old am I?</h2>
                    <h3 onclick="qOne(this)">- 20</h3>
                    <h3 onclick="qOne(this)">- 22</h3>
                    <h3 onclick="qOne(this)">- 19</h3>`;
}
