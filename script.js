const questions = [
    {
      question: "Where would I want to travel next? ✈️",
      options: ["Japan", "Australia", "Turkey"],
      correct: "Japan",
      gif: `
        <div class="tenor-gif-embed" style="width: 50%;" data-postid="16633861258819554494" data-share-method="host" data-aspect-ratio="1" data-width="50%">
          <a href="https://tenor.com/view/peach-goma-peach-and-goma-peachy-cat-goma-goma-and-peach-gif-13298913404816783956">
            Peach Goma Peach And Goma GIF
          </a> 
          from <a href="https://tenor.com/search/peach+goma-gifs">Peach Goma GIFs</a>
        </div>
      `,
    },
    {
      question: "What's my favorite cologne? 🌸",
      options: ["Mont Blanc", "YSL", "Versace"],
      correct: "Versace",
      gif: `
      <img src="gifs/tom_perfume.gif" alt="Kebab GIF" style="width: 50%;"/>
      `,
    },
    {
      question: "What's my favorite food? 🍕",
      // Updated options here
      options: ["Red Paneer", "Kebab", "Tiramisu"],
      // Updated correct answer
      correct: "Kebab",
      gif: `
      <img src="gifs/eating.gif" alt="Kebab GIF" style="width: 50%;"/>
      `,
    },
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      
      // Set the question text
      document.getElementById("question-text").innerText = question.question;
  
      // Set the options
      const optionsContainer = document.getElementById("options-container");
      optionsContainer.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
      });
  
      // Set the GIF
      document.getElementById("gif-container").innerHTML = question.gif;
    } else {
      // All questions answered, redirect to final page
      window.location.href = "final.html";
    }
  }
  
  function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const messageElement = document.getElementById("message");
  
    if (answer === question.correct) {
      messageElement.innerText = "Correct! 🎉";
      currentQuestionIndex++;
      setTimeout(loadQuestion, 1000); // Load the next question after a short delay
    } else {
      messageElement.innerText = "Incorrect, try again. 😞";
    }
  }
  
  window.onload = loadQuestion;
  