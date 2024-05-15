

function rollDice(){
    const number = document.getElementById("number").value;  // get the value    
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values=[];
    const images=[];
    
    for(let i =0 ;i <500;i++){
        const value = Math.floor(Math.random()*6) + 1;
         for(let j=0;j<values.length;j++) {
            if (values[j] == value) 
            { values.splice(j,value);
             images.splice(j,value);
              i--;
            }
            
        }
         values.push(value);
         images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">` );
         if(values.length==number){ break;}
    }

    diceResult.textContent =`dice ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}

