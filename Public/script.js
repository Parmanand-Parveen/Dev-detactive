let search_btn = document.querySelector(".search_btn")
let search = document.querySelector("#search")
let not_found = document.querySelector(".not_found")
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


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




function renderdata(data){
    if(data.message === "Not Found"){
        not_found.classList.add("active")
      }
      else{
        not_found.classList.remove("active")
        let avatar = document.querySelector(".avatar")    
        let username = document.querySelector(".username")
        let joined = document.querySelector(".joined")       
        let user_link = document.querySelector(".user_link")
        let desc = document.querySelector(".desc")
        let repo_number = document.querySelector(".repo_number")
        let follower_number = document.querySelector(".follower_number")
        let following_number = document.querySelector(".following_number")
        let location = document.querySelector(".location")
        let link = document.querySelector(".link")
        let twitter = document.querySelector(".twitter")
        let company = document.querySelector(".company")
         

        avatar.src = `${data.avatar_url}`
        username.innerHTML = data.name== null ? data?.login : data?.name
        datesegments = data.created_at.split("T").shift().split("-");
        joined.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
        user_link.innerHTML = `@${data?.login}`
        user_link.href = `${data?.html_url}`
        desc.innerHTML = data?.bio == null ? "Bio is not available" : data?.bio;
        repo_number.innerHTML = data?.public_repos
        follower_number.innerHTML = data?.followers
        following_number.innerHTML= data?.following
        location.innerHTML =  data?.location == null?
        "Not Available": data?.location
        link.innerHTML =  data?.blog == ""?
        "Not Available": data?.blog
        twitter.innerHTML = data?.twitter_username ==null ? "Not Available":data?.twitter_username 
        company.innerHTML = data?.company ==null ? "Not Available":data?.company
 }
}

search.value="Parmanand-Parveen"
 
getdata()



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

