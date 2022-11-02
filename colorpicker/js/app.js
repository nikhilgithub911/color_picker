const getColor = () => {
    //hex code
    const  randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;


    //copies the random hex code to clipboard
    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


//initial call works at the moment th epage is refreshed
getColor();