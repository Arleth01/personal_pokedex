axios.get("http://fizal.me/pokeapi/api/v2/id/25.json")
.then(function(response){
  console.log(response.data.abilities[0].ability.name);
})
var myImage = document.getElementById('card_one');
myImage.addEventListener('click', showAnimation);

function showAnimation(){
  setTimeout(function (){
    myImage.style.animation = "flip 2s linear";
  },1);
}

// My Pokemon Super Class / Main Class
class Pokemon{
  constructor(){

  }
}
// My Pokemon Object goes here
class MyPokemon extends Pokemon{

}
// my Trainer object goes here
class Trainer{

}
