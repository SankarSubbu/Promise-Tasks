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