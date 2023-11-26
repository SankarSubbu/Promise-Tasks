function getPet() {
  fetch('https://api.thedogapi.com/v1/breeds/random')
    .then(response => response.json())
    .then(data => {
      const pet = data[0];
      const petResult = document.getElementById('petResult');
      petResult.innerHTML = `
        <img src="${pet.image.url}" alt="${pet.name}" class="img-fluid">
        <h4>${pet.name}</h4>
        <p>${pet.temperament}</p>
      `;
    });
}

const getPetButton = document.getElementById('getPetButton')
getPetButton.addEventListener('click', getPet)

