//Mostrar data en pantalla 2

const rootContainer2 = document.getElementById ("secondRoot");
 const allDataEpisodes = (EPISODES.episodes);
 const seasonsSelect = document.getElementById("gotseasons");

 const showDataOfEpisodes = (allDataEpisodes) => {
 let resultData = "";

 allDataEpisodes.forEach(element => {
    if (element.seasonNum !== "") {
        result = rootContainer2.innerHTML += `
        <div>
        <div class='card'>
        <div class='box'>
        <div class='img'>
        <h2>${element.episodeTitle}</h2>
        </div>
        <p>${element.episodeDescription}</p>
        <h4>${element.seasonNum}</h4>
        </div>
        </div>
        </div>`
    }
});
return resultData;    
}
//window.onload = showDataOfEpisodes(allDataEpisodes);



seasonsSelect.addEventListener("change",() => {
    let condition = gotseasons.value;
    let seasonFilter = filterBySeason(allDataEpisodes, condition);
    //Esto sirve para poder limpiar el div select
    rootContainer2.innerHTML = "";
    seasonFilter.forEach(element =>{
      if(element.episodeDescription === ""){
        rootContainer2.innerHTML += `
        <div>
        <div class='card'>
        <div class='box'>
        <div class='img'>
        <h2>${element.episodeTitle}</h2>
        <p>Aún no cuenta con Descripción</p>
        </div>
        <p>${element.episodeDescription}</p>
        <h4>${element.seasonNum}</h4>
        </div>
        </div>
        </div>`
      
      }
      })
    });
    ;
    window.onload = showDataOfEpisodes(allDataEpisodes);


    
    
    
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