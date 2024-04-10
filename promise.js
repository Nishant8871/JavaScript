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

// walk(()=>{
//   kitchen(()=>{
//     trash(()=>{
//       console.log("complted all task by callback hell")
//     })
//   })
// })

walk().then((value)=>{console.log(value); return kitchen()})
      .then((value)=>{console.log(value); return trash()})
      .then((value)=>{console.log(value),
          console.log("all task completed with help of promise object")})
          .catch((error)=>console.log(error))
      