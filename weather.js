const city = document.getElementById('cityInput').input
const apiKey="2525ce1f438caf5c475216622949914c"
const citydisplay=document.getElementById('cityDisplay')
const tempdisplay = document.getElementById('tempDisplay')


async function getweather(city){
  try{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(url)
      if(!response.ok)
      throw new Error("not fetching")
    const data= await response.json();

    console.log(data)
    console.log(response)

  }
  catch(error)
  {
    console.log(error);
  }


    


}