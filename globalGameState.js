function initLocalStorage(){
    if (localStorage.getItem("blockName") == null){
        localStorage.setItem("blockName", "Chapitre1")
    }
    if (localStorage.getItem("gender") == null){
        localStorage.setItem("gender", "")
    }
    if (localStorage.getItem("goodCondom") == null){
        localStorage.setItem("goodCondom", false)
    }
    if (localStorage.getItem("condomTaken") == null){
        localStorage.setItem("condomTaken", false)
    }
    if (localStorage.getItem("glassNumber") == null){
        localStorage.setItem("glassNumber", 0)
    }
    if (localStorage.getItem("historicConv") == null){
        localStorage.setItem("historicConv", "<p>" + storyData[localStorage.getItem("blockName")].getText() + "</p>")
    }
}
initLocalStorage();