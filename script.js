///////////////////////////// BUTTON PRESS /////////////////////////////
let btn_roll = document.querySelector("button.btn_roll");
let result = document.querySelector("div[class='title'] > h1")
let dice_1 = document.querySelector("div[class='player1'] > img")
let dice_2 = document.querySelector("div[class='player2'] > img")

btn_roll.addEventListener("mousedown", function(){
    this.textContent = "Rolled!"
})

btn_roll.addEventListener("mouseup", function(){
    this.textContent = "Roll the dice";
    let number1 = randomNumber(6);
    let number2 = randomNumber(6);
    dice_1.setAttribute("src", `img/dice${number1}.png`);
    dice_2.setAttribute("src", `img/dice${number2}.png`);
    
    if (number1 == number2) {
        result.textContent = `It's a tie! 😅`;
    } else if (number1 > number2) {
        result.textContent = `The winner is ${rightName(name1.value, "Player1")} ${randomEmoji()}`;
    } else {
        result.textContent = `The winner is ${rightName(name2.value,"Player2")} ${randomEmoji()}`;
    }
    
})

///////////////////////////// RANDOM NUMBER /////////////////////////////
function randomNumber(numbers) {
    let number =  Math.floor(Math.random()*numbers + 1);
    return number
} 

///////////////////////////// RANDOM EMOJI /////////////////////////////
function randomEmoji() {
    let emojis = ["🎉","🎊" ,"🎈" ,"✨" ,"🥳","🎆" ,"🎇" ,"🥰" ,"🤩" ,
    "🤗" ,"😘" ,"😝" ,"😜" ,"🤑" ,"🚩" ,"🔥" ,"🤤" ,"😏" , "😎", "😋",
    "😲", "🤯", "🤪", "🥴", "🤭", "🙀", "😽", "😸", "💩", "🙈", "🙊",
    "😈"];
    emoji = emojis[randomNumber(emojis.length - 1)];
    return emoji
}

///////////////////////////// DEFINING NAME /////////////////////////////

let name1 = document.querySelector("div.name1 > input");
let name2 = document.querySelector("div.name2 > input");
let paragraph1 = document.querySelector("div.player1 > p");
let paragraph2 = document.querySelector("div.player2 > p");

name1.addEventListener("keyup", function(){
    paragraph1.textContent = name1.value[0].toUpperCase() + name1.value.slice(1);
    localStorage.name1 = paragraph1;
})


name2.addEventListener("keyup", function(){
    paragraph2.textContent = name2.value[0].toUpperCase() + name2.value.slice(1);
    localStorage.name2 = paragraph2;
})


function rightName(theName, defaultName) {
    if (theName === "") {
        return defaultName
    } else if (theName !== "") {
        return  theName
    }
}
