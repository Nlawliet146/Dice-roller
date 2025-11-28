function rollDice(){
    
    const numofdice = document.getElementById("num").value;
    const diceresult = document.getElementById("dice_result");
    const diceimages = document.getElementById("dice_images");
    const dicetotal = document.getElementById("dice_total");
    const values = [];
    const images = [];
    let total = 0;
    
    for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="${value}.png">`);  
        total += i;
    }

    diceresult.textContent = `DICE RESULT: ${values.join('/')}` ;
    diceimages.innerHTML = images.join('');
    dicetotal.textContent = `DICE TOTAL: ${total}`;
}

