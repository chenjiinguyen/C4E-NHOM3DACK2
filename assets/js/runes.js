const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
const userElements = document.querySelector(".runes")
userElements.innerHTML = ""
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
      </div>`
      if(data_runes[params.type].includes(i)){
        htmlData += `
        <div class="dropdownA">
        <img class="largeimg" src="102&amp;ccb=1-5&amp;_nc_sid=aee45a&amp;_nc_ohc=-AtSPVUpE5AAX9sakrT&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.xx&amp;oh=03_AVKi_arFmY3Z19XrL_wnEnboEcca17HLf_Ue6aKadwQA9Q&amp;oe=62268DD7" alt="">
        </div>`;
      }
      htmlData += html
      i++;
    }
  }
}
else{
}
userElements.innerHTML = htmlData


