
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";
const starWars=(endpoint)=>{
  const handleSuccess=response=>{
    if(response.ok){
      return response.json();
      }
      throw new Errol('Request failed')
    }
    const handleFailure=networkError=>{
    conssole.log(networkErrol.message)
    }
    const handleJsonResponse=jsonResponse=>{
    console.log(jsonResponse)
    
  
    jsonResponse.forEach(element=>console.log('Film episode_ '+element.episode_id+' title is '+element.title))
    
    
  }
    fetch(url+endpoint).then(handleSuccess,handleFailure).then(handleJsonResponse).catch((err)=>{console.log(err)});
  }
  // starWars('films');
  // starWars('planet')
  // starWars('species')
  // starWars('people')
  // starWars('starships')
  // starWars('vahicles')

  const starWarsCount=(endpoint)=>{
    const handleSuccess=response=>{
      if(response.ok){
        return response.json();
        }}
    return fetch(url+endpoint).then(handleSuccess)
  }
  //starWarsCount('films').then(value=>{console.log(value)})
  Promise.all([starWarsCount('films'),starWarsCount('planets'),starWarsCount('species'),starWarsCount('people'),starWarsCount('starships'),starWarsCount('vehicles')]).then(value=>{console.log(value)})

