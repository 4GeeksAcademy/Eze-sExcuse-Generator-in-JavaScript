const excuse = [
  "A lonely jogger kicked my sandwich on the street.",
  "My dog ate my homework.",
  "I had a flat tire.",
  "I missed the bus.",
  "My alarm didn't go off.",
  "I was feeling under the weather.",
  "I had a family emergency.",
  "I got stuck in traffic.",
  "I lost track of time.",
  "I had to take care of a sick friend.",
  "My computer crashed."
];
function generateRandomExcuse() {
  return excuse[Math.floor(Math.random() * excuse.length)];
}
document.querySelector(".secondary-header").innerText = generateRandomExcuse();
