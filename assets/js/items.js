const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
const usersElement = document.querySelector('.items')
usersElement.innerHTML = ""
let htmlData = ""
if(params.type){
    for(const item of items){
        if(item.type.includes(params.type)){
            let html = `
            <li class="dropdownA">
            <img class="image" src="${item.image}" height="80" alt="">
            <p class="name">${item.name}</p>
            <div class="dropdown-contentB">
            <a class="description">${item.description}</a>
            </div>
            </li>`
            htmlData += html
        }
    }
}else{
    for(const item of items){
            let html = `
            <li class="dropdownA">
            <img class="image" src="${item.image}" height="80" alt="">
            <p class="name">${item.name}</p>
            <div class="dropdown-contentB">
            <a class="description">${item.description}</a>
            </div>
            </li>`
            htmlData += html
    }
}
usersElement.innerHTML = htmlData;



domItems = document.querySelectorAll(".dropdownA");
for (let i = 0; i < Math.floor(domItems.length / 7); i++) {
  for (let k = 0; k < 8; k++) {
    if (k >= 4 && k <= 7) {
      domItems[8 * i + k]
        .querySelector(".dropdown-contentB")
        .classList.add("right");
    }
  }
}
