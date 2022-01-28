function myFunctionInput() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("items");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}



const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const usersElement = document.querySelector('.items');
usersElement.innerHTML = "";
let htmlData = "";
if(params.type){
    for (const item of items) {
        if (item.type.includes(params.type)) {
                let html = `
                
                <ul class="items">
                <li class="dropdownA">
                    <img class="image" src="${item.image}" height="80" alt="">
                    <p class="name">${item.name}</p>
                    <div class ="xx">
                    <div class="dropdown-content">
                        <a class="description">${item.description}</a>
                    </div></div>
                </li>
                </ul>`;
                htmlData += html;
            
        }
    }
    
}else{
    for (const item of items) {
                let html = `
                
                <ul class="items">
                <li class="dropdownA">
                    <img class="image" src="${item.image}" height="80" alt="">
                    <p class="name">${item.name}</p>
                    <div class ="xx">
                    <div class="dropdown-content">
                        <a class="description">${item.description}</a>
                    </div></div>
                </li>
                </ul>`;
                htmlData += html;
    }
}
usersElement.innerHTML = htmlData;