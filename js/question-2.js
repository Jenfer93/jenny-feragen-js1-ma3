const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3cf889ba48b84fc3ac8316e0b65c63f4";

const resultContainer = document.querySelector(".container");

async function getGames() {

  const response = await fetch(url);

  const allGames = await response.json();

  const games = allGames.results; 

  resultContainer.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    //console.log(games[i].tags.length);

    resultContainer.innerHTML += `<div class="games"> 
                                  <h2>${games[i].name}<h2>
                                  <p> Rating: ${games[i].rating}</p>
                                  <p> Number of tags: ${games[i].tags.length}</p>
                                  </div>`
  }
}

getGames();

