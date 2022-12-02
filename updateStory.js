let p = document.querySelector("p");
p.innerHTML = storyData.step1.getText();

let inputs = document.getElementsByClassName("inputs");
let options = storyData.step1.getOptions(); 



function updatePage()
{
    inputs[0].innerHTML = "";
    console.log(inputs.length);
    const step = storyData[this.value]; 
    let parent = p.parentNode;
    
    let action = document.createElement("p");
    action.innerHTML = this.innerHTML;

    let newP = document.createElement("p");
    
    newP.innerHTML = step.getText();
    parent.appendChild(action);
    parent.appendChild(newP);
    let options = step.getOptions();
    for(let x in options)
    {
        let buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("buttonWrapper");

        let button = document.createElement("button");
        button.innerHTML = options[x].name;
        button.value = options[x].redirect;
        button.onclick = updatePage;

        buttonWrapper.appendChild(button);
        inputs[0].appendChild(buttonWrapper);
    }


}


for(let x in options)
{
    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    let button = document.createElement("button");
    button.innerHTML = options[x].name;
    button.value = options[x].redirect;
    button.onclick = updatePage;

    buttonWrapper.appendChild(button);
    inputs[0].appendChild(buttonWrapper);
}

