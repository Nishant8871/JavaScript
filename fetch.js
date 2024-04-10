// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//       .then((response)=>{
//         if(!response.ok)
//           throw new Error("could not fetch API")
//         return response.json()})
//       .then((data)=>console.log(data.game_indices.game_index))
//       .catch((error)=>console.log(error))

// can also do using await and sync

async function poke(){
  try{
  const name = document.getElementById('pokename').value.toLowerCase()
  const fet = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const img =document.getElementById('img')
  if(!fet.ok)
    throw new Error("could not fetch")

   
      const a = await fet.json()
      //console.log(a.sprites.front_default);

      const res = a.sprites.front_default

      img.src=res;
      img.style.width="200px";
  }
  catch(error){
    console.error(error)
  }



      

}

poke()