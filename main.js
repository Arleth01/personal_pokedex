console.log();
class Pokemon{
  constructor(id, name, defense, attack, hp, abilities){
    this.id = id;
    this.name = name;
    this.defense = defense;
    this.attack = attack;
    this.hp =hp;
    this.abilities = abilities;
  }
  display(){

  }
}

axios.get("http://fizal.me/pokeapi/api/v2/name/charmander.json")
.then(function(response){
  console.log(response.data)
     let charmander = new Pokemon (response.data.id,
          response.data.name,
          response.data.stats[3].base_stat,
          response.data.stats[4].base_stat,
          response.data.stats[5].base_stat,
          response.data.abilities[0].ability


     )
     document.getElementById('c1').innerHTML= "id  - "+charmander.id;
      document.getElementById('c2').innerHTML="name - "+charmander.name;
      document.getElementById('c3').innerHTML="defense - "+charmander.defense;
      document.getElementById('c4').innerHTML="attack - "+charmander.attack;
      document.getElementById('c5').innerHTML="hp - "+charmander.hp;

});
axios.get("http://fizal.me/pokeapi/api/v2/name/smeargle.json")
.then(function(response){
  let smeargle = new Pokemon (response.data.id,
      response.data.name,
      response.data.stats[3].base_stat,
      response.data.stats[4].base_stat,
      response.data.stats[5].base_stat,
      response.data.abilities[0].ability
)
document.getElementById('s1').innerHTML= "id - "+smeargle.id;
document.getElementById('s2').innerHTML="name - "+smeargle.name;
document.getElementById('s3').innerHTML="defense - "+smeargle.defense;
document.getElementById('s4').innerHTML="attack - "+smeargle.attack;
document.getElementById('s5').innerHTML="hp - "+smeargle.hp;
});
axios.get("http://fizal.me/pokeapi/api/v2/name/dewgong.json")
.then(function(response){
  let dewgong = new Pokemon (response.data.id,
    response.data.name,
    response.data.stats[3].base_stat,
    response.data.stats[4].base_stat,
    response.data.stats[5].base_stat,
    response.data.abilities[0].ability
)
document.getElementById('d1').innerHTML="id - "+dewgong.id;
document.getElementById('d2'). innerHTML="name - "+dewgong.name;
document.getElementById('d3').innerHTML="defense - "+dewgong.defense;
document.getElementById('d4').innerHTML="attack - "+dewgong.attack;
document.getElementById('d5').innerHTML="hp - "+dewgong.hp;
});

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
