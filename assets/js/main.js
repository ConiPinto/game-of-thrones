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


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById("btnTop").style.display = "block";
   } else {
       topFunction();
       document.getElementById("btnTop").style.display = "none";
   }
}
function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}










 


 