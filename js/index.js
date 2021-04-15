var user;
document.addEventListener('submit', (event) => {
  user = document.getElementById('search').value

  alert(user);
  event.preventDefault();

   return fetch("https://api.github.com/search/users?q="+user)
    .then(resp => resp.json())
    .then(json =>{
      for (const product of json.items) {
          
        let newLi = document.createElement("li");
        newLi.innerHTML = product.login;
        document.getElementById("user-list").appendChild(newLi);
        let newLi2 = document.createElement("li");
        newLi2.innerHTML = product.avatar_url;
        document.getElementById("repos-list").appendChild(newLi2);
      }
    })
})