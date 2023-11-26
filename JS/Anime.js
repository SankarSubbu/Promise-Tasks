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