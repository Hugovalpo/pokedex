let next=1;
for ( let i=next ; i< next+15 ; i++){
    fetch('https://pokeapi.co/api/v2/pokemon/'+i)
              .then(response => response.json())
                .then(data => {
                         let type=data.types[0].type.name;
                         let Name=data.name[0].toUpperCase()+data.name.slice(1);
                         let image=data.sprites.front_default;
                         console.log(fetch);

                    document.querySelector('#pokemonContainer').innerHTML +=`<div class='pokemon ${type}'>
                                <div class="imgContainer">
                                    <img src='${image}' alt=${Name} />
                                </div>
                                <div class="info">
                                    <h3 class="name">${Name}</h3>
                                    <span class="type">Type: <span>${type}</span></span>
                                </div>
                              </div>
                            </div>`
                     }
                );
            }
             
            

document.querySelector('#next').addEventListener('click',
function () {       
                    for ( let i=next ; i< next+15 ; i++){
                        fetch('https://pokeapi.co/api/v2/pokemon/'+i)
                                  .then(response => response.json())
                                    .then(data => {
                                             let type=data.types[0].type.name;
                                             let Name=data.name[0].toUpperCase()+data.name.slice(1);
                                             let image=data.sprites.front_default;
                                             console.log(fetch);
                            document.querySelector('#pokemonContainer').innerHTML +=`<div class='pokemon ${type}'>
                                <div class="imgContainer">
                                    <img src='${image}' alt=${Name} />
                                </div>
                                <div class="info">
                                    <h3 class="name">${Name}</h3>
                                    <span class="type">Type: <span>${type}</span></span>
                                </div>
                            </div>
                            </div>`
                          }
                        );
                    } 
                    next +=15;     
                }
            
);

