let p = document.querySelector("p");
p.innerHTML = storyData.step1.getText();

let inputs = document.querySelector("inputs");
let button = document.createElement("button");
let options = storyData.step1.getOptions(); 
for(let x in options)
{
    console.log(x);
}
// button.innerHTML = sto
inputs.appendChild(button);


