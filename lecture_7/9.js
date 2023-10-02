const arrAnswers = ["елка", "ель", "ёлка"];
const userAnswer = prompt("зимой и летом одним цветом");

for (let i = 0; i < arrAnswers.length; i++) {
  const element = arrAnswers[i];
  if (element === userAnswer) {
    console.log("молодец");
    break;
  } else {
    continue;
  }
}
