
if (!localStorage.getItem('fruits')) {
    localStorage.setItem('fruits', JSON.stringify([]));
  }
  
  function updateFruitListUI() {
    const p = document.getElementsByClassName('p')[0];
    const storedFruits = JSON.parse(localStorage.getItem('fruits')) || [];
    p.innerText = storedFruits.join('\n');
  }
  
  document.getElementById('submit').addEventListener('click', () => {
    const input = document.getElementById('fruitInput');
    const newFruit = input.value.trim();
  
    if (newFruit) {
      let storedFruits = JSON.parse(localStorage.getItem('fruits'));
      storedFruits.push(newFruit);
      localStorage.setItem('fruits', JSON.stringify(storedFruits));
  
      updateFruitListUI(); 
      input.value = '';
    }
    
    });
  
  window.addEventListener('load', updateFruitListUI);
  