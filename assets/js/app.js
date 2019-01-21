const filterBySeason = (allDataEpisodes,condition) => {
    if (condition === "0") {
      return allDataEpisodes;
    }
    return allDataEpisodes.filter(element => {
      return element.seasonNum === parseInt(condition);
    });
};
  
  
