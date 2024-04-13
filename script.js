// function will generate random number which will be assigned to 
// one of the seven possible slot machine images

function generateSlotResult () {
    let returnImage;
    // randomNum will generate a number 0-99
    let randomNum = Math.floor(Math.random() * 100);
    switch (true) {
        case randomNum < 20:
            returnImage = "lemon";
            break;
        case randomNum < 40:
            returnImage = "bar";
            break;
        case randomNum < 50:
            returnImage = "grape";
            break;
        case randomNum < 60:
            returnImage = "orange";
            break;
        case randomNum < 70:
            returnImage = "cherry";
            break;
        case randomNum < 80:
            returnImage = "bell";
            break;
        case randomNum <= 99:
            returnImage = "seven";
            break;
        default:
            alert("something went wrong!");
            break;
    }
    return returnImage;
}

function generateSlotImage (timeoutNum, slot) {
    let imageResult;
    for(let i = 0; i < timeoutNum; i++) {
        setTimeout(() => {
            imageResult = generateSlotResult();
            slot.src = `./images/${imageResult}.png`;
            slot.alt = imageResult;
        }, 150 * i);
    }
}


const spinButton = document.getElementById('spin-button');
const slotOne = document.getElementById('slot-1');
const slotTwo = document.getElementById('slot-2');
const slotThree = document.getElementById('slot-3');

spinButton.addEventListener('click', () => {

    generateSlotImage(50, slotOne);
    generateSlotImage(70, slotTwo);
    generateSlotImage(90, slotThree);

    setTimeout(() => {
        if(slotOne.alt == slotTwo.alt && slotOne.alt == slotThree.alt) {
            alert("super jackpot! you did it!");
        } else if (slotOne.alt == slotTwo.alt || slotOne.alt == slotThree.alt || slotTwo.alt == slotThree.alt) {
            alert("regular jackpot! you kinda did it!");
        } else {
            alert("too bad!");
        }
    }, 13600);
});