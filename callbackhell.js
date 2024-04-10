//it is a old method for acheiveing async
// callback are nested within 0ther callback


function fun1(callback){
  setTimeout(()=>{
    console.log("task 1")
    callback()
  },3000)
 
}

function fun2(callback){
  setTimeout(()=>{
    console.log("task2")
    callback()
  },2000)
  
}

function fun3(callback){
  setTimeout(()=>{
      console.log("task 3")
      callback()
  },1000)
}

fun1(()=>{
  fun2(()=>{
    fun3(()=>{
        console.log("all executed successfully")
    })
  })
})

