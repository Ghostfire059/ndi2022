function initLocalStorage(){
    if (localStorage.getItem("blocName") == null){
        localStorage.setItem("blocName", "")
    }
    if (localStorage.getItem("gender") == null){
        localStorage.setItem("gender", "")
    }
    if (localStorage.getItem("goodCondom") == null){
        localStorage.setItem("goodCondom", 0)
    }
    if (localStorage.getItem("condomTaken") == null){
        localStorage.setItem("condomTaken", 0)
    }
    if (localStorage.getItem("glassNumber") == null){
        localStorage.setItem("glassNumber", 0)
    }
    if (localStorage.getItem("historicConv") == null){
        localStorage.setItem("historicConv", "")
    }
}

function get_blocName(){
    return localStorage.getItem("blocName")
}

function set_blockName(blocName){
    localStorage.setItem("blocName", blocName)
}

function get_gender(){
    return localStorage.getItem("gender")
}

function set_blockName(gender){
    localStorage.setItem("gender", gender)
}

function get_goodCondom(){
    return localStorage.getItem("goodCondom")
}

function set_blockName(goodCondom){
    localStorage.setItem("goodCondom", goodCondom)
}

function get_condomTaken(){
    return localStorage.getItem("condomTaken")
}

function set_blockName(condomTaken){
    localStorage.setItem("condomTaken", condomTaken)
}

function get_glassNumber(){
    return localStorage.getItem("glassNumber")
}

function set_blockName(glassNumber){
    localStorage.setItem("glassNumber", glassNumber)
}

function get_historicConv(){
    return localStorage.getItem("historicConv")
}

function set_blockName(historicConv){
    localStorage.setItem("historicConv", historicConv)
}