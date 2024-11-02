const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

const getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index <= 9; index++) {
  let hole = getHole(index);
  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead++;
      deadCounter.textContent = dead;
    } else {
      lost++;
      lostCounter.textContent = lost;
    }

    if (dead === 10) {
      alert('Вы победили!');
      resetCounters();
    }

    if (lost === 5) {
      alert('Вы проиграли!');
      resetCounters();
    }
  }
}

function resetCounters() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
}

  