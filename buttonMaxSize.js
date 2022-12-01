function maxSize()
{
    const buttons = document.getElementsByTagName("button");
    console.log(buttons);
    
    let maxHeight = 0;

    for(let i in buttons)
    {
        console.log(buttons[i]);
        maxHeight = buttons[i].clientHeight>maxHeight ? buttons[i].clientHeight : maxHeight;
    }
    console.log(maxHeight);

    for(let i in buttons)
    {
        buttons[i].clientHeight = maxHeight + 'px';
    };
}

setTimeout(maxSize(), 0);