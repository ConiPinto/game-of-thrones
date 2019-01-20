const rootContainer = document.getElementById ("root");
 const allData = (DATA.characters);

 const showData = (allData) => {
 let result = "";

 allData.forEach(element => {
   if (element.characterName !== "") {
        result = rootContainer.innerHTML += `
        <div>
        <div class='card'>
        <div class='box'>
        <div class='img'>
        <img src='${element.characterImageFull}'>
        </div>
        <h2>${element.characterName}</h2>
        </div>
        </div>
        </div>`
    }
});
return result;    
}
window.onload = showData(allData);












 


 