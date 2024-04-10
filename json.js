const a = fetch("obj.json").
                then((response)=>response.json())
                .then((value)=>console.log(value))


const json=` [{
  "name":"nishanth",
  "empid":101,
  "city":"indore"
 
},
{
  "name":"anil",
  "empid":102,
  "city":"mumbai"
}]`
console.log(JSON.stringify(json));

console.log(JSON.parse(json))

// fetch("obj.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
//   })
//   .catch((error) => {
//     console.error('Error fetching or parsing data:', error);
//   });
