const requestURL = "https://col09008.github.io/WDD230/final/JS/local.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const local = jsonObject['local'];
  for (let i = 0; i < local.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    
    h2.textContent = local[i].name + ' ' + local[i].number;
    
    card.appendChild(h2);
    
    document.querySelector('div.cards').appendChild(card);
    }
  
  });