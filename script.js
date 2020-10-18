const quote_container = document.getElementById('quote_container');
const quote_text = document.getElementById('quote');
const author_text = document.getElementById('author');
const twittQuoteBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader');

const twitterButtonURL = 'https://twitter.com/intent/tweet/' 


loading = (bool) => {
    loader.hidden = !bool;
    quote_container.hidden = bool
}


//GET Quote from API

async function getQuote(){
    loading(true);
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(proxyURL + apiURL);
        const data = await response.json()
        console.log(data);
        data.quoteAuthor === ''? author_text.innerText = 'Unknown': author_text.innerText = data.quoteAuthor
        quote_text.innerText = data.quoteText;
        
    } catch (error) {
        console.log('Whoops no quote', error)
    }
    loading(false);
}

twittQuote = () =>{
    const quote = quote_text.innerText;
    const author = author_text.innerText;
    const twittURL = twitterButtonURL+`?text=${quote}-${author}`
    window.open(twittURL, '_blank')
}


//Event Listeners   
newQuoteBtn.addEventListener('click', getQuote)
twittQuoteBtn.addEventListener('click', twittQuote)


//getQuote();
loading()