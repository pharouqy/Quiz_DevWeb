document.addEventListener("DOMContentLoaded", function () {
  const rightAnswers = {
    Q_1: "HTML",
    Q_2: "CSS",
    Q_3: "JAVASCRIPT",
    Q_4: "Ul",
    Q_5: "ma-classeQ5",
    Q_6: "a",
    Q_7: "script",
    Q_8: "alert",
    Q_9: "Git",
    Q_10: "MVC",
    Q_11: ".html",
    Q_12: "PHP",
    Q_13: "href",
    Q_14: "Responsivité",
    Q_15: "section",
    Q_16: "JavaScript",
  };

  const button = document.getElementById("button");
  const resultMessage = document.getElementById("result-message");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    const questions = document.querySelectorAll("form > div > section > div");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const choices = question.querySelectorAll("input");
      let isCorrect = false;

      for (let j = 0; j < choices.length; j++) {
        const choice = choices[j];
        if (choice.checked && rightAnswers[question.id] === choice.value) {
          isCorrect = true;
          break;
        }
      }

      if (isCorrect) {
        score++;
        question.classList.add("correct");
      } else {
        question.classList.remove("correct");
      }
    }
    const result = score * 100 / questions.length;
    resultMessage.textContent = `Score: ${result}%`;
  });

  // Activer le bouton lorsque toutes les questions ont été répondues
  const questions = document.querySelectorAll("form > div > section > div");
  questions.forEach((question) => {
    const choices = question.querySelectorAll("input");
    choices.forEach((choice) => {
      choice.addEventListener("change", function () {
        const allQuestionsAnswered = [...questions].every((q) => {
          const qChoices = q.querySelectorAll("input");
          return Array.from(qChoices).some((c) => c.checked);
        });
        button.disabled = !allQuestionsAnswered;
      });
    });
  });
});
