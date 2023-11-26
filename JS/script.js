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

function getAnimeChan() {
  fetch('https://api.waifu.pics/sfw/waifu')
    .then(response => response.json())
    .then(data => {
      const animeChan = data;
      const animeChanResult = document.getElementById('animeChanResult');
      animeChanResult.innerHTML = `
        <img src="${animeChan.url}" alt="${animeChan.name}" class="img-fluid">
        <h4>${animeChan.name}</h4>
      `;
    });
}

const getAnimeButton = document.getElementById('getAnimeChanButton')
getAnimeButton.addEventListener('click',getAnimeChan)

function getColorPalette() {
  fetch('https://colormind.io/api/')
    .then(response => response.json())
    .then(data => {
      const colorPalette = data.result[0].colors;
      const colorPaletteResult = document.getElementById('colorPaletteResult');
      colorPaletteResult.innerHTML = `
        <ul>
          ${colorPalette.map(color => `<li style="background-color: ${color};">${color}</li>`).join('')}
        </ul>
      `;
    });
}

const getColorButton = document.getElementById('getColorPaletteButton')
getColorButton.addEventListener('click',getColorPalette)