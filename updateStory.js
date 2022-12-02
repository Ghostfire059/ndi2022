let p = document.querySelector("p");
p.innerHTML = storyData.step1.getText();

let inputs = document.getElementsByClassName("inputs");
let options = storyData.step1.getOptions(); 



function updatePage()
{
    inputs[0].innerHTML = "";
    console.log(inputs.length);
    const step = storyData[this.value]; 
    p.innerHTML = step.getText();
    let options = step.getOptions();
    for(let x in options)
    {
        let button = document.createElement("button");
        button.innerHTML = options[x].name;
        button.value = options[x].redirect;
        button.onclick = updatePage;
        inputs[0].appendChild(button);
    }


}


for(let x in options)
{
    let button = document.createElement("button");
    button.innerHTML = options[x].name;
    button.value = options[x].redirect;
    button.onclick = updatePage;
    inputs[0].appendChild(button);
}

