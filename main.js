console.log();

class pokemon{
  constructor(name,pokeLife,pokeAttack, pokeDefense,pokeAbilities){}
}


axios.get("http://fizal.me/pokeapi/api/v2/id/25.json")
.then(function(response){
  console.log(response);
  console.log(response.data.abilities[0].ability.name);
})
let myImage = document.getElementById('card_one');
  myImage.addEventListener('click',  function(){
  myImage.style.animation = "flip 2s"
});
let myImage2 = document.getElementById('card_two');
  myImage2.addEventListener('click', function(){
  myImage2.style.animation = "flip 2s"
});

let myImage3 = document.getElementById('card_three');
  myImage3.addEventListener('click', function(){
  myImage3.style.animation = "flip 2s"
});



// My Pokemon Super Class / Main Class
class Pokemon(){
  constructor(){

  }
}
// My Pokemon Object goes here
class MyPokemon extends Pokemon{

}
// my Trainer object goes here
class Trainer{
//
// }
