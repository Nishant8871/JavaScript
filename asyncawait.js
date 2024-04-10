function walk(){
 
  return new Promise((resolve,reject)=>{
    const work=false;
   if(work){ 
    setTimeout(()=>{
      resolve("you walk the dog")
     
    },2000)
  }
  else
  {
    reject("no you lier you didnt work")
  }
  }
  )}

function kitchen(){
 

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("you clean the kitchen")
      
    },3000)
  })
}

function trash(callback){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("you trash the garbage")
     
    },1000)
  })
 
}


async function task(){
  try{
  const walkdone = await walk()
  console.log(walkdone)

  const cleandone = await kitchen()
  console.log(cleandone)

  const trashdone= await trash()
  console.log(trashdone)

  console.log("completed all task using await and async")
  }

  catch(error){
  console.log(error);
  }

  


}

task()