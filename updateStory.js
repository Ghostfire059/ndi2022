const parentContainer = document.getElementsByClassName("lore")[0];
parentContainer.innerHTML = get_historicConv();

// let p = document.querySelector("p");
// p.innerHTML = storyData[get_blocName()].getText();

let inputs = document.getElementsByClassName("inputs")[0];
let options = storyData[get_blockName()].getOptions();

function initOptions() {
    const step = storyData[get_blockName()];
    let options = step.getOptions();
    for(let x in options)
    {
        let buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("buttonWrapper");

        let button = document.createElement("button");
        button.innerHTML = options[x].name;
        button.value = options[x].redirect;
        button.onclick = () => {
            set_blockName(button.value);

            let action = document.createElement("p");
            action.innerHTML = button.innerHTML;
            parentContainer.appendChild(action);

            // Update histroyConv
            const historicConv = parentContainer.innerHTML;
            set_historicConv(historicConv)

            updatePage();
        };

        buttonWrapper.appendChild(button);
        inputs.appendChild(buttonWrapper);
    }
    parentContainer.scrollTo(0, parentContainer.scrollHeight);
}

function updatePage()
{
    const step = storyData[get_blockName()];
    inputs.innerHTML = "";

    let newP = document.createElement("p");
    
    newP.innerHTML = step.getText();
    parentContainer.appendChild(document.createElement("hr"));
    parentContainer.appendChild(newP);

    initOptions();

    // Update histroyConv
    const historicConv = parentContainer.innerHTML;
    set_historicConv(historicConv)

    parentContainer.scrollTo(0, parentContainer.scrollHeight);

    if (restartGame) {
        localStorage.clear()

        let buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("buttonWrapper");

        let button = document.createElement("button");
        button.innerHTML = "Restart";
        button.onclick = () => {
            window.location.reload()
        };
        buttonWrapper.appendChild(button);
        inputs.appendChild(buttonWrapper);
    }
}

initOptions();

// for(let x in options)
// {
//     let buttonWrapper = document.createElement("div");
//     buttonWrapper.classList.add("buttonWrapper");

//     let button = document.createElement("button");
//     button.innerHTML = options[x].name;
//     button.value = options[x].redirect;
//     button.onclick = updatePage;

//     buttonWrapper.appendChild(button);
//     inputs[0].appendChild(buttonWrapper);
// }