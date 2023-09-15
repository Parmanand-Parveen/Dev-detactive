let search_btn = document.querySelector(".search_btn")
let search = document.querySelector("#search")
let not_found = document.querySelector(".not_found")


async function getdata(){
    let username = search.value;
    let raw = await fetch (`https://api.github.com/users/${username}`)
    let data = await raw.json()
    renderdata(data)
    console.log(data.message)
    console.log(data)}

    search.addEventListener("keydown",function(e){
        if(e.key == "Enter"){
            if(search.value !== ""){
                getdata()
            }
        }
    })

    search.addEventListener("input",function(){
        not_found.classList.remove("active")
    })


search_btn.addEventListener("click",function(){
     getdata()
    })

  search.addEventListener()  


function renderdata(data){
    if(data.message === "Not Found"){
        not_found.classList.add("active")
      }
      else{
        not_found.classList.remove("active")
         let avatar = document.querySelector(".avatar")    
        let joined = document.querySelector(".joined")       
        let user_link = document.querySelector(".user_link")
        let desc = document.querySelector(".desc")
        let repo_number


      }
}

