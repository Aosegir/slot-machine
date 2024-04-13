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


const spinButton = document.getElementById('spin-button');
const slotOne = document.getElementById('slot-1');
const slotTwo = document.getElementById('slot-2');
const slotThree = document.getElementById('slot-3');

spinButton.addEventListener('click', () => {
    slotOne.src = `./images/${generateSlotResult()}.png`;
    slotTwo.src = `./images/${generateSlotResult()}.png`;
    slotThree.src = `./images/${generateSlotResult()}.png`;
});