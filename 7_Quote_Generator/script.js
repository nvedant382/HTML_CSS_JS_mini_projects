const api_url = 'https://quotes-api-self.vercel.app/quote'
let quoteElement = document.getElementById("quote")
let authorElement = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();

    quoteElement.innerHTML = data.quote
    authorElement.innerHTML = data.author

    console.log(data);
}

getQuote(api_url)

function tweet() {
    window.open("https://x.com/intent/tweet?text=" + encodeURIComponent(quoteElement.innerHTML) + " ---- by " + authorElement.innerHTML, "Tweet Window", "width=600, height=300");
}