let divEl = document.getElementById("text");
let addBtn = document.getElementById("sub-quote");
let Quotes = JSON.parse(localStorage.getItem("quotes")) || ["There is always one more bug to fix ", " Talk is cheap , Show me the code", "Computers are fast ; Developers keep them slow"];


function submitQuote() {
    let newQuoteEl = document.getElementById("quote-input").value;
    Quotes.push(newQuoteEl);
    alert("New quote was added");
    localStorage.setItem("quotes", JSON.stringify(Quotes));
    newQuoteEl.value = "";
}

function displayQuotes() {
    let n = Quotes.length - 1;
    let random = Math.round((Math.random() * n));
    divEl.innerHTML = Quotes[random];
}
let characterindex = 0
let quoteIndex = 0
    /*
    function designText() {

        let divEl2 = document.getElementById("text2");
        characterindex++
        divEl2.innerHTML = ` ${Quotes[quoteIndex].slice(0,characterindex)}  `;
        setTimeout(designText, 100)
        if (characterindex == Quotes[quoteIndex].length) {
            quoteIndex++
            characterindex = 0
        }
        if (quoteIndex == Quotes.length) {
            quoteIndex = 0;

        }
    }
    designText()
    */
displayQuotes();
setInterval(displayQuotes, 5000)
addBtn.addEventListener("click", submitQuote);