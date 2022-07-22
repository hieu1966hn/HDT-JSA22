/// Gọi API

// Các bước để tạo ra giao diện có dạng list 

// 1. Tạo 1 thẻ mẫu bên html + copy xem thử giao diện

// 2. Chuẩn bị API (dữ liệu được cho sẵn)

const POKEMONAPI = 'https://pokeapi.co/api/v2/pokemon/'

const POKEMONNAME = [
  "charmander",
  "charmeleon",
  "charizard",
  "wartortle",
  "caterpie"
]

const container = document.getElementById("container");

for (let i = 0; i < POKEMONNAME.length; i++) {
  const url = POKEMONAPI + POKEMONNAME[i]; // đang là 1 chuỗi

  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      console.log(data); // nó là cái gì
      const abilityUrl = data.abilities[0].ability.url;
      const imageUrl = data.sprites.front_shiny;

      fetch(abilityUrl)
        .then((result) => result.json())
        .then((ability) => {
          console.log(ability);
          const effect = ability.effect_entries[1].effect

          container.innerHTML = `
          
          `
        })



    })
}


// fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
