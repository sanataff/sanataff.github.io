


const body = document.querySelector("body")
const component = document.querySelector("#component")
const rating = document.querySelector("#rating-div")
const content = document.querySelector("#content")
const hiddenContent = document.querySelector("#hidden-content")
const selection = document.querySelector("#selection")




for (let i = 0;i<5; i++){
    const circle = document.createElement("button")
    circle.className = "number-circle"
    circle.textContent = `${i+1}`
    
   
    rating.appendChild(circle);
   

      
}



const circles = document.querySelectorAll(".number-circle")


const submitButton = document.querySelector("#submit-button")

circles.forEach((circle) =>{
    circle.addEventListener("click",function(){
        circle.style.backgroundColor = "#FC7613"
        circle.setAttribute("id","clicked")
    
       
        circles.forEach((circle2)=>{
            circle2.className = "disabled"
            circle2.disabled = true

        })
        
     selection.textContent =`you selected ${document.querySelector("#clicked").innerHTML} out of 5` 
        
    }) 
})
submitButton.addEventListener("click",function(){
    content.remove()
    
    document.getElementById("hidden-content").style.display = "flex"
    document.getElementById("hidden-content").style.flexDirection = "column"
     document.getElementById("hidden-content").style.alignContent= "center"

    document.getElementById("component").style.justifyContent = "center"
    document.getElementById("component").style.alignItems = "center"

       
      

    
    

})







