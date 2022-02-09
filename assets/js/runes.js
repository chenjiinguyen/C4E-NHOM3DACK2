function myFunctionInput() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
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


const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
const usersElement = document.querySelector('.runes')
usersElement.innerHTML = ""
let htmlData = ""
if(params.type){
  for(const item of runes){
    if(item.type.includes(params.type)){
      let html = `
      <div class="dropdownA">
      <img class="largeimg" src="${item.image}" alt=""/>
      <div class ="xx">
   <div class="dropdown-contentA">
  <a class="description">${item.description}</a>
  </div></div>
      </div>`;
      htmlData += html;
    }
  }
}else{
  for(const item of runes){
      let html = `
      <div class="dropdownA">
      <img class="largeimg" src="${item.image}" alt=""/>
      <div class ="xx">
   <div class="dropdown-contentA">
  <a class="description">${item.description}</a>
  </div></div>
      </div>`;
      htmlData += html;
  }
}

usersElement.innerHTML = htmlData;


