function myFunctionInput() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("champions");
  li = ul.getElementsByTagName("li");
  
  const inputDisplay = input.value.length > 1 ? 'block' : 'none';
  ul.style.display = inputDisplay;
  
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
  let i = 0;
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

      if(data_runes[params.type].includes(i)){
        htmlData += `<div class="dropdownA">
        <img class="largeimg" src="102&amp;ccb=1-5&amp;_nc_sid=aee45a&amp;_nc_ohc=-AtSPVUpE5AAX9sakrT&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.xx&amp;oh=03_AVKi_arFmY3Z19XrL_wnEnboEcca17HLf_Ue6aKadwQA9Q&amp;oe=62268DD7" alt="">
        </div>`;
      }
      htmlData += html;
      i++;
    }
    
  }
}else{
}

usersElement.innerHTML = htmlData;


