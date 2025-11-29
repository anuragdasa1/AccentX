<div id="quiz-container"></div>
<div id="result"></div>

<script>
const quiz = [
  {
    question: "Which region do you think this speaker is from?",
    options: ["Middle East", "Africa", "South Asia", "Central Asia", "China"],
    answer: "South Asia"
  },
  {
    question: "What do you think their IELTS score is?",
    options: ["5", "6", "6.5", "7", "7.5", "8"],
    answer: "7.5"
  }
];

const container = document.getElementById("quiz-container");

quiz.forEach((q, idx) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${q.question}</p>` + 
                  q.options.map((opt,i)=>`<input type="radio" name="q${idx}" value="${opt}"> ${opt}<br>`).join("");
  container.appendChild(div);
});

const btn = document.createElement("button");
btn.textContent = "Submit";
container.appendChild(btn);

btn.onclick = () => {
  let output = "";
  quiz.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if(selected){
      output += `<p>${q.question}<br>Your answer: ${selected.value} - ${selected.value===q.answer ? "✅ Correct" : "❌ Wrong, correct: "+q.answer}</p>`;
    } else {
      output += `<p>${q.question}<br>You did not answer</p>`;
    }
  });
  document.getElementById("result").innerHTML = output;
}
</script>
